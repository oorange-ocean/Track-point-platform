import axios from "axios";

// 使用环境变量
const API_BASE = import.meta.env.VITE_API_BASE;

export interface ErrorQueryParams {
  startTime: number;
  endTime: number;
  apikey: string;
  type?: string;
  status?: string;
  device_type?: string;
  browser?: string;
  os?: string;
  page?: number;
  pageSize?: number;
}

export interface ErrorStats {
  total: number;
  typeStats: Array<{ type: string; count: number }>;
  browserStats: Array<{ browser: string; count: number }>;
  osStats: Array<{ os: string; count: number }>;
  urlStats: Array<{ pageUrl: string; count: number }>;
}

interface ErrorListResponse {
  code: number;
  data: {
    list: any[];
    total: number;
    page: number;
    pageSize: number;
  };
}

export const errorService = {
  fetchList: async (params: ErrorQueryParams) => {
    const response = await axios.get<ErrorListResponse>(`${API_BASE}/api/errors/list`, { params });
    return response.data;
  },

  fetchStats: async (params: {
    startTime: number;
    endTime: number;
    apikey: string;
  }) => {
    const response = await axios.get<{ code: number; data: ErrorStats }>(
      `${API_BASE}/api/errors/stats`,
      { params }
    );
    return response.data;
  },

  fetchDetail: async (id: string, apikey: string) => {
    const response = await axios.get(`${API_BASE}/api/errors/${id}`, {
      params: { apikey },
    });
    return response.data;
  }
}; 