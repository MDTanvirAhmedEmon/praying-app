import { ConfigProvider, Table } from "antd";

const SingleOrderDetails = () => {
    const dataSource = [
        {
            key: '1',
            productName: 'T Shirt',
            orderId: 32,
            size: 'M',
            total: 102,
        }
    ];

    const columns = [
        {
            title: 'Product Name',
            dataIndex: 'productName',
            key: 'productName',
        },
        {
            title: 'Order Id',
            dataIndex: 'orderId',
            key: 'orderId',
        },
        {
            title: 'Size',
            dataIndex: 'size',
            key: 'size',
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
        },
    ];
    return (
        <div>
            <p className=" text-white text-2xl mb-4">Products</p>

            <ConfigProvider
                theme={{
                    components: {
                        Table: {
                            headerBg: "#1D242D",
                            colorBgContainer: "transparent",
                            colorText: "white",
                            borderColor: "none"
                        },
                    },
                }}
            >
                <Table dataSource={dataSource} columns={columns} pagination={false} />
            </ConfigProvider>
            <div className=" flex justify-end gap-10 text-white text-3xl">
                <span>Total</span>
                <span>$700.92</span>
            </div>

        </div>
    );
};

export default SingleOrderDetails;