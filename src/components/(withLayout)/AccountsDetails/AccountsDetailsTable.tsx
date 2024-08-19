"use client";
import { Button, ConfigProvider, Table } from "antd";
import { ColumnsType } from "antd/es/table";
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
        { key: '9', serial: '9', name: 'Mike', email: 'email@gmail.com', date: '11 Oct 2024, 11:00 PM' },
        { key: '10', serial: '10', name: 'Mike', email: 'email@gmail.com', date: '11 Oct 2024, 11:00 PM' },
        { key: '11', serial: '11', name: 'Mike', email: 'email@gmail.com', date: '11 Oct 2024, 11:00 PM' },
        { key: '12', serial: '12', name: 'Mike', email: 'email@gmail.com', date: '11 Oct 2024, 11:00 PM' },
        { key: '13', serial: '13', name: 'Mike', email: 'email@gmail.com', date: '11 Oct 2024, 11:00 PM' },
        { key: '14', serial: '14', name: 'Mike', email: 'email@gmail.com', date: '11 Oct 2024, 11:00 PM' },
        { key: '15', serial: '15', name: 'Mike', email: 'email@gmail.com', date: '11 Oct 2024, 11:00 PM' },
        { key: '16', serial: '16', name: 'Mike', email: 'email@gmail.com', date: '11 Oct 2024, 11:00 PM' },
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
            <div className="bg-[#FDFDFD] rounded-md">
                <ConfigProvider
                    theme={{
                        components: {
                            Table: {
                                bodySortBg: "#F0BE1B",
                                borderColor: "#00000026",
                                headerBg: "#F0BE1B",
                                colorBgContainer: "#FDFDFD",
                                colorText: "black",
                                headerColor: "black",
                                headerSplitColor: "transparent",
                            },
                        },
                    }}
                >
                    <Table
                        align="center"
                        className="table-menu-custom"
                        dataSource={dataSource}
                        columns={columns}
                    />

                </ConfigProvider>
                <BlockAccoutModal isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}></BlockAccoutModal>
            </div>
        </>
    );
};

export default AccountsDetailsTable;
