import React from 'react';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const DebitCreditChart: React.FC = () => {
  const data = {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'], // X-axis labels
    datasets: [
      {
        label: 'Debit',
        data: [500, 700, 600, 1200, 800, 900, 1000], // Debit values
        backgroundColor: 'rgba(0, 82, 212, 1)', // Blue for debit
        borderRadius: 8,
        barThickness: 30, // Thickness of the bars
      },
      {
        label: 'Credit',
        data: [900, 800, 700, 600, 1000, 1200, 800], // Credit values
        backgroundColor: 'rgba(255, 159, 64, 1)', // Orange for credit
        borderRadius: 8,
        barThickness: 30, // Thickness of the bars
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true, // Display legend
        position: 'top' as const, // Position of legend
        labels: {
          color: '#4B5563', // Legend text color
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        enabled: true, // Show tooltip on hover
        callbacks: {
          label: (tooltipItem: any) => `$${tooltipItem.raw.toLocaleString()}`,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#6B7280', // X-axis labels color
        },
        grid: {
          display: false, // Hide grid lines
        },
      },
      y: {
        ticks: {
          color: '#6B7280', // Y-axis labels color
        },
        grid: {
          color: 'rgba(229, 231, 235, 0.5)', // Light gray grid lines
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default DebitCreditChart;
