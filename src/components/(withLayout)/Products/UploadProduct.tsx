"use client"
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import ProductUploadModal from "./ProductUploadModal";


const UploadProduct = () => {

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
                <p>Upload Product</p>

            </div>
            <ProductUploadModal isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}></ProductUploadModal>
        </>
    );
};



export default UploadProduct;