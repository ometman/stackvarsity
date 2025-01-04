"use client";

import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import {
  Chart,
  LinearScale,
  CategoryScale,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useStudentProgress } from '@/features/progress/hooks';

// Register Chart.js components
Chart.register(LinearScale, CategoryScale, ArcElement, 
  LineElement, BarElement, PointElement, Title, Tooltip, Legend);

const StudentProgress = () => {
  const { studentProgressData } = useStudentProgress();
  const chartLabels = studentProgressData.map((data) => data.course_title);
  const chartScores = studentProgressData.map((data) => data.progress);

  // Data for Line Chart and Bar Chart 
  // Use this modules or lessons on a course
  const lineAndBarData = {
    labels: chartLabels,
    datasets: [
      {
        label: 'Progress',
        data: chartScores,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        fill: false,
        tension: 0.3,
      },
    ],
  };

  // Data for Pie Chart
  const pieData = {
    labels: chartLabels,
    datasets: [
      {
        label: 'Scores',
        data: chartScores,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
        ],
        borderColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const commonOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    maintainAspectRatio: true,
    height: 50,
    width: 60,
  };

  const lineAndBarOptions = {
    ...commonOptions,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Score',
        },
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <section>
      <div className="flex p-4 bg-gray-100 items-center justify-between">
            <h1 className="flex text-2xl  font-bold text-gray-700">
              <p className="text-1xl">My Progress</p>
            </h1>
            <p className="text-gray-500">
              "Empower your learning."
            </p>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="mb-8">
            <h2 className="text-l text-gray-500 font-semibold mb-2">Module Progress</h2>
            <Line data={lineAndBarData} options={lineAndBarOptions} />
          </div>

          <div className="mb-8">
            <h3 className="text-l text-gray-500 font-semibold mb-2">Course Progress</h3>
            <Bar data={lineAndBarData} options={lineAndBarOptions} />
          </div>

          <div>
            <h3 className="text-l text-gray-500 font-semibold mb-2">Overall Progress</h3>
            <Pie data={pieData} options={commonOptions} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentProgress;