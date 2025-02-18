import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE;

export interface MetricFilters {
  startTime?: string;
  endTime?: string;
  eventKey?: string;
}

export const metricService = {
  fetchMetrics: async (filters: MetricFilters) => {
    const response = await axios.get(`${API_BASE}/metrics`, { params: filters });
    return response.data;
  }
}; 