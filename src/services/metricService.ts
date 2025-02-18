import axios from "axios";
import { API_BASE } from "../config/api";

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