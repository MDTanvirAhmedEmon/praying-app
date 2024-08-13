"use client"
import image from "../../../assets/profile-image.png";
import { ConfigProvider, Menu } from "antd";
import Link from "next/link";


const ProfileTopBar = () => {
    const items = [
        { key: '1', label: <Link href={`/profile/edit-profile`}>Edit Profile</Link> },
        { key: '2', label: <Link href={`/profile/change-password`}>Change Password</Link> },
    ]


    const img = {
        backgroundImage: `URL(${image.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "full",
    };

    return (
        <div>
            <div className=" bg-[#59015edc] flex gap-3 items-center py-8 justify-center">
                <div style={img} className="w-32 h-32 overflow-hidden rounded-full border-2 border-white">

                </div>
                <div className=" text-white">
                    <h2 className="text-4xl mb-3 font-semibold">Akash Sharif</h2>
                    <p className="text-3xl">Admin</p>
                </div>
            </div>
            {/* profile navigation */}
            <div className="profile-menu">
                <ConfigProvider
                    theme={{
                        components: {
                            Menu: {
                                darkItemBg: "transparent",
                                // itemHoverColor: "transparent",   
                                itemBg: "transparent",
                                itemActiveBg: "transparent",

                            },
                        },
                    }}
                >
                    <Menu
                        className=" flex justify-center mt-5 gap-4"
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        items={items}
                        style={{ flex: 1, minWidth: 0 }}
                    />
                    <style jsx global>{`

                    .profile-menu .ant-menu-item {
                        background-color: transparent !important;
                        color: white !important;
                        border-radius: 0px !important;
                        margin-bottom: 15px !important;
                        font-size: 16px !important;
                        height: 40px !important;
                    }
                    .profile-menu .ant-menu-item-selected {
                        background-color: transparent !important;
                        color: #F0BE1B !important;
                        border-bottom: 2px solid white;

                    }
                    
            `}</style>
                </ConfigProvider>

            </div>
        </div>
    );
};

export default ProfileTopBar;