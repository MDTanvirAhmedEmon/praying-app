import { ContainerOutlined, DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import { ConfigProvider, Menu } from "antd";
import type { MenuProps } from 'antd';
import Link from "next/link";

type MenuItem = Required<MenuProps>['items'][number];
const MenuContent = ({ collapsed }: any) => {

    const items: MenuItem[] = [
        { key: '1', icon: <PieChartOutlined />, label: <Link href={`/dashboard`}>'Dashboard'</Link> },
        { key: '2', icon: <DesktopOutlined />, label: <Link href={`/accounts-details`}>'Accounts Details'</Link> },
        { key: '3', icon: <ContainerOutlined />, label: <Link href={`/educational-resources`}>'Educational Resources'</Link> },
        { key: '4', icon: <ContainerOutlined />, label: <Link href={`/training-workshop`}>'Training & Workshop'</Link> },
        { key: '5', icon: <ContainerOutlined />, label: <Link href={`/product`}>'Product'</Link> },
        { key: '6', icon: <ContainerOutlined />, label: <Link href={`/order-list`}>'Order List'</Link> },
        { key: '7', icon: <ContainerOutlined />, label: <Link href={`/event`}>'Event'</Link> },
        { key: '8', icon: <ContainerOutlined />, label: <Link href={`/setting`}>'Setting'</Link> },

    ]
    // const itemPadding = collapsed ? "0px" : "30px";

    return (
        <div className="w-full flex justify-center mt-16">
            <ConfigProvider
                theme={{
                    components: {
                        Menu: {
                            itemSelectedBg: "#F0BE1B"
                        },
                    },
                }}
            >
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    items={items}
                    style={{ width: collapsed ? "60px" : "250px", backgroundColor: "white", color: "black" }}
                />
                <style jsx global>{`
                    .ant-menu-item {
                        background-color: #5A015E !important;
                        color: white !important;
                        border-radius: 4px !important;
                        margin-bottom: 15px !important;
                        font-size: 16px !important;
               

                    }
                    .ant-menu-item-selected {
                        background-color: #F0BE1B !important;
                        color: black !important;

                    }
                    
                    
            `}</style>

                {/* padding: ${itemPadding} !important; */}
            </ConfigProvider>

        </div>
    );
};

export default MenuContent;