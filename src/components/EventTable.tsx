import React, { useEffect, useState } from "react";
import { Table, Button, Popconfirm, message } from "antd";
import { fetchEvents, deleteEvent } from "./api";

const EventTable: React.FC = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    const data = await fetchEvents();
    setEvents(data);
  };

  const handleDelete = async (id: string) => {
    await deleteEvent(id);
    message.success("删除成功");
    loadEvents();
  };

  const columns = [
    { title: "事件名称", dataIndex: "name", key: "name" },
    { title: "事件标识", dataIndex: "eventKey", key: "eventKey" },
    {
      title: "操作",
      render: (record: any) => (
        <Popconfirm title="确定删除?" onConfirm={() => handleDelete(record.id)}>
          <Button danger>删除</Button>
        </Popconfirm>
      ),
    },
  ];

  return <Table dataSource={events} columns={columns} rowKey="id" />;
};

export default EventTable;
