"use client";
import { Button, Checkbox, Form, Input, Flex, ConfigProvider } from 'antd';
import { Typography } from 'antd';
import Link from 'next/link';
const ForgotPasswordForm = () => {

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };


    return (
        <>
            <ConfigProvider
                theme={{
                    components: {
                        Form: {
                            labelColor: "white"
                        },
                    },
                }}
            >
                <Form
                    name="login"
                    initialValues={{ remember: true }}
                    style={{ maxWidth: 550 }}
                    onFinish={onFinish}
                    layout="vertical"
                    className=' bg-[#71cde044] py-28 px-10 rounded-2xl w-[450px] border-2 border-[#400c42]'
                >
                    <Typography.Title level={4} style={{ color: "white" }} className=' text-center text-2xl'>Forgot Password</Typography.Title>
                    <Form.Item
                        name="username"
                        label={<p className=' text-lg'>Email</p>}
                        rules={[{ required: true, message: 'Please input your Email!' }]}
                        style={{}}
                    >
                        <Input style={{ padding: "8px" }} className=' text-lg' placeholder="Your Email" />
                    </Form.Item>

                    <Form.Item className='text-center'>
                        <ConfigProvider theme={{
                            components: {
                                Button: {
                                    defaultHoverBg: "#5A015E",
                                    defaultActiveBg: "#5A015E",
                                    defaultHoverColor: "white",
                                    defaultHoverBorderColor: "white",
                                    defaultActiveBorderColor: "white",
                                    defaultActiveColor: "white",
                                },
                            },
                        }} wave={{ disabled: true }}>
                            <Link href={'/auth/set-new-password'}><Button className=' bg-[#5A015E] text-white px-6 py-5 text-base' htmlType="submit">
                                Send Code
                            </Button></Link>
                        </ConfigProvider>

                    </Form.Item>
                </Form>

            </ConfigProvider>

        </>
    );
};

export default ForgotPasswordForm;