import React, { useEffect, useState } from "react";
import Table from "antd/es/table";
import Button from "antd/es/button";
import Popconfirm from "antd/es/popconfirm";
import message from "antd/es/message";
import { fetchEvents, deleteEvent } from "./api";

interface Event {
  id: string;
  name: string;
  eventKey: string;
}

const EventTable: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    const data = await fetchEvents() as { data: Event[] };
    setEvents(data.data);
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
