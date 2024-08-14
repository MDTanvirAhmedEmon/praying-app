import { Modal } from "antd";

const BlockAccoutModal = ({isModalOpen, handleOk, handleCancel}: any) => {
    return (
        <Modal title="" centered open={isModalOpen} footer={null} onCancel={handleCancel}   >
        <div className="p-8 text-center">
            <h2 className=" text-red-600 text-2xl font-semibold text-center">Are you sure!</h2>
            <p className=" text-xl font-semibold text-center mt-3">Do you want to  Block your Users profile ?</p>
            <button onClick={handleOk} className=" bg-[#5A015E] px-8 py-3 text-white cursor-pointer rounded-md text-lg mt-4">Confirm</button>
        </div>
      </Modal>
    );
};

export default BlockAccoutModal;