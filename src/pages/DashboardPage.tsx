import React from "react";
import { Layout } from "antd";
import Dashboard from "../components/Dashboard";
import FilterPanel from "../components/FilterPanel";

const { Content } = Layout;

const DashboardPage: React.FC = () => (
  <Layout>
    <Content style={{ padding: "20px" }}>
      <h2>埋点数据看板</h2>
      <FilterPanel onFilter={() => {}} />
      <Dashboard />
    </Content>
  </Layout>
);

export default DashboardPage;
