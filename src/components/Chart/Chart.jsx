import { useState, useEffect } from "react";
import getDailyData from "../../api/getDailyData";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import styles from "./Chart.module.css";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart = () => {
  const [data, setData] = useState([]);

  const fetchDailyData = async () => {
    const data = await getDailyData();
    setData(data);
  };

  useEffect(() => {
    fetchDailyData();
  }, []);

  const lineChart = (
    <Line
      data={{
        labels: data.map((item) => item.date),
        datasets: [
          {
            data: data.map((item) => item.positive),
            label: "Infected",
            borderColor: "#3333ff",
            backgroundColor: "rgba(0, 0, 255, 0.5)",
          },
          {
            data: data.map((item) => item.death),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
          },
        ],
      }}
    />
  );

  return <div className={styles.Chart}>{lineChart}</div>;
};

export default Chart;
