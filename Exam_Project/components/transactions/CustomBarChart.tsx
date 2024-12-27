import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

// Register required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

interface BarChartProps {
  labels: string[]; // X-axis labels
  dataPoints: number[]; // Data points for the bars
  highlightedIndex?: number; // Index of the bar to highlight
}

const CustomBarChart: React.FC<BarChartProps> = ({
  labels,
  dataPoints,
  highlightedIndex,
}) => {
  const data = {
    labels,
    datasets: [
      {
        data: dataPoints,
        backgroundColor: dataPoints.map((_, index) =>
          index === highlightedIndex ? 'rgba(16, 185, 129, 1)' : 'rgba(203, 213, 225, 1)' // Highlight specific bar
        ),
        borderRadius: 8, // Rounded corners for bars
        barThickness: 30, // Bar width
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true, // Show tooltip on hover
        callbacks: {
          label: (tooltipItem: any) => `Value: ${tooltipItem.raw.toLocaleString()}`,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#6b7280', // Gray color for labels
        },
        grid: {
          display: false, // Hide grid lines
        },
      },
      y: {
        ticks: {
          color: '#6b7280', // Gray color for labels
        },
        grid: {
          color: 'rgba(229, 231, 235, 0.5)', // Light gray grid lines
        },
      },
    },
  };

  return (
    <Card>
    <CardHeader>
      <CardTitle>My Expense</CardTitle>
    </CardHeader>
    <CardContent>
        <Bar data={data} options={options}/>
    </CardContent>
    </Card>
  )
};

export default CustomBarChart;
