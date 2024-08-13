import { ConfigProvider, Divider, Typography } from "antd";
import { IoNotificationsOutline } from "react-icons/io5";

const NotificationTopBar = ({ showNotification, setShowNotification }: any) => {
    return (
        <div className=" bg-[#FEF9E8] shadow-md px-8 py-3 w-[400px] absolute right-[220px] top-[90px] z-50 rounded-b-md">
            <h1 className=" text-primary font-semibold text-center text-2xl">Notification</h1>
            {/* <ConfigProvider
                theme={{
                    components: {
                        Divider: {
                            colorSplit: "#5A015E",
                        },
                    },
                }}
            >
                <Divider />
            </ConfigProvider> */}

            <div className=" flex items-center gap-3">
                <div>
                    <IoNotificationsOutline className=" w-8 h-8 text-primary" />
                </div>
                <div className="">
                    <p className="">New Appointment has created With John Doe at 10:20am, 20/11/2023</p>
                    <p className=" text-primary">Fri, 12:30pm</p>
                </div>

            </div>
            <div className="text-center">
                <button onClick={() => setShowNotification(!showNotification)} className=" bg-[#5A015E] px-5 py-2 text-white cursor-pointer rounded-md text-lg mt-2 mb-5"  >Load More</button>
            </div>

        </div>
    );
};

export default NotificationTopBar;