module.exports = {
  apps: [{
    name: "tpp",
    script: "serve",  // 使用 serve 命令
    args: "dist --listen 4173",  // 修改监听配置
    env: {
      NODE_ENV: "production",
      VITE_API_BASE: "http://47.115.231.105"
    }
  }]
} 