"use client"
import UploadEvent from "@/components/(withLayout)/Event/UploadEvent";
import { Pagination } from "antd";
import { useState } from "react";
import event from "../../../assets/event/event.jpg"
import EventCart from "@/components/(withLayout)/Event/EventCart";

const Event = () => {
    
    const data = [
        {
            _id: 1,
            image: event,
            name: 'Thursday Bible Study',
            date: '7/27/2024',
            time: '12:00pm-7:30pm'
        },
        {
            _id: 2,
            image: event,
            name: 'Community Potluck Dinner',
            date: '8/3/2024',
            time: '6:00pm-9:00pm'
        },
        {
            _id: 3,
            image: event,
            name: 'Yoga and Meditation Class',
            date: '8/10/2024',
            time: '9:00am-10:30am'
        },
        {
            _id: 4,
            image: event,
            name: 'Local Art Exhibition',
            date: '8/15/2024',
            time: '1:00pm-5:00pm'
        },
        {
            _id: 5,
            image: event,
            name: 'Charity Run for Health',
            date: '8/22/2024',
            time: '7:00am-11:00am'
        },
        {
            _id: 6,
            image: event,
            name: 'Weekend Book Club',
            date: '8/29/2024',
            time: '2:00pm-4:00pm'
        },
        {
            _id: 7,
            image: event,
            name: 'Summer Music Festival',
            date: '9/5/2024',
            time: '4:00pm-10:00pm'
        },
        {
            _id: 8,
            image: event,
            name: 'Tech Innovations Seminar',
            date: '9/12/2024',
            time: '10:00am-3:00pm'
        },
        {
            _id: 9,
            image: event,
            name: 'Farmers Market Fair',
            date: '9/19/2024',
            time: '8:00am-2:00pm'
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
            <UploadEvent></UploadEvent>
            <div>
                <div className=" grid grid-cols-3 gap-8 mt-8 ">
                    {
                        data.map(data => <EventCart key={data._id} data={data}></EventCart>)
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