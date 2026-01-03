# 银行场景智能题应用 MVP

一个基于 React + Express 的全栈银行知识答题应用，用于验证用户是否愿意通过答题学习银行业务知识。

## 项目结构

```
banking-quiz-mvp/
├── backend/           # 后端代码（Node.js + Express）
│   ├── index.js       # Express 入口文件
│   ├── package.json   # 后端依赖配置
│   └── questions.js   # 题目数据（硬编码）
└── frontend/          # 前端代码（React + Vite）
    ├── public/
    ├── src/
    │   ├── App.jsx    # 主应用组件
    │   ├── Quiz.jsx   # 答题组件
    │   ├── main.jsx   # 前端入口文件
    │   └── index.css  # 样式文件
    ├── package.json   # 前端依赖配置
    └── vite.config.js # Vite 配置
```

## 本地运行

### 1. 启动后端服务

```bash
cd backend
npm install
npm start
```

后端服务将运行在 http://localhost:3000

### 2. 启动前端开发服务器

```bash
cd frontend
npm install
npm run dev
```

前端应用将运行在 http://localhost:5173（Vite 默认端口）

## Zeabur 部署指南

### 部署后端

1. 登录 Zeabur 控制台
2. 点击 "新建服务"，选择 "从 GitHub 导入"
3. 选择你的仓库，设置 "Root Directory" 为 `backend`
4. 点击 "部署"
5. Zeabur 会自动识别 Node.js 项目并部署

### 部署前端

1. 登录 Zeabur 控制台
2. 点击 "新建服务"，选择 "从 GitHub 导入"
3. 选择你的仓库，设置 "Root Directory" 为 `frontend`
4. 点击 "部署"
5. Zeabur 会自动识别 React 项目并部署

### 配置前端 API 地址

部署成功后，需要修改前端代码中的 API 地址，将 `App.jsx` 中的 `fetch` URL 替换为后端服务的实际域名。

```javascript
// 修改 frontend/src/App.jsx
const response = await fetch('https://your-backend-zeabur-domain/api/questions');
```

## 功能说明

- **后端**：提供 GET /api/questions 接口，返回 5 道银行知识多选题
- **前端**：展示题目，用户点击选项后判断是否正确，自动跳转到下一题，最后显示得分
- **无需注册**：直接访问即可使用，无需用户登录或数据库

## 技术栈

- **后端**：Node.js + Express
- **前端**：React + Vite
- **通信**：REST API

## MVP 范围

- ✅ 5 道银行知识多选题
- ✅ 前后端分离架构
- ✅ 即时反馈答题结果
- ✅ 最终得分统计
- ✅ 支持 Zeabur 一键部署
- ✅ 无需用户注册登录