
import { ConfigProvider, Table } from "antd";
import './DashboardTable.css'


const DashboardTable = () => {

    const dataSource = [
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
                            borderColor: "black",
                            headerBg: "#544309",
                            headerColor: "white",
                            colorBgContainer: "#F0BE1B",
                            colorText: "black",
                        },
                    },
                }}
            >
                <Table align="center" style={{}} dataSource={dataSource} columns={columns}/>

            </ConfigProvider>

        </div>
    );
};

// #F0BE1B


export default DashboardTable;