"use client"
import { ConfigProvider, Pagination, Table } from "antd";
import { useState } from "react";


const SingleEventTable = () => {

    const dataSource = [
        {
            key: '1',
            orderId: '1',
            Date: '11 Oct 2024',
            customerName: 'Emon',
            Amount: 150,
        },
        {
            key: '2',
            orderId: '2',
            Date: '11 Oct 2024',
            customerName: 'Emon',
            Amount: 150,
        },
        {
            key: '3',
            orderId: '3',
            Date: '11 Oct 2024',
            customerName: 'Emon',
            Amount: 150,
        },
        {
            key: '4',
            orderId: '4',
            Date: '11 Oct 2024',
            customerName: 'Emon',
            Amount: 150,
        },
        
    ];

    const columns = [
        {
            title: 'Order Id',
            dataIndex: 'orderId',
            key: 'orderId',
            align: 'center',
        },
        {
            title: 'Date',
            dataIndex: 'Date',
            key: 'Date',
            align: 'center',
        },
        {
            title: 'Customer Name',
            dataIndex: 'customerName',
            key: 'customerName',
            align: 'center',
        },
        {
            title: 'Amount',
            dataIndex: 'Amount',
            key: 'Amount',
            align: 'center',
        },
    ];


    // pagination
    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalItems = 50;
    const pageSize = 15;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        console.log(`Current page: ${page}`);
    };

    return (
        <>
            <div className="bg-white rounded-md mt-8 pb-6">
                <p className="text-2xl font-bold ml-6 pt-6">Event Ticket Purchases</p>

                <ConfigProvider
                    theme={{
                        components: {
                            Table: {
                                bodySortBg: "#F0BE1B",
                                borderColor: "#00000026",
                                headerBg: "white",
                                colorBgContainer: "white",
                                colorText: "black",
                                headerColor: "black",
                            },
                        },
                    }}
                >
                    <Table
                        className="px-6 h-auto event-custom-pagination"
                        align="center"
                        dataSource={dataSource}
                        columns={columns}
                    />
                </ConfigProvider>

            </div>
            {/* <div className="py-6">
                <Pagination
                    align="end"
                    current={currentPage}
                    pageSize={pageSize}
                    total={totalItems}
                    defaultCurrent={1}
                    onChange={handlePageChange} 
                />

            </div> */}
        </>
    );
};

export default SingleEventTable;
