"use client";

import { Button, ConfigProvider, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import Link from "next/link";
import disable from '../../../assets/account-details/disable-account.svg'
import Image from "next/image";
import { useState } from "react";
import BlockAccoutModal from "./BlockAccoutModal";



const AccountsDetailsTable = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        console.log('Now Clicked');
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };



    const dataSource = [
        { key: '1', serial: '1', name: 'Mike', email: 'email@gmail.com', date: '11 Oct 2024, 11:00 PM' },
        { key: '2', serial: '2', name: 'Mike', email: 'email@gmail.com', date: '11 Oct 2024, 11:00 PM' },
        { key: '3', serial: '3', name: 'Mike', email: 'email@gmail.com', date: '11 Oct 2024, 11:00 PM' },
        { key: '4', serial: '4', name: 'Mike', email: 'email@gmail.com', date: '11 Oct 2024, 11:00 PM' },
        { key: '5', serial: '5', name: 'Mike', email: 'email@gmail.com', date: '11 Oct 2024, 11:00 PM' },
        { key: '6', serial: '6', name: 'Mike', email: 'email@gmail.com', date: '11 Oct 2024, 11:00 PM' },
        { key: '7', serial: '7', name: 'Mike', email: 'email@gmail.com', date: '11 Oct 2024, 11:00 PM' },
        { key: '8', serial: '8', name: 'Mike', email: 'email@gmail.com', date: '11 Oct 2024, 11:00 PM' },
    ];

    const columns: ColumnsType<{ key: string; serial: string; name: string; email: string; date: string }> = [
        { title: 'Serial', dataIndex: 'serial', key: 'serial', align: 'center' },
        { title: 'Name', dataIndex: 'name', key: 'name', align: 'center' },
        { title: 'Email', dataIndex: 'email', key: 'email', align: 'center' },
        { title: 'Date', dataIndex: 'date', key: 'date', align: 'center' },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            align: 'center',
            // render: (_: any, record:any) => <Link href={`/details/${record.key}`}>Details</Link>
            render: (_: any, record: any) => <ConfigProvider wave={{ disabled: true }}> <Button style={{ background: "transparent", border: "none" }} onClick={showModal}>
                <Image className="mx-auto" src={disable} alt="disable" width={40} height={40} />
            </Button>
            </ConfigProvider>
        },
    ];

    return (
        <>
            <ConfigProvider
                theme={{
                    components: {
                        Table: {
                            colorBgContainer: "#F0BE1B",
                            colorText: "black",
                            headerBg: "#544309",
                            headerColor: "white",
                            borderColor: "black",
                        },
                    },
                }}
            >
                <Table
                    align="center"
                    dataSource={dataSource}
                    columns={columns}
                />

            </ConfigProvider>
            <BlockAccoutModal isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}></BlockAccoutModal>
        </>
    );
};

export default AccountsDetailsTable;
