import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { fetchMetrics } from "./api";

const Dashboard: React.FC = () => {
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    loadMetrics();
  }, []);

  const loadMetrics = async () => {
    const result = await fetchMetrics({});
    setData({
      labels: result.dates,
      datasets: [
        { label: "PV", data: result.pv, borderColor: "blue", fill: false },
        { label: "UV", data: result.uv, borderColor: "red", fill: false },
      ],
    });
  };

  return <Line data={data} />;
};

export default Dashboard;
