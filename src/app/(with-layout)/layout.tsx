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
            <Sider collapsed={collapsed} style={{ height: "100vh", backgroundColor: "white" }} width="16%">
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
                    <Header style={{ backgroundColor: "white", width: "100%" }}><HeaderContent toggleCollapsed={toggleCollapsed}></HeaderContent></Header>
                </ConfigProvider>

                <Content> <h1 className="text-black"></h1>{children}</Content>
            </Layout>
        </Layout>
    );
}
