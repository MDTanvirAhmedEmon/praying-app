"use client"
import SingleEventContent from "@/components/(withLayout)/Event/SingleEventContent";
import SingleEventDeleteModal from "@/components/(withLayout)/Event/SingleEventDeleteModal";
import SingleEventTable from "@/components/(withLayout)/Event/SingleEventTable";
import { useState } from "react";


const SingleEvent = () => {

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
        <div className=" px-6 py-2">
            <SingleEventContent></SingleEventContent>
            <SingleEventTable></SingleEventTable>

            <button onClick={showModal} className=" text-red-600 bg-white font-bold px-14 py-2 rounded-md text-base float-end mt-6">
                Delete Event
            </button>
            <SingleEventDeleteModal isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}></SingleEventDeleteModal>

        </div>
    );
};

export default SingleEvent;