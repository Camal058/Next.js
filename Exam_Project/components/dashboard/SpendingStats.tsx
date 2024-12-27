import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart: React.FC = () => {
  const data = {
    labels: ['Bill', 'Investment', 'Entertainment', 'Others'],
    datasets: [
      {
        label: 'Monthly Spending',
        data: [20, 25, 15, 40], // Customize these values
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  };

  return (
    <Card>
    <CardHeader>
      <CardTitle>Expense Statistics</CardTitle>
    </CardHeader>
    <CardContent>
    <Pie data={data} options={options}   style={{ width: '400px', height: '400px' }}/>
    </CardContent>
    </Card>
  )
};

export default PieChart;
