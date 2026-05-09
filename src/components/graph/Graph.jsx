import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import "./graph.css";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Graph = ({ confirmed, recovered, deaths, historicalData, country }) => {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#94a3b8',
          font: { family: 'Inter', size: 12 }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.9)',
        titleColor: '#f0f2f5',
        bodyColor: '#94a3b8',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8,
      }
    },
    scales: {
      y: {
        ticks: { color: '#94a3b8' },
        grid: { color: 'rgba(255, 255, 255, 0.05)' }
      },
      x: {
        ticks: { color: '#94a3b8' },
        grid: { display: false }
      }
    }
  };

  const lineChart = (
    historicalData && historicalData.cases ? (
      <Line
        data={{
          labels: Object.keys(historicalData.cases).map(date => new Date(date).toLocaleDateString()),
          datasets: [
            {
              data: Object.values(historicalData.cases),
              label: "Infected",
              borderColor: "#3b82f6",
              backgroundColor: "rgba(59, 130, 246, 0.1)",
              fill: true,
              tension: 0.4
            },
            {
              data: Object.values(historicalData.deaths),
              label: "Deaths",
              borderColor: "#ef4444",
              backgroundColor: "rgba(239, 68, 68, 0.1)",
              fill: true,
              tension: 0.4
            }
          ]
        }}
        options={chartOptions}
      />
    ) : null
  );

  const barChart = (
    confirmed ? (
      <Bar
        data={{
          labels: ["Infected", "Recovered", "Deaths"],
          datasets: [
            {
              label: "People",
              backgroundColor: [
                "rgba(59, 130, 246, 0.6)",
                "rgba(16, 185, 129, 0.6)",
                "rgba(239, 68, 68, 0.6)"
              ],
              borderColor: [
                "#3b82f6",
                "#10b981",
                "#ef4444"
              ],
              borderWidth: 1,
              data: [confirmed, recovered, deaths]
            }
          ]
        }}
        options={{
          ...chartOptions,
          plugins: {
            ...chartOptions.plugins,
            legend: { display: false },
          }
        }}
      />
    ) : null
  );

  return (
    <div className="graph-container">
      <div className="graph-card">
        <h3>{country === "Global" ? "Global Trend (Last 120 Days)" : `Status in ${country}`}</h3>
        <div className="chart-wrapper">
          {country === "Global" ? lineChart : barChart}
        </div>
      </div>
    </div>
  );
};

export default Graph;