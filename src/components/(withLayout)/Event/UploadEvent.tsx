"use client"
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import EventUploadModal from "./EventUploadModal";


const UploadEvent = () => {

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
        <>
            <div onClick={showModal} className="flex justify-center items-center gap-3 text-lg text-black bg-[#F0BE1B] py-3 cursor-pointer rounded-md">
                <IoMdAdd className=" text-black w-7 h-7 " />
                <p>Upload Event</p>

            </div>
            <EventUploadModal isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}></EventUploadModal>
        </>
    );
};

export default UploadEvent;