"use client";

import { Button, ConfigProvider, Form, Input } from "antd";

const EditProfileForm = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="flex items-center justify-center py-10"> {/* Full height, center vertically */}
            <div className="w-full max-w-lg  p-6 rounded-lg"> {/* Container for form styling */}
                <h2 className="text-center text-2xl text-white font-semibold mb-6">Edit Your Profile</h2>
                <ConfigProvider
                    theme={{
                        components: {
                            Input: {
                                colorBgContainer: "transparent",
                                colorText: "white",
                                colorTextPlaceholder: "white",
                            },
                            Button: {
                                defaultHoverBg: "#5A015E",
                                defaultActiveBg: "#5A015E",
                                defaultHoverColor: "white",
                                defaultHoverBorderColor: "white",
                                defaultActiveBorderColor: "white",
                                defaultActiveColor: "white",
                            },
                            Form: {
                                labelColor: "white"
                            },
                        },
                    }}
                >
                    <Form
                        name="basic"
                        className="w-full" // Full width of its container
                        labelCol={{ span: 24 }} // Full width for label
                        wrapperCol={{ span: 24 }} // Full width for input
                        layout="vertical"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="Name"
                            name="name"
                        >
                            <Input placeholder="Name" style={{ padding: "8px" }} />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                        >
                            <Input placeholder="Email" style={{ padding: "8px" }} />
                        </Form.Item>

                        <Form.Item
                            label="Contact No"
                            name="contact"
                        >
                            <Input placeholder="Contact No" style={{ padding: "8px" }} />
                        </Form.Item>

                        <Form.Item className=" text-center mx-auto">
                            <Button className="bg-primary px-10 py-5 text-white border-none" htmlType="submit">
                                Save & Change
                            </Button>
                        </Form.Item>
                    </Form>
                </ConfigProvider>
            </div>
        </div>
    );
};

export default EditProfileForm;
