"use client";
import { Select, Typography } from 'antd';
import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const BarChartBox = () => {
  const [selectedYear, setSelectedYear] = useState("2024");

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    setSelectedYear(value);
  };

  return (
    <div className='bg-[#F0BE1B] rounded-lg p-8 w-1/2'>
      <div className='flex justify-between items-center mb-3'>
        <Typography.Title level={3}>Earning Overview</Typography.Title>
        <Typography.Text className=' text-xl mb-2' >Monthly Growth: 35.80%</Typography.Text>
        <Select
          defaultValue={selectedYear}
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: '2024', label: '2024' },
            { value: '2025', label: '2025' },
            { value: '2026', label: '2026' },
            { value: '2027', label: '2027' },
          ]}
        />
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#232323" stroke="#000f25" background={{}} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartBox;


