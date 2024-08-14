"use client"
import { ConfigProvider, Table } from "antd";
import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import EarningModal from "./EarningModal";

const EarningTable = () => {

// Modal
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



    const dataSource = [
        {
            key: '1',
            serial: '1',
            name: 'Emon',
            accountNumber: '551454441',
            date: '11 Oct 2024',
            amount: 150,
        },
        {
            key: '2',
            serial: '2',
            name: 'Emon',
            accountNumber: '551454441',
            date: '11 Oct 2024',
            amount: 150,
        },
        {
            key: '3',
            serial: '3',
            name: 'Emon',
            accountNumber: '551454441',
            date: '11 Oct 2024',
            amount: 150,
        },
        {
            key: '4',
            serial: '4',
            name: 'Emon',
            accountNumber: '551454441',
            date: '11 Oct 2024',
            amount: 150,
        },
        {
            key: '5',
            serial: '5',
            name: 'Emon',
            accountNumber: '551454441',
            date: '11 Oct 2024',
            amount: 150,
        },
        {
            key: '6',
            serial: '6',
            name: 'Emon',
            accountNumber: '551454441',
            date: '11 Oct 2024',
            amount: 150,
        },
        {
            key: '7',
            serial: '7',
            name: 'Emon',
            accountNumber: '551454441',
            date: '11 Oct 2024',
            amount: 150,
        },
        {
            key: '8',
            serial: '8',
            name: 'Emon',
            accountNumber: '551454441',
            date: '11 Oct 2024',
            amount: 150,
        },
       
    ];

    const columns = [
        {
            title: 'Serial',
            dataIndex: 'serial',
            key: 'serial',
            align: 'center',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            align: 'center',
        },
        {
            title: 'Account Number',
            dataIndex: 'accountNumber',
            key: 'accountNumber',
            align: 'center',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            align: 'center',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
            align: 'center',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            align: 'center',
            render: () => <IoEyeOutline onClick={showModal} className="mx-auto w-6 h-6 cursor-pointer" />,
        },
    ];



    return (
        <>
            <div className="bg-[#FDFDFD] rounded-md pb-6">

                <ConfigProvider
                    theme={{
                        components: {
                            Table: {
                                bodySortBg: "#F0BE1B",
                                borderColor: "#00000026",
                                headerBg: "#5A015E",
                                colorBgContainer: "#FDFDFD",
                                colorText: "black",
                                headerColor: "white",
                                headerSplitColor: "transparent",
                                headerBorderRadius: 0,
                            },
                        },
                    }}
                >
                    <Table
                        className="h-auto mt-6"
                        align="center"
                        dataSource={dataSource}
                        columns={columns}
                        pagination={false}
                    />
                </ConfigProvider>
                <EarningModal isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}></EarningModal>

            </div>

        </>
    );
};

export default EarningTable;
