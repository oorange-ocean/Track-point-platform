import React from "react";
import { Layout } from "antd";
import EventTable from "../components/EventTable";

const { Content } = Layout;

const EventsPage: React.FC = () => (
  <Layout>
    <Content style={{ padding: "20px" }}>
      <h2>埋点事件管理</h2>
      <EventTable />
    </Content>
  </Layout>
);

export default EventsPage;
