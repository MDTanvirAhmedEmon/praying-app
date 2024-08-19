

import AreaChartBox from '@/components/(withLayout)/Dashboard/AreaChartBox';
import BarChartBox from '@/components/(withLayout)/Dashboard/BarChartBox';
import DashboardTable from '@/components/(withLayout)/Dashboard/DashboardTable';
import TopInfoBar from '@/components/(withLayout)/Dashboard/TopInfoBar';
import React from 'react';

const Dashboard = () => {
    return (
        <div>
            <TopInfoBar></TopInfoBar>

            <div className='pt-8  flex gap-8'>
                <AreaChartBox></AreaChartBox>
                <BarChartBox></BarChartBox>

            </div>
            <div className='mt-8 '>

                <DashboardTable></DashboardTable>
            </div>
        </div>
    );
};

export default Dashboard;