// "use client";

// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import { Chart, LinearScale, CategoryScale } from 'chart.js';



// Chart.register(CategoryScale );
// Chart.register(LinearScale );

// //  import { useProgress } from '@/features/progress/hooks';

//  const mockProgressData = [
//   { date: '2024-07-01', score: 75 },
//   { date: '2024-07-08', score: 80 },
//   { date: '2024-07-15', score: 78 },
//   { date: '2024-07-22', score: 85 },
//   { date: '2024-07-29', score: 82 },
//   { date: '2024-08-05', score: 88 },
//   { date: '2024-08-12', score: 90 },
//   { date: '2024-08-19', score: 87 },
//   { date: '2024-08-26', score: 92 },
//   { date: '2024-09-02', score: 95 },
// ];

//   const StudentProgress = () => {
//   // const { data: progressData, error } = useSWR('/api/student/progress', fetcher);

//   // const { progress, isLoading, hasError, isEmpty } = useProgress();

//   // if (isEmpty) {
//   //   return (
//   //     <div className="flex justify-center items-center h-screen">
//   //       <div className="text-blue-600 text-lg font-semibold">
//   //         You have no progress data now.
//   //       </div>
//   //     </div>
//   //   );
//   // }

//   // if (isLoading) {
//   //   return (
//   //     <div className="flex justify-center items-center h-screen">
//   //       <div className="text-blue-600 text-lg font-semibold">Loading progress data...</div>
//   //     </div>
//   //   );
//   // }

//   // if (hasError) {
//   //   return (
//   //     <div className="flex justify-center items-center h-screen">
//   //       <p className="text-red-600 text-lg font-semibold">
//   //         Failed to load progress data. Please try again later.
//   //       </p>
//   //     </div>
//   //   );
//   // }

//   const options = {
//     scales: {
//       x: {
//         type: 'time',
//         time: {
//           unit: 'day', // Adjust as needed (e.g., 'week', 'month')
//         },
//       },
//     },
//   };

//   const chartData = {
//     labels: mockProgressData.map((data) => data.date), 
//     datasets: [
//       {
//         label: 'Progress',
//         data: mockProgressData.map((data) => data.score), 
//         fill: false,
//         borderColor: 'rgb(75, 192, 192)',
//       },
//     ],
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">My Progress</h2>
//       <div className="flex flex-col items-center">
//         <Line data={chartData} /> 
//       </div>
//     </div>
//   );
// };

// export default StudentProgress;


// "use client";

// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import { Chart, LinearScale, CategoryScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Chart.register(LinearScale, CategoryScale, LineElement, PointElement, Title, Tooltip, Legend);

// const mockProgressData = [
//   { date: '2024-07-01', score: 75 },
//   { date: '2024-07-08', score: 80 },
//   { date: '2024-07-15', score: 78 },
//   { date: '2024-07-22', score: 85 },
//   { date: '2024-07-29', score: 82 },
//   { date: '2024-08-05', score: 88 },
//   { date: '2024-08-12', score: 90 },
//   { date: '2024-08-19', score: 87 },
//   { date: '2024-08-26', score: 92 },
//   { date: '2024-09-02', score: 95 },
// ];

// const StudentProgress = () => {
//   const chartData = {
//     labels: mockProgressData.map((data) => data.date),
//     datasets: [
//       {
//         label: 'Progress',
//         data: mockProgressData.map((data) => data.score),
//         fill: false,
//         borderColor: 'rgb(75, 192, 192)',
//         tension: 0.3,
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: true,
//         position: 'top',
//       },
//       tooltip: {
//         callbacks: {
//           label: (context: any) => `Score: ${context.raw}`,
//         },
//       },
//     },
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: 'Date',
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: 'Score',
//         },
//         beginAtZero: true,
//         max: 100,
//       },
//     },
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">My Progress</h2>
//       <div className="flex flex-col items-center">
//         <Line data={chartData} options={chartOptions} />
//       </div>
//     </div>
//   );
// };

// export default StudentProgress;



// "use client";

// import React from 'react';
// import { Line, Bar, Pie } from 'react-chartjs-2';
// import {
//   Chart,
//   LinearScale,
//   CategoryScale,
//   ArcElement,
//   LineElement,
//   BarElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// // Register Chart.js components
// Chart.register(LinearScale, CategoryScale, ArcElement, LineElement, BarElement, PointElement, Title, Tooltip, Legend);

// const mockProgressData = [
//   { date: '2024-07-01', score: 75 },
//   { date: '2024-07-08', score: 80 },
//   { date: '2024-07-15', score: 78 },
//   { date: '2024-07-22', score: 85 },
//   { date: '2024-07-29', score: 82 },
//   { date: '2024-08-05', score: 88 },
//   { date: '2024-08-12', score: 90 },
//   { date: '2024-08-19', score: 87 },
//   { date: '2024-08-26', score: 92 },
//   { date: '2024-09-02', score: 95 },
// ];

// const StudentProgress = () => {
//   const chartLabels = mockProgressData.map((data) => data.date);
//   const chartScores = mockProgressData.map((data) => data.score);

//   // Data for Line Chart and Bar Chart
//   const lineAndBarData = {
//     labels: chartLabels,
//     datasets: [
//       {
//         label: 'Progress',
//         data: chartScores,
//         borderColor: 'rgb(75, 192, 192)',
//         backgroundColor: 'rgba(75, 192, 192, 0.5)',
//         fill: false,
//         tension: 0.3,
//       },
//     ],
//   };

//   // Data for Pie Chart
//   const pieData = {
//     labels: chartLabels,
//     datasets: [
//       {
//         label: 'Scores',
//         data: chartScores,
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.5)',
//           'rgba(54, 162, 235, 0.5)',
//           'rgba(255, 206, 86, 0.5)',
//           'rgba(75, 192, 192, 0.5)',
//           'rgba(153, 102, 255, 0.5)',
//           'rgba(255, 159, 64, 0.5)',
//           'rgba(199, 199, 199, 0.5)',
//           'rgba(83, 102, 255, 0.5)',
//           'rgba(105, 159, 64, 0.5)',
//           'rgba(199, 199, 255, 0.5)',
//         ],
//         borderColor: 'rgba(255, 255, 255, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   const commonOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: true,
//         position: 'top',
//       },
//     },
//   };

//   const lineAndBarOptions = {
//     ...commonOptions,
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: 'Date',
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: 'Score',
//         },
//         beginAtZero: true,
//         max: 100,
//       },
//     },
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">My Progress</h2>

//       <div className="mb-8">
//         <h3 className="text-xl font-semibold mb-2">Line Chart</h3>
//         <Line data={lineAndBarData} options={lineAndBarOptions} />
//       </div>

//       <div className="mb-8">
//         <h3 className="text-xl font-semibold mb-2">Bar Chart</h3>
//         <Bar data={lineAndBarData} options={lineAndBarOptions} />
//       </div>

//       <div>
//         <h3 className="text-xl font-semibold mb-2">Pie Chart</h3>
//         <Pie data={pieData} options={commonOptions} />
//       </div>
//     </div>
//   );
// };

// export default StudentProgress;


// "use client";

// import React from 'react';
// import { Bar, Pie } from 'react-chartjs-2';
// import {
//   Chart,
//   LinearScale,
//   CategoryScale,
//   ArcElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// // Register Chart.js components
// Chart.register(LinearScale, CategoryScale, ArcElement, BarElement, Title, Tooltip, Legend);

// // Mock data for visualization
// const enrollmentData = [
//   { student_id: 1, course_id: 1, enrollment_date: '2024-12-01', progress: 45, grade: 'B+', status: 'In Progress' },
//   { student_id: 2, course_id: 3, enrollment_date: '2024-11-25', progress: 80, grade: 'A', status: 'Completed' },
//   { student_id: 3, course_id: 5, enrollment_date: '2024-12-05', progress: 20, grade: '', status: 'In Progress' },
//   { student_id: 1, course_id: 2, enrollment_date: '2024-12-08', progress: 60, grade: 'B', status: 'In Progress' },
// ];

// // Extract data for charts
// const courseLabels = enrollmentData.map((data) => `Course ${data.course_id}`);
// const progressData = enrollmentData.map((data) => data.progress);

// // Group status data
// const statusCounts = enrollmentData.reduce((acc, curr) => {
//   acc[curr.status] = (acc[curr.status] || 0) + 1;
//   return acc;
// }, {});

// // Status chart data
// const statusChartData = {
//   labels: Object.keys(statusCounts),
//   datasets: [
//     {
//       label: 'Course Status',
//       data: Object.values(statusCounts),
//       backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'], // Colors for Completed, In Progress, etc.
//     },
//   ],
// };

// // Progress chart data
// const progressChartData = {
//   labels: courseLabels,
//   datasets: [
//     {
//       label: 'Progress (%)',
//       data: progressData,
//       backgroundColor: 'rgba(75, 192, 192, 0.5)',
//       borderColor: 'rgb(75, 192, 192)',
//       borderWidth: 1,
//     },
//   ],
// };

// const EnrollmentCharts = () => {
//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Enrollment Overview</h2>

//       {/* Progress Chart */}
//       <div className="mb-8">
//         <h3 className="text-xl font-semibold mb-2">Student Progress by Course</h3>
//         <Bar data={progressChartData} options={{ 
//           responsive: true, 
//           plugins: { legend: { position: 'top' } },
//           maintainAspectRatio: false, // Allow the chart to adjust to the container size
//           height: 150, // Set a specific height for the chart
//           width: 250 // Set a specific width for the chart
//         }}
//         />
//       </div>

//       {/* Status Chart */}
//       <div>
//         <h3 className="text-xl font-semibold mb-2">Course Status Distribution</h3>
//         <Pie 
//         data={statusChartData} 
//         options={{ 
//           responsive: true, 
//             plugins: { legend: { position: 'top' } },
//             maintainAspectRatio: false, 
//             height: 150, 
//             width: 150
//         }} 
//         />
//       </div>
//     </div>
//   );
// };

// export default EnrollmentCharts;


"use client";

import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart,
  LinearScale,
  CategoryScale,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
Chart.register(LinearScale, CategoryScale, ArcElement, BarElement, Title, Tooltip, Legend);

// Mock data for visualization
const enrollmentData = [
  { student_id: 1, course_id: 1, enrollment_date: '2024-12-01', progress: 45, grade: 'B+', status: 'In Progress' },
  { student_id: 2, course_id: 3, enrollment_date: '2024-11-25', progress: 80, grade: 'A', status: 'Completed' },
  { student_id: 3, course_id: 5, enrollment_date: '2024-12-05', progress: 20, grade: '', status: 'In Progress' },
  { student_id: 1, course_id: 2, enrollment_date: '2024-12-08', progress: 60, grade: 'B', status: 'In Progress' },
];

// Extract data for charts
const courseLabels = enrollmentData.map((data) => `Course ${data.course_id}`);
const progressData = enrollmentData.map((data) => data.progress);

// Group status data
const statusCounts = enrollmentData.reduce((acc, curr) => {
  acc[curr.status] = (acc[curr.status] || 0) + 1;
  return acc;
}, {});

// Status chart data
const statusChartData = {
  labels: Object.keys(statusCounts),
  datasets: [
    {
      label: 'Course Status',
      data: Object.values(statusCounts),
      backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'], // Colors for Completed, In Progress, etc.
    },
  ],
};

// Progress chart data
const progressChartData = {
  labels: courseLabels,
  datasets: [
    {
      label: 'Progress (%)',
      data: progressData,
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      borderColor: 'rgb(75, 192, 192)',
      borderWidth: 1,
    },
  ],
};

const EnrollmentCharts = () => {
  return (
    <section className="h-100">
      <div className="flex p-4 bg-gray-100 items-center justify-between">
            <h1 className="flex text-2xl  font-bold text-gray-700">
              <p className="text-1xl">My Progress</p>
            </h1>
            <p className="text-gray-500">
              "Empower your learning."
            </p>
      </div>
      <div className="p-4 min-h-screen">
        <h2 className="text-gray-500 text-2xl font-bold mb-4">Enrollment Overview</h2>

        {/* Progress Chart */}
        <div className="mb-8">
          <h3 className="text-gray-500 text-xl font-semibold mb-2">Student Progress by Course</h3>
          <Bar 
            data={progressChartData} 
            options={{ 
              responsive: false, 
              plugins: { legend: { position: 'top' } },
              maintainAspectRatio: true, // Allow the chart to adjust to the container size
              height: 50, // Set a specific height for the chart
              width: 20 // Set a specific width for the chart
            }} 
          />
        </div>

        {/* Status Chart */}
        <div>
          <h3 className=" text-gray-500 text-xl font-semibold mb-2">Course Status Distribution</h3>
          <Pie 
            data={statusChartData} 
            options={{ 
              responsive: false, 
              plugins: { legend: { position: 'top' } },
              maintainAspectRatio: true, 
              height: 50, 
              width: 50 
            }} 
          />
        </div>
      </div>
    </section>
  );
};

export default EnrollmentCharts;