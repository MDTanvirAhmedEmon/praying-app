"use client"
import { ConfigProvider, Pagination, Table } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";


const OrderTable = () => {

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
            Product: 'Hoodie',
            Date: '12 Oct 2024',
            customerName: 'Sara',
            Status: false,
            Amount: 200,
        },
        {
            key: '3',
            orderId: '3',
            Product: 'Denim Jacket',
            Date: '13 Oct 2024',
            customerName: 'John',
            Status: true,
            Amount: 180,
        },
        {
            key: '4',
            orderId: '4',
            Product: 'Sweater',
            Date: '14 Oct 2024',
            customerName: 'Lisa',
            Status: true,
            Amount: 140,
        },
        {
            key: '5',
            orderId: '5',
            Product: 'Casual Shirt',
            Date: '15 Oct 2024',
            customerName: 'Michael',
            Status: false,
            Amount: 130,
        },
        {
            key: '6',
            orderId: '6',
            Product: 'Jacket',
            Date: '16 Oct 2024',
            customerName: 'Anna',
            Status: false,
            Amount: 200,
        },
        {
            key: '7',
            orderId: '7',
            Product: 'Blazer',
            Date: '17 Oct 2024',
            customerName: 'David',
            Status: true,
            Amount: 220,
        },
        {
            key: '8',
            orderId: '8',
            Product: 'Polo Shirt',
            Date: '18 Oct 2024',
            customerName: 'Emma',
            Status: false,
            Amount: 110,
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
            title: 'Product',
            dataIndex: 'Product',
            key: 'Product',
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
            title: 'Status',
            dataIndex: 'Status',
            key: 'Status',
            align: 'center',
            render: (status: boolean) => (status ? 'Completed' : 'Pending'),
        },
        {
            title: 'Amount',
            dataIndex: 'Amount',
            key: 'Amount',
            align: 'center',
        },
    ];


    const router = useRouter();
    const handleRowClick = (recordId: any) => {
        console.log(recordId)
        router.push(`/order-list/${recordId}`);
    };

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
            <div className="bg-[#EFE6EF] rounded-md pb-10">
                <p className="text-2xl font-bold ml-20 pt-6">Recent Purchases</p>

                <ConfigProvider
                    theme={{
                        components: {
                            Table: {
                                bodySortBg: "#F0BE1B",
                                borderColor: "#00000026",
                                headerBg: "transparent",
                                colorBgContainer: "transparent",
                                colorText: "black",
                                headerColor: "black",
                            },
                        },
                    }}
                >
                    <Table
                        className="px-10 h-auto"
                        align="center"
                        dataSource={dataSource}
                        columns={columns}
                        pagination={false}
                        onRow={(record) => ({
                            onClick: () => handleRowClick(record.orderId),
                        })}
                    />
                </ConfigProvider>

            </div>
            <div className="py-6">
                <Pagination
                    align="end"
                    className="custom-pagination-all"
                    current={currentPage}
                    pageSize={pageSize}
                    total={totalItems}
                    onChange={handlePageChange} defaultCurrent={1}
                />

            </div>
        </>
    );
};

export default OrderTable;
