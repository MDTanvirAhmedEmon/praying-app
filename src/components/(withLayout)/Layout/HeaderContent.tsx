"use client"
import { MenuOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, ConfigProvider } from "antd";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useState } from "react";
import { HiOutlineBell } from "react-icons/hi";
import NotificationTopBar from "./NotificationTopBar";


const HeaderContent = ({ toggleCollapsed }: any) => {

    const [showNotification, setShowNotification] = useState<boolean>(false);

    const pathname = usePathname()
    console.log(pathname);


    const formatPathname = (path: string) => {
        // Remove leading and trailing slashes
        path = path.replace(/^\/|\/$/g, '');

        // Remove dynamic segments (e.g., trailing numbers)
        const segments = path.split('/').filter(segment => isNaN(Number(segment)));

        // Format the path
        return segments
            .map(segment =>
                segment
                    .split('-') // Split each segment by hyphens
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
                    .join(' ') // Join words with spaces
            )
            .join(' / '); // Join segments with a separator
    };


    const formattedPathname = pathname === '/' ? 'Dashboard' : formatPathname(pathname);


    return (
        <div className="w-full h-full flex justify-between items-center relative">
            <div className="flex gap-2 items-center">
                <ConfigProvider wave={{ disabled: true }}>
                    <Button className=" hover:text-black" onClick={toggleCollapsed} style={{ color: "black", border: "none", fontSize: "25px", fontWeight: "600" }}>
                        <MenuOutlined />
                    </Button>
                </ConfigProvider>
                <h2 className=" text-4xl font-semibold mt-[-5px]">{formattedPathname}</h2>
            </div>


            <div className="flex items-center gap-8 mr-10">

                <Avatar onClick={() => setShowNotification(!showNotification)} className=" cursor-pointer relative" style={{ backgroundColor: "#5A015E" }} size={55}
                    icon={
                        <div className="relative ">
                            <HiOutlineBell className="h-7 w-7 text-white" />
                            <span className="bg-red-600 text-white rounded-full w-4 h-4 absolute text-xs top-[-4px] right-[-2px] ">
                                5
                            </span>
                        </div>
                    } />

                <div className="flex items-center gap-4">
                    <Link href={`/profile/edit-profile`}><Avatar className=" ring-2 ring-[#5A015E]" src={'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} size={53} ></Avatar></Link>
                    <p className=" text-3xl font-semibold">Akash</p>
                </div>
            </div>
            {
                showNotification && <NotificationTopBar showNotification={showNotification} setShowNotification={setShowNotification}></NotificationTopBar>
            }

        </div>
    );
};

export default HeaderContent;