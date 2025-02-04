// src/App.tsx

import React from 'react';
import { Layout, Menu, Breadcrumb, Card, Typography, Table, TableContainer, TableHead, TableRow, TableCell, Paper, Row, Col } from 'antd';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { AppstoreAddOutlined, HomeOutlined, SearchOutlined } from '@ant-design/icons';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const { Header, Content, Sider } = Layout;

const App: React.FC = () => {
  // Mock data for performance metrics and transactions
  const performanceData = {
    userMisery: [7.8, 8.1, 7.9, 8.3, 8.5],
    transactionsPerMinute: [8.5, 9.0, 8.7, 9.2, 9.5],
    failureRate: [1.2, 1.3, 1.1, 1.0, 0.9],
  };

  // Chart data
  const lineChartData = {
    labels: ['第1天', '第2天', '第3天', '第4天', '第5天'],
    datasets: [
      {
        label: '用户痛苦指数',
        data: performanceData.userMisery,
        borderColor: 'rgba(255, 99, 132, 0.6)',
        fill: false,
      },
      {
        label: '每分钟交易量',
        data: performanceData.transactionsPerMinute,
        borderColor: 'rgba(54, 162, 235, 0.6)',
        fill: false,
      },
      {
        label: '失败率',
        data: performanceData.failureRate,
        borderColor: 'rgba(75, 192, 192, 0.6)',
        fill: false,
      },
    ],
  };

  // Data for the table
  const tableData = [
    {
      key: '1',
      transaction: '/product/details',
      project: 'PlantMood',
      tpm: 130,
      failureRate: '0.33%',
      userMisery: 452,
    },
    {
      key: '2',
      transaction: '/product/list',
      project: 'PlantMood',
      tpm: 154,
      failureRate: '5.33%',
      userMisery: 245,
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sider width={250} className="site-layout-background">
        <div className="logo" />
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="1" icon={<HomeOutlined />}>
            仪表盘
          </Menu.Item>
          <Menu.Item key="2" icon={<AppstoreAddOutlined />}>
            性能
          </Menu.Item>
          <Menu.Item key="3" icon={<SearchOutlined />}>
            问题
          </Menu.Item>
        </Menu>
      </Sider>

      {/* Layout for Header and Content */}
      <Layout style={{ padding: '0 24px 24px' }}>
        {/* Header */}
        <Header className="site-layout-background" style={{ padding: 0, background: '#fff' }}>
          <Typography.Title level={3}>性能仪表盘</Typography.Title>
        </Header>

        {/* Content */}
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: '#fff',
          }}
        >
          <Row gutter={16}>
            <Col span={8}>
              <Card title="用户痛苦指数" bordered={false}>
                <Line data={lineChartData} />
              </Card>
            </Col>
            <Col span={8}>
              <Card title="每分钟交易量" bordered={false}>
                <Line data={lineChartData} />
              </Card>
            </Col>
            <Col span={8}>
              <Card title="失败率" bordered={false}>
                <Line data={lineChartData} />
              </Card>
            </Col>
          </Row>

          <Row gutter={16} style={{ marginTop: 24 }}>
            <Col span={12}>
              <Card title="最相关问题" bordered={false}>
                <Table
                  dataSource={tableData}
                  columns={[
                    { title: '交易', dataIndex: 'transaction', key: 'transaction' },
                    { title: '项目', dataIndex: 'project', key: 'project' },
                    { title: '每分钟交易量 (TPM)', dataIndex: 'tpm', key: 'tpm' },
                    { title: '失败率', dataIndex: 'failureRate', key: 'failureRate' },
                    { title: '用户痛苦指数', dataIndex: 'userMisery', key: 'userMisery' },
                  ]}
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card title="性能改善" bordered={false}>
                <Table
                  dataSource={tableData}
                  columns={[
                    { title: '交易', dataIndex: 'transaction', key: 'transaction' },
                    { title: '项目', dataIndex: 'project', key: 'project' },
                    { title: '每分钟交易量 (TPM)', dataIndex: 'tpm', key: 'tpm' },
                    { title: '失败率', dataIndex: 'failureRate', key: 'failureRate' },
                    { title: '用户痛苦指数', dataIndex: 'userMisery', key: 'userMisery' },
                  ]}
                />
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
