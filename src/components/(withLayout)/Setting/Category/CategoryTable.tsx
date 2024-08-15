"use client"
import { ConfigProvider, Pagination, Table } from "antd";
import { useState } from "react";


const CategoryTable = () => {

    const dataSource = [
        {
            key: '1',
            categoryName: 'T-Shirt',
            categorySerial: 15,
        },
        {
            key: '1',
            categoryName: 'Shirt',
            categorySerial: 18,
        },
       
    ];

    const columns = [
        {
            title: 'Category Name',
            dataIndex: 'categoryName',
            key: 'categoryName',
            align: 'left',
        },
        {
            title: 'Category Serial',
            dataIndex: 'categorySerial',
            key: 'categorySerial',
            align: 'right',
        },

    ];



    return (
        <>
            <div className="bg-white rounded-md ">

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
                        className="px-4 h-[55vh] "
                        align="center"
                        dataSource={dataSource}
                        columns={columns}
                        pagination={false}
                    />
                </ConfigProvider>

            </div>

        </>
    );
};

export default CategoryTable;
