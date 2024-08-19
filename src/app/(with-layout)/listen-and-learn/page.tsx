"use client"
import UploadTraning from "@/components/(withLayout)/Listen&Learn/UploadTraning";
import WorkShopCart from "@/components/(withLayout)/Listen&Learn/WorkShopCart";
import { Pagination } from "antd";
import { useState } from "react";
import image from "../../../assets/training-workshop/workshop.jpg"

const TrainingAndWorkshop = () => {
    const data = [
        {
            _id: 1,
            image: image,
            name: 'Dance Competition',
            skill: 'Graphics Design',
            total: '120 videos'
        },
        {
            _id: 2,
            image: image,
            name: 'Dance Competition',
            skill: 'Graphics Design',
            total: '120 videos'
        },
        {
            _id: 3,
            image: image,
            name: 'Dance Competition',
            skill: 'Graphics Design',
            total: '120 videos'
        },
        {
            _id: 4,
            image: image,
            name: 'Dance Competition',
            skill: 'Graphics Design',
            total: '120 videos'
        },
        {
            _id: 5,
            image: image,
            name: 'Dance Competition',
            skill: 'Graphics Design',
            total: '120 videos'
        },
        {
            _id: 6,
            image: image,
            name: 'Dance Competition',
            skill: 'Graphics Design',
            total: '120 videos'
        },
        {
            _id: 7,
            image: image,
            name: 'Dance Competition',
            skill: 'Graphics Design',
            total: '120 videos'
        },
        {
            _id: 8,
            image: image,
            name: 'Dance Competition',
            skill: 'Graphics Design',
            total: '120 videos'
        },
        {
            _id: 9,
            image: image,
            name: 'Dance Competition',
            skill: 'Graphics Design',
            total: '120 videos'
        },
        {
            _id: 11,
            image: image,
            name: 'Dance Competition',
            skill: 'Graphics Design',
            total: '120 videos'
        },
        {
            _id: 12,
            image: image,
            name: 'Dance Competition',
            skill: 'Graphics Design',
            total: '120 videos'
        },
        {
            _id: 13,
            image: image,
            name: 'Dance Competition',
            skill: 'Graphics Design',
            total: '120 videos'
        },
        {
            _id: 14,
            image: image,
            name: 'Dance Competition',
            skill: 'Graphics Design',
            total: '120 videos'
        },
        {
            _id: 15,
            image: image,
            name: 'Dance Competition',
            skill: 'Graphics Design',
            total: '120 videos'
        },
        {
            _id: 16,
            image: image,
            name: 'Dance Competition',
            skill: 'Graphics Design',
            total: '120 videos'
        },
        {
            _id: 17,
            image: image,
            name: 'Dance Competition',
            skill: 'Graphics Design',
            total: '120 videos'
        },
        {
            _id: 18,
            image: image,
            name: 'Dance Competition',
            skill: 'Graphics Design',
            total: '120 videos'
        },
        {
            _id: 19,
            image: image,
            name: 'Dance Competition',
            skill: 'Graphics Design',
            total: '120 videos'
        },
    ];



    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalItems = 50;
    const pageSize = 15;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        console.log(`Current page: ${page}`);
    };



    return (
        <div>
            <UploadTraning></UploadTraning>
            <div>
                <div className=" grid grid-cols-6 gap-8 mt-8 ">
                    {
                        data.map(data => <WorkShopCart key={data._id} data={data}></WorkShopCart>)
                    }
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
        </div>
    );
};

export default TrainingAndWorkshop;