"use client"
import HeaderContent from "@/components/(withLayout)/Layout/HeaderContent";
import MenuContent from "@/components/(withLayout)/Layout/MenuContent";
import SiderContent from "@/components/(withLayout)/Layout/SiderContent";
import { ConfigProvider, Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function DashBoardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const router = useRouter();
    const token = { user: "emon" }


    const [collapsed, setCollapsed] = useState<boolean>(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };


    if (!token.user) {
        router.push('/auth/login');
    }


    return (

        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed} style={{ height: "100vh", backgroundColor: "white", paddingBottom: "50px", position: "fixed", top: "0px", left: "0px", }} width="16%">
                <SiderContent></SiderContent>
                <MenuContent collapsed={collapsed}></MenuContent>
            </Sider>
            <Layout style={{ marginLeft: collapsed ? '80px' : '16%', transitionDuration: "0.2s" }}>
                <ConfigProvider
                    theme={{
                        components: {
                            Layout: {
                                headerPadding: "0 0px"
                            },

                            Pagination: {
                                // colorPrimary: "black",
                                // colorBorder: "black",
                                // itemBg: "white",
                                // itemActiveBg: "white",
                                // colorBgTextActive: "white",
                                // colorBgTextHover: "white",
                                // colorPrimaryHover: "black",
                                // colorPrimaryBorder: "black",
                            },


                        },
                    }}
                >
                    <Header style={{ backgroundColor: "white", width: "100%", height: "9vh" }}><HeaderContent toggleCollapsed={toggleCollapsed}></HeaderContent></Header>
                </ConfigProvider>

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
                    <Content style={{ backgroundColor: "#5A015E", borderTopLeftRadius: "10px", padding: "30px", minHeight: "91vh" }}> <h1 className="text-black"></h1>{children}</Content>
                </ConfigProvider>
            </Layout>
        </Layout>
    );
}
