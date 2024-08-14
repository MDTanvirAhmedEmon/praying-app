
import { ConfigProvider, Table } from "antd";



const DashboardTable = () => {

    const dataSource: {
        key: string;
        serial: string;
        name: string;
        email: string;
        date: string;
    }[] = [
            {
                key: '1',
                serial: '1',
                name: 'Mike',
                email: 'email@gmail.com',
                date: '11 oct 2024, 11:00PM',
            },
            {
                key: '2',
                serial: '2',
                name: 'Mike',
                email: 'email@gmail.com',
                date: '11 oct 2024, 11:00PM',
            },
            {
                key: '3',
                serial: '3',
                name: 'Mike',
                email: 'email@gmail.com',
                date: '11 oct 2024, 11:00PM',
            },
            {
                key: '4',
                serial: '4',
                name: 'Mike',
                email: 'email@gmail.com',
                date: '11 oct 2024, 11:00PM',
            },
            {
                key: '5',
                serial: '5',
                name: 'Mike',
                email: 'email@gmail.com',
                date: '11 oct 2024, 11:00PM',
            },

        ];

    const columns: {
        title: string;
        dataIndex: string;
        key: string;
        align: string;
    }[] = [
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
                title: 'Email',
                dataIndex: 'email',
                key: 'email',
                align: 'center',
            },
            {
                title: 'Date',
                dataIndex: 'date',
                key: 'date',
                align: 'center',
            },
        ];


    return (
        <div>
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
                <Table className=" rounded-md" align="center" style={{}} dataSource={dataSource} columns={columns} />

            </ConfigProvider>

        </div>
    );
};

// #F0BE1B


export default DashboardTable;