import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/reset.css'; // 导入 Ant Design 样式
import App from './App.tsx';

// 获取根元素，确保其存在
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}