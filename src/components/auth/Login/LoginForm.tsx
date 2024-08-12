"use client";
import { Button, Checkbox, Form, Input, Flex, ConfigProvider, Typography } from 'antd';
import Link from 'next/link';
import './LoginForm'
const LoginForm = () => {

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
                    className=' bg-[#71cde044] py-10 px-10 rounded-2xl w-[450px] border-2 border-[#400c42]'
                >
                    <div className='mb-4 text-center'>
                        <Typography.Title level={4} style={{ color: "white" }} className=' text-center '>Login to Account</Typography.Title>
                        <Typography.Text className='text-white text-center'> Please enter your email and password to continue</Typography.Text>
                    </div>
                    <Form.Item
                        name="username"
                        label="Email"
                        style={{}}
                    >
                        <Input style={{ padding: "8px" }} className=' text-lg' placeholder="your email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Password"
                    >
                        <Input style={{ padding: "8px" }} className=' text-lg' type="password" placeholder="Password" />
                    </Form.Item>
                    <Form.Item>
                        <Flex justify="space-between" align="center" className=''>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox className=' text-white text-md hover:text-white'>Remember password</Checkbox>
                            </Form.Item>
                            <Link className=' text-white text-md hover:text-white' href="/auth/forgot-password">Forgot password</Link>
                        </Flex>
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
                            <Button className=' bg-[#5A015E] text-white px-6 py-5' htmlType="submit">
                                Sign in
                            </Button>
                        </ConfigProvider>

                    </Form.Item>
                </Form>

            </ConfigProvider>

        </>
    );
};

export default LoginForm;