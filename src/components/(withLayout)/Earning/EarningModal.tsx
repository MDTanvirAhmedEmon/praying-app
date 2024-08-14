import { Modal } from "antd";
import image from "../../../assets/profile-image.png";
import Image from "next/image";

const EarningModal = ({ isModalOpen, handleOk, handleCancel }: any) => {
    return (
        <Modal
            centered
            footer={null}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <div className=" bg-primary rounded-md py-6 mt-8" >
                <div className="flex justify-center items-center">
                    <div className="relative w-[140px] h-[140px] ">
                        <Image
                            className="rounded-full border-4 border-white"
                            src={image}
                            alt="account image"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>
                <h2 className=" text-3xl text-center text-white mt-3 font-bold">Akash Sharif</h2>

            </div>
            <div className=" grid grid-cols-2 justify-center px-16 gap-8 py-6">
                <div>
                    <p className=" text-lg font-bold">User Serial</p>
                    <p className=" text-lg mt-[-4px]">#349</p>
                </div>
                <div>
                    <p className=" text-lg font-bold">Email</p>
                    <p className=" text-lg mt-[-4px]">info@gmail.com</p>
                </div>
                <div>
                    <p className=" text-lg font-bold">Account Number</p>
                    <p className=" text-lg mt-[-4px]">3495463876</p>
                </div>
                <div>
                    <p className=" text-lg font-bold">Amount</p>
                    <p className=" text-lg mt-[-4px]">$468</p>
                </div>
                <div>
                    <p className=" text-lg font-bold">Time & Date</p>
                    <p className=" text-lg mt-[-4px]">2.19PM 19-04-2000</p>
                </div>
                <div>
                    <p className=" text-lg font-bold">Payment Method</p>
                    <p className=" text-lg mt-[-4px]">Debit Card</p>
                </div>
            </div>
        </Modal>
    );
};

export default EarningModal;
