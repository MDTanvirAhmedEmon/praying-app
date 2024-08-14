
import Image from "next/image";
import image from "../../../assets/event/event.jpg";
import { SlLocationPin } from "react-icons/sl";
import { RxClock } from "react-icons/rx";
import { useState } from "react";

const SingleEventContent = () => {


    return (
        <div>
            <div className="w-full h-[250px] relative overflow-hidden rounded-md">
                <Image
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={image}
                    layout="fill"
                    alt="Event image"
                />
            </div>
            <div className="w-full flex justify-between items-center py-6">
                <div className="">
                    <h2 className="text-3xl font-bold text-white">Thursday Bible Study</h2>
                    <div className="flex gap-1 items-center text-white mt-3">
                        <SlLocationPin className="w-5 h-5" />
                        <p className="text-base">1012 Avenue, New York, USA</p>
                    </div>
                </div>

                <div className=" text-white flex gap-3 items-center">
                    <RxClock className="w-6 h-6" />
                    <p className="flex items-center gap-1">7/27/2024</p>
                    <p className="text-base">12:00pm-7:30pm</p>
                </div>
            </div>
            <div>
                <h2 className=" text-4xl text-secondary font-bold mb-3">About</h2>
                <p className=" text-white text-base">This Thursday, our Bible Study group will be gathering for an enriching evening of fellowship and reflection. We will delve into the Book of Psalms, focusing on the themes of praise, worship, and God's faithfulness. The discussion will be led by Pastor John, who will provide insights and encourage group participation. Light refreshments will be served, and all attendees are welcome to share their thoughts and questions. Join us for an inspiring time of spiritual growth and community bonding. Don't miss this opportunity to deepen your understanding and connection with God's Word.</p>
            </div>
        </div>
    );
};

export default SingleEventContent;
