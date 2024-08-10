"use client"
import HeaderContent from "@/components/(withLayout)/Layout/HeaderContent";
import MenuContent from "@/components/(withLayout)/Layout/MenuContent";
import SiderContent from "@/components/(withLayout)/Layout/SiderContent";
import { ConfigProvider, Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

import { useState } from "react";


export default function DashBoardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };


    return (

        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed} style={{ height: "100vh", backgroundColor: "white" }} width="16%">
                <SiderContent></SiderContent>
                <MenuContent collapsed={collapsed}></MenuContent>
            </Sider>
            <Layout>
                <ConfigProvider
                    theme={{
                        components: {
                            Layout: {
                                headerPadding: "0 0px"
                            },

                        },
                    }}
                >
                    <Header style={{ backgroundColor: "white", width: "100%", height: "90px" }}><HeaderContent toggleCollapsed={toggleCollapsed}></HeaderContent></Header>
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
                    <Content style={{ backgroundColor: "#5A015E", borderTopLeftRadius: "10px", padding: "30px" }}> <h1 className="text-black"></h1>{children}</Content>
                </ConfigProvider>
            </Layout>
        </Layout>
    );
}
