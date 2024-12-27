import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);

interface SmoothLineGraphProps {
  labels: string[]; // X-axis labels
  dataPoints: number[]; // Y-axis data points
}

const SmoothLineGraph: React.FC<SmoothLineGraphProps> = ({ labels, dataPoints }) => {
  const data = {
    labels, // X-axis labels (e.g., months)
    datasets: [
      {
        label: '', // Empty label to remove legend
        data: dataPoints, // Y-axis data
        borderColor: 'rgba(0, 82, 212, 1)', // Line color
        backgroundColor: 'rgba(0, 82, 212, 0.1)', // Fill under the line
        tension: 0.4, // Smooth curve
        pointRadius: 0, // Hide points
        borderWidth: 2, // Line thickness
        fill: true, // Fill under the line
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true, // Show tooltip on hover
        callbacks: {
          label: (tooltipItem: any) => `Value: ${tooltipItem.raw}`,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#6b7280', // Gray color for text
        },
        grid: {
          display: false, // Hide grid lines
        },
      },
      y: {
        ticks: {
          color: '#6b7280', // Gray color for text
        },
        grid: {
          color: 'rgba(229, 231, 235, 0.5)', // Light gray grid lines
        },
      },
    },
  };

  return(
    <Card>
    <CardHeader>
      <CardTitle>Balance History</CardTitle>
    </CardHeader>
    <CardContent>
    <Line data={data} options={options} />
    </CardContent>
    </Card>
  ) 
};

export default SmoothLineGraph;
