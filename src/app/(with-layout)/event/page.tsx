"use client"
import UploadEvent from "@/components/(withLayout)/Event/UploadEvent";
import { Pagination } from "antd";
import { useState } from "react";

const Event = () => {
    
    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalItems = 50;
    const pageSize = 15;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        console.log(`Current page: ${page}`);
    };


    return (
        <div>
            <UploadEvent></UploadEvent>
            <div>
                <div className=" grid grid-cols-3 gap-8 mt-8 ">
                    {
                        // data.map(data => <BookCart key={data._id} data={data}></BookCart>)
                    }
                </div>
                <div className="py-6">
                    <Pagination
                        align="end"
                        current={currentPage}
                        pageSize={pageSize}
                        total={totalItems}
                        onChange={handlePageChange} defaultCurrent={1}
                    />
                </div>

            </div>
        </div>
    );
};

export default Event;