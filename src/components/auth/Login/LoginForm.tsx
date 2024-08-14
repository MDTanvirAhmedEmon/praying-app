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
                        <h2 style={{ color: "white" }} className=' text-center text-2xl font-bold mb-6'>Login to Account</h2>
                        <Typography.Text className='text-white text-center text-base '> Please enter your email and password to continue</Typography.Text>
                    </div>
                    <Form.Item
                        name="username"
                        label={<p className=' text-lg'>Email</p>}
                        style={{}}
                    >
                        <Input style={{ padding: "8px" }} className=' text-lg' placeholder="your email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label={<p className=' text-lg'>Password</p>}
                    >
                        <Input style={{ padding: "8px" }} className=' text-lg' type="password" placeholder="Password" />
                    </Form.Item>
                    <Form.Item>
                        <Flex justify="space-between" align="center" className=''>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <ConfigProvider
                                    theme={{
                                        token: {
                                            colorPrimary: "#5A015E",
                                        },
                                    }}
                                >
                                    <Checkbox className=' text-white text-md hover:text-white text-lg'>Remember password</Checkbox>
                                </ConfigProvider>

                            </Form.Item>
                            <Link className=' text-white hover:text-white text-lg' href="/auth/forgot-password">Forgot password</Link>
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
                            <Button className=' bg-[#5A015E] text-white px-6 py-5 text-base' htmlType="submit">
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