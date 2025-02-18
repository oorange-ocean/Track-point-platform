import axios from "axios";

const API_BASE = "http://localhost:5000"; // 后端地址

// 获取埋点事件列表
export const fetchEvents = async () => {
  const response = await axios.get(`${API_BASE}/events`);
  return response.data;
};

// 新增埋点事件
export const createEvent = async (data: any) => {
  return axios.post(`${API_BASE}/events`, data);
};

// 更新埋点事件
export const updateEvent = async (id: string, data: any) => {
  return axios.put(`${API_BASE}/events/${id}`, data);
};

// 删除埋点事件
export const deleteEvent = async (id: string) => {
  return axios.delete(`${API_BASE}/events/${id}`);
};

// 查询 PV / UV
export const fetchMetrics = async (filters: any) => {
  const response = await axios.get(`${API_BASE}/metrics`, { params: filters });
  return response.data;
};
