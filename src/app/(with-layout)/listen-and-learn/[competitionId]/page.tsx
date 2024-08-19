"use client"
import CompetitionTopBanner from "@/components/(withLayout)/Listen&Learn/CompetitionTopBanner";
import SingleVideoCart from "@/components/(withLayout)/Listen&Learn/SingleVideoCart";
import UploadVideo from "@/components/(withLayout)/Listen&Learn/UploadVideo";
import { Pagination } from "antd";
import { useState } from "react";

const page = ({ params }: any) => {
    console.log(params);

    const data = [
        {
            _id: 1,
            number: 1,
            title: "Why Using Graphic",
            time: "15min",
        },
        {
            _id: 2,
            number: 2,
            title: "Why Using Graphic",
            time: "15min",
        },
        {
            _id: 3,
            number: 3,
            title: "Why Using Graphic",
            time: "15min",
        },
        {
            _id: 4,
            number: 4,
            title: "Why Using Graphic",
            time: "15min",
        },
    ]


    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalItems = 50;
    const pageSize = 15;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        console.log(`Current page: ${page}`);
    };

    return (
        <div>
            <CompetitionTopBanner></CompetitionTopBanner>
            <div className="mt-4">
                <UploadVideo></UploadVideo>
            </div>
            <div>
                {
                    data?.map(data => <SingleVideoCart params={params}  key={data._id} data={data}></SingleVideoCart>)
                }

            </div>
            <div className="py-6">
                <Pagination
                    align="end"
                    className="custom-pagination-all mt-4"
                    current={currentPage}
                    pageSize={pageSize}
                    total={totalItems}
                    onChange={handlePageChange} defaultCurrent={1}
                />
            </div>
        </div>
    );
};

export default page;