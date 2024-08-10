import { ConfigProvider, Select } from 'antd';
import React from 'react';
import { CiUser } from 'react-icons/ci';
import { LuCalendarDays } from 'react-icons/lu';

const SingleUserInfo = ({handleChange}: any) => {
    return (
        <div className="flex justify-between">

            <div>
                <div className="flex items-center gap-3">
                    <p className="text-xl font-bold text-white ">Orders ID: #6743</p>
                    <ConfigProvider
                        theme={{
                            components: {
                                Select: {
                                    selectorBg: "#F0BE1B"
                                },
                            },
                        }}
                    >
                        <Select
                            defaultValue="pending"
                            style={{ width: 120, border: "none" }}
                            className=""
                            onChange={handleChange}
                            options={[
                                { value: 'delivered', label: 'Delivered' },
                                { value: 'pending', label: 'Pending' },
                            ]}
                        />
                    </ConfigProvider>

                </div>
                <div className=" flex items-center gap-3 mt-3">
                    <LuCalendarDays className=" w-6 h-6 text-white" />
                    <p className=" text-md text-white">Feb 16,2022 - Feb 20,2022</p>
                </div>
            </div>
            <div className="flex gap-3">
                <CiUser className="w-12 h-12 rounded-md text-white bg-secondary py-2 px-2" />
                <div>
                    <h2 className="text-xl font-bold text-white mb-3">Customer</h2>
                    <p className=" text-white mb-2">Full Name: Emon</p>
                    <p className=" text-white mb-2">Email: emon@gmail.com</p>
                    <p className=" text-white mb-2">PHone: +545412110</p>
                    <p className=" text-white mb-2">Address: Keraniganj, Dhaka</p>
                </div>
            </div>
        </div>
    );
};

export default SingleUserInfo;