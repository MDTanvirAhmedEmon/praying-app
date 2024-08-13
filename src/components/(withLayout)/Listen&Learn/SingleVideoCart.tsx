"use client"

import { useState } from "react";
import { TbPlayerPlayFilled } from "react-icons/tb";

import Link from "next/link";
import PopUpVideo from "./PopUpVideo";


const SingleVideoCart = ({ data, params }: any) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
      };
    
      const handleOk = () => {
        setIsModalOpen(false);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };



    return (
        <div className=" flex justify-between items-center py-4 border-b border-b-[#ffffff4f]">
            <div className=" flex items-center gap-6">
                <span className=" px-[22px] py-[12px] rounded-full bg-white border-4 border-[#E6D9E7] text-primary font-bold text-2xl">{data.number}</span>
                <div>
                    <p className=" text-white font-semibold text-xl">{data.title}</p>
                    <p className="text-secondary text-lg">{data.time}</p>
                </div>
            </div>
            <div>

               {/* <Link href={`/listen-and-learn/${params?.competitionId}/play-video`}> */}
               <TbPlayerPlayFilled onClick={showModal} className=" w-12 h-12 p-4 text-primary bg-white rounded-full cursor-pointer " />
               {/* </Link>  */}
            </div>
            <PopUpVideo isModalOpen={isModalOpen} showModal={showModal} handleOk={handleOk} handleCancel={handleCancel}></PopUpVideo>

        </div>
    );
};

export default SingleVideoCart;