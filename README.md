# Track-point-platform
2025豆包MarsCode 青训营-寒假专场【前端项目二】TrackPoint 项目 埋点平台代码仓库——组队编号126--队名：埋的都队
# React + TypeScript + Vite

埋点平台
项目简介
本项目是一个简单的埋点平台，用于管理埋点事件、查询数据（PV、UV）、数据筛选和可视化展示。前端使用 React + TypeScript，后端使用 Node.js（Express）和数据库（MongoDB 或 MySQL）存储数据。

技术栈
前端：React, TypeScript, Ant Design, Chart.js
数据库：MongoDB 或 MySQL(未定)

功能说明
1. 埋点数据查询
查询 PV、UV：通过提供的筛选条件，展示指定事件的页面访问量（PV）和独立访客数（UV）。
2. 事件管理
增、删、改、查：用户可以在事件管理页面查看、删除或编辑埋点事件，管理系统中的所有埋点。
3. 数据筛选
按时间、用户行为筛选数据：在数据看板页面，用户可以通过时间范围和事件类型进行筛选，查看所选条件下的 PV 和 UV 数据。
4. 数据可视化看板
折线图、饼图：使用 Chart.js 进行数据的可视化，展示 PV 和 UV 的时间趋势。

项目组件说明
EventTable.tsx：展示埋点事件数据的表格，支持增删改查。
EventForm.tsx：用于新增或编辑埋点事件。
Dashboard.tsx：展示数据可视化看板，使用折线图展示 PV 和 UV 数据。
FilterPanel.tsx：提供数据筛选的输入框，支持选择时间范围和事件类型。
api.ts：封装前端与后端交互的 API，提供获取事件列表、创建事件、更新事件等功能。
页面
EventsPage.tsx：展示事件管理界面，包含事件列表和增删改查功能。
DashboardPage.tsx：展示数据看板界面，包含筛选面板和数据可视化图表。

目前app.tsx是一个首页示例
