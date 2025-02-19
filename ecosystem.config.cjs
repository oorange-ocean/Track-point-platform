module.exports = {
  apps: [{
    name: "tpp",
    script: "npx",
    args: ["vite", "preview", "--host", "0.0.0.0", "--port", "4173"],
    env: {
      NODE_ENV: "production",
      VITE_API_BASE: "http://47.115.231.105"
    }
  }]
}