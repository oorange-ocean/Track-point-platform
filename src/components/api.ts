import axios from "axios";

// 删除 import { API_BASE } from "../config/api"
const API_BASE = import.meta.env.VITE_API_BASE;

// 获取埋点事件列表
export const fetchEvents = async () => {
  const response = await axios.get(`${API_BASE}/api/events`);
  return response.data;
};

// 新增埋点事件
export const createEvent = async (data: any) => {
  return axios.post(`${API_BASE}/api/events`, data);
};

// 更新埋点事件
export const updateEvent = async (id: string, data: any) => {
  return axios.put(`${API_BASE}/api/events/${id}`, data);
};

// 删除埋点事件
export const deleteEvent = async (id: string) => {
  return axios.delete(`${API_BASE}/api/events/${id}`);
};

// 查询 PV / UV
export const fetchMetrics = async (filters: any) => {
  const response = await axios.get(`${API_BASE}/api/metrics`, { params: filters });
  return response.data;
};
