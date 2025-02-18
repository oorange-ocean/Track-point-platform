// src/App.tsx

import React from 'react';
import Layout from 'antd/es/layout';
import Menu from 'antd/es/menu';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { HomeOutlined, AppstoreAddOutlined, SearchOutlined, BugOutlined } from '@ant-design/icons';
import ErrorsMonitorPage from './pages/ErrorsMonitorPage';
import DashboardPage from './pages/DashboardPage';
import EventsPage from './pages/EventsPage';

const { Sider } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        {/* 侧边栏 */}
        <Sider width={250} style={{ background: '#32173A' }}>
          <div className="logo" />
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            theme="dark"
            style={{ height: '100%', borderRight: 0, background: '#32173A', color: 'white' }}
          >
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/">埋点数据看板</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<AppstoreAddOutlined />}>
              <Link to="/events">埋点事件管理</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<SearchOutlined />}>
              <Link to="/performance">性能监控</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<BugOutlined />}>
              <Link to="/errors">错误监控</Link>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/errors" element={<ErrorsMonitorPage />} />
            {/* 性能监控页面路由待添加 */}
            <Route path="/performance" element={<div>性能监控页面开发中...</div>} />
          </Routes>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
