"use client"

import CategoryTable from "@/components/(withLayout)/Setting/Category/CategoryTable";
import UploadCategory from "@/components/(withLayout)/Setting/Category/UploadCategory";
import { SearchOutlined } from "@ant-design/icons";
import { Pagination } from "antd";
import { useState } from "react";

const Category = () => {
    const [search, setSearch] = useState("");
    console.log(search)


    // pagination
    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalItems = 50;
    const pageSize = 15;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        console.log(`Current page: ${page}`);
    };

    return (
        <div>
            <UploadCategory></UploadCategory>
            <div className=" mt-6 bg-white rounded-b-md rounded-t-lg" >
                <div className="bg-[rgb(29,36,45)] rounded-t-md py-4 px-6 flex justify-between items-center" >
                    <h1 className=" text-4xl text-white font-bold">List</h1>
                    {/* search input */}
                    <div className="relative flex items-center">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <SearchOutlined className="text-black h-8 w-8" />
                        </div>
                        <input
                            onChange={(e) => setSearch(e.target.value)}
                            type="text"
                            className="pl-10 pr-4 py-3 text-base border w-[300px] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                            placeholder="Search Category"
                        />
                    </div>
                </div>
                <CategoryTable></CategoryTable>

            </div>
            <div className="py-6">
                <Pagination
                    align="end"
                    className="custom-pagination-all"
                    current={currentPage}
                    pageSize={pageSize}
                    total={totalItems}
                    onChange={handlePageChange} defaultCurrent={1}
                />

            </div>
        </div>
    );
};

export default Category;