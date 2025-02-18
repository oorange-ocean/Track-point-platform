import React, { useState, useEffect } from "react";
import Layout from 'antd/es/layout';
import Card from 'antd/es/card';
import Row from 'antd/es/row';
import Col from 'antd/es/col';
import Table from 'antd/es/table';
import DatePicker from 'antd/es/date-picker';
import { Line, Pie } from "react-chartjs-2";
import dayjs from "dayjs";
import { ErrorQueryParams, errorService, ErrorStats } from "../services/errorService";
import Select from "antd/es/select";
import Space from "antd/es/space";

const { Content } = Layout;
const { RangePicker } = DatePicker;

const ErrorsMonitorPage: React.FC = () => {
  const [errorList, setErrorList] = useState<any[]>([]);
  const [stats, setStats] = useState<ErrorStats | null>(null);
  const [loading, setLoading] = useState(false);
  const [queryParams, setQueryParams] = useState<ErrorQueryParams>({
    startTime: dayjs().subtract(7, "day").unix(),
    endTime: dayjs().unix(),
    apikey: import.meta.env.VITE_API_KEY, // 使用环境变量
    page: 1,
    pageSize: 10,
  });

  const loadData = async () => {
    setLoading(true);
    try {
      const [listResponse, statsResponse] = await Promise.all([
        errorService.fetchList(queryParams),
        errorService.fetchStats({
          startTime: queryParams.startTime,
          endTime: queryParams.endTime,
          apikey: queryParams.apikey,
        }),
      ]);
      setErrorList(listResponse.data.list);
      setStats(statsResponse.data);
    } catch (error) {
      console.error("加载错误数据失败:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [queryParams]);

  const columns = [
    { title: "错误类型", dataIndex: "type", key: "type" },
    { title: "错误信息", dataIndex: "message", key: "message" },
    { title: "页面URL", dataIndex: "pageUrl", key: "pageUrl" },
    {
      title: "发生时间",
      dataIndex: "time",
      key: "time",
      render: (time: number) => dayjs(time * 1000).format("YYYY-MM-DD HH:mm:ss"),
    },
    { title: "浏览器", dataIndex: ["deviceInfo", "browser"], key: "browser" },
  ];

  const handleDateRangeChange = (dates: any) => {
    if (dates) {
      setQueryParams({
        ...queryParams,
        startTime: dates[0].unix(),
        endTime: dates[1].unix(),
      });
    }
  };

  return (
    <Layout>
      <Content style={{ padding: "20px" }}>
        <h2>错误监控</h2>
        
        <Space style={{ marginBottom: 16 }}>
          <RangePicker
            showTime
            onChange={handleDateRangeChange}
            defaultValue={[
              dayjs.unix(queryParams.startTime),
              dayjs.unix(queryParams.endTime),
            ]}
          />
          <Select
            style={{ width: 120 }}
            placeholder="错误类型"
            onChange={(value) =>
              setQueryParams({ ...queryParams, type: value })
            }
          >
            <Select.Option value="error">JS错误</Select.Option>
            <Select.Option value="resource">资源错误</Select.Option>
            <Select.Option value="xhr">接口错误</Select.Option>
          </Select>
        </Space>

        <Row gutter={16}>
          <Col span={12}>
            <Card title="错误趋势">
              {stats && (
                <Line
                  data={{
                    labels: stats.urlStats.map((item) => item.pageUrl),
                    datasets: [
                      {
                        label: "错误数量",
                        data: stats.urlStats.map((item) => item.count),
                        borderColor: "rgb(75, 192, 192)",
                      },
                    ],
                  }}
                />
              )}
            </Card>
          </Col>
          <Col span={12}>
            <Card title="错误类型分布">
              {stats && (
                <Pie
                  data={{
                    labels: stats.typeStats.map((item) => item.type),
                    datasets: [
                      {
                        data: stats.typeStats.map((item) => item.count),
                        backgroundColor: [
                          "#FF6384",
                          "#36A2EB",
                          "#FFCE56",
                          "#4BC0C0",
                        ],
                      },
                    ],
                  }}
                />
              )}
            </Card>
          </Col>
        </Row>

        <Card title="错误列表" style={{ marginTop: 16 }}>
          <Table
            columns={columns}
            dataSource={errorList}
            rowKey="id"
            loading={loading}
            pagination={{
              current: queryParams.page,
              pageSize: queryParams.pageSize,
              onChange: (page) =>
                setQueryParams({ ...queryParams, page }),
            }}
          />
        </Card>
      </Content>
    </Layout>
  );
};

export default ErrorsMonitorPage; 