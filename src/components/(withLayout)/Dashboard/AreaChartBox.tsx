"use client";
import { ConfigProvider, Select, Typography } from 'antd';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useState } from 'react';

const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const AreaChartBox = () => {
    const [selectedYear, setSelectedYear] = useState("2024");

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
        setSelectedYear(value);
    };

    return (
        <div className='bg-[#FDFDFD] rounded-lg p-8 w-full md:w-1/2'>
            <div className='flex justify-between items-center mb-3'>
                <Typography.Title level={3}>User Overview</Typography.Title>
                <ConfigProvider
                    theme={{
                        components: {
                            Select: {
                                colorBgContainer: "transparent",
                                colorBorder: "black",
                                colorPrimaryHover: "black",
                                fontSizeIcon: 14,
                                colorIcon: "black",
                            },
                        },
                    }}
                >

                    <Select
                        value={selectedYear}
                        style={{ width: 120 }}
                        onChange={handleChange}
                        options={[
                            { value: '2024', label: '2024' },
                            { value: '2025', label: '2025' },
                            { value: '2026', label: '2026' },
                            { value: '2027', label: '2027' },
                        ]}
                    />
                </ConfigProvider>
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="30%" stopColor="#080E0E" stopOpacity={1} />
                            <stop offset="100%" stopColor="#758888" stopOpacity={0.4} />
                        </linearGradient>
                    </defs>
                    <XAxis tickMargin={10} axisLine={false} tickLine={false} dataKey="name" />
                    <YAxis tickMargin={20} axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Area
                        activeDot={false}
                        type="monotone"
                        dataKey="uv"
                        strokeWidth={0}
                        stroke="#080E0E"      // Line color
                        fill="url(#color)" // Gradient fill
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AreaChartBox;
