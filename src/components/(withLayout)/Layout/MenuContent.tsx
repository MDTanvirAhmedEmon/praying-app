import { ContainerOutlined, DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import { ConfigProvider, Menu } from "antd";
import type { MenuProps } from 'antd';
import Link from "next/link";
import dashboard from "../../../assets/nav-icons/dashboardsvg.svg"
import accounts from "../../../assets/nav-icons/accounts.svg"
import earning from "../../../assets/nav-icons/earning.svg"
import educational from "../../../assets/nav-icons/educational.svg"
import event from "../../../assets/nav-icons/event.svg"
import order from "../../../assets/nav-icons/order.svg"
import product from "../../../assets/nav-icons/product.svg"
import setting from "../../../assets/nav-icons/setting.svg"
import training from "../../../assets/nav-icons/training.svg"
import Image from "next/image";

type MenuItem = Required<MenuProps>['items'][number];
const MenuContent = ({ collapsed }: any) => {

    const items: MenuItem[] = [
        { key: '1', icon: <Image src={dashboard} width={30} height={30} alt="dashboard" />, label: <Link href={`/`}>Dashboard</Link> },
        { key: '2', icon: <Image src={accounts} width={30} height={30} alt="dashboard" />, label: <Link href={`/accounts-details`}>Accounts Details</Link> },
        { key: '3', icon: <Image src={earning} width={30} height={30} alt="dashboard" />, label: <Link href={`/earning`}>Earning</Link> },
        { key: '4', icon: <Image src={educational} width={30} height={30} alt="dashboard" />, label: <Link href={`/educational-resources`}>Educational Resources</Link> },
        { key: '5', icon: <Image src={training} width={30} height={30} alt="dashboard" />, label: <Link href={`/training-workshop`}>Training & Workshop</Link> },
        { key: '6', icon: <Image src={product} width={30} height={30} alt="dashboard" />, label: <Link href={`/product`}>Product</Link> },
        { key: '7', icon: <Image src={order} width={30} height={30} alt="dashboard" />, label: <Link href={`/order-list`}>Order List</Link> },
        { key: '8', icon: <Image src={event} width={30} height={30} alt="dashboard" />, label: <Link href={`/event`}>Event</Link> },
        {
            key: '9', icon: <Image src={setting} width={30} height={30} alt="dashboard" />, children: [
                { key: '10', label: <Link href={`/setting/about-us`}>About us</Link> },
                { key: '11', label: <Link href={`/setting/terms-and-conditions`}>Terms & Condition</Link> },
                { key: '12', label: <Link href={`/setting/privacy-policy`}>Privacy Policy</Link> },
            ], label: "Setting"
        },

    ]
    const itemHeight = collapsed ? "40px" : "50px";

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
                        height: ${itemHeight} !important;
                    }
                    .ant-menu-item-selected {
                        background-color: #F0BE1B !important;
                        color: white !important;

                    }
                        .ant-menu-submenu-title {
                        background-color: #5A015E !important;
                        color: white !important;
                        border-radius: 4px !important;
                        margin-bottom: 15px !important;
                        font-size: 16px !important;
                        height: ${itemHeight} !important;
                        }
                    :where(.css-dev-only-do-not-override-o2xk72).ant-menu-dark .ant-menu-submenu-selected >.ant-menu-submenu-title{
                        background-color: #5A015E !important;
                        color: white !important;
                        border-radius: 4px !important;
                        margin-bottom: 15px !important;
                        font-size: 16px !important;
                        height: ${itemHeight} !important;                        
                        }
                        :where(.css-dev-only-do-not-override-o2xk72).ant-menu-dark.ant-menu-inline .ant-menu-sub.ant-menu-inline{
                            background: #ffffff !important;
                        }

                    
            `}</style>

                {/* padding: ${itemPadding} !important; */}
            </ConfigProvider>

        </div>
    );
};

export default MenuContent;