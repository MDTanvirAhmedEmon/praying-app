"use client"
import EarningTable from "@/components/(withLayout)/Earning/EarningTable";
import EarningTopBar from "@/components/(withLayout)/Earning/EarningTopBar";
import { Pagination } from "antd";
import { useState } from "react";


const Earning = () => {

    // pagination
    // const [currentPage, setCurrentPage] = useState<number>(1);
    // const totalItems = 50;
    // const pageSize = 15;

    // const handlePageChange = (page: number) => {
    //     setCurrentPage(page);
    //     console.log(`Current page: ${page}`);
    // };

    return (
        <>
            <div className=" bg-[#FDFDFD] py-5 rounded-md">
                <EarningTopBar></EarningTopBar>
                <EarningTable></EarningTable>
            </div>
            {/* <div className="py-6">
                <Pagination
                    align="end"
                    current={currentPage}
                    pageSize={pageSize}
                    total={totalItems}
                    onChange={handlePageChange} defaultCurrent={1}
                />

            </div> */}
        </>
    );
};

export default Earning;