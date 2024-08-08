
import AreaChartBox from '@/components/(withLayout)/Content/Dashboard/AreaChartBox';
import BarChartBox from '@/components/(withLayout)/Content/Dashboard/BarChartBox';
import DashboardTable from '@/components/(withLayout)/Content/Dashboard/DashboardTable';
import TopInfoBar from '@/components/(withLayout)/Content/Dashboard/TopInfoBar';
import React from 'react';

const Dashboard = () => {
    return (
        <div>
            <TopInfoBar></TopInfoBar>

            <div className=''>
                {/* <AreaChartBox></AreaChartBox>
                <BarChartBox></BarChartBox> */}
            </div>
            <div className='mt-8 mr-8'>
                
                <DashboardTable></DashboardTable>
            </div>
        </div>
    );
};

export default Dashboard;