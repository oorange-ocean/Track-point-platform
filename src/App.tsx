import React from 'react';
import { Menu } from 'antd';
import ConfigProvider from 'antd/es/config-provider'; // 修改导入路径
import { Layout as AntdLayout } from 'antd/es'; // 使用新的导入路径
import 'antd/dist/reset.css'; // 导入样式

const { Header, Footer, Sider, Content } = AntdLayout;

const App: React.FC = () => (
  <ConfigProvider>
    <AntdLayout style={{ minHeight: '100vh' }}>
      <Sider collapsible>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">首页</Menu.Item>
          <Menu.Item key="2">关于</Menu.Item>
          <Menu.Item key="3">联系</Menu.Item>
        </Menu>
      </Sider>
      <AntdLayout className="site-layout">
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            内容区域
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </AntdLayout>
    </AntdLayout>
  </ConfigProvider>
);

export default App;