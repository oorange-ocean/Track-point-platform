import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE;

export interface Event {
  id: string;
  name: string;
  eventKey: string;
  // ... 其他字段
}

export const eventService = {
  fetchList: async () => {
    const response = await axios.get<{ data: Event[] }>(`${API_BASE}/events`);
    return response.data;
  },

  create: async (data: Partial<Event>) => {
    return axios.post(`${API_BASE}/events`, data);
  },

  update: async (id: string, data: Partial<Event>) => {
    return axios.put(`${API_BASE}/events/${id}`, data);
  },

  delete: async (id: string) => {
    return axios.delete(`${API_BASE}/events/${id}`);
  }
}; 