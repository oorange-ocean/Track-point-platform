module.exports = {
  apps: [{
    name: "tpp",
    script: "npm",
    args: "run preview",
    env: {
      NODE_ENV: "production",
      PORT: 4173,  // vite preview 默认端口
      VITE_API_BASE: "http://47.115.231.105"
    }
  }]
} 