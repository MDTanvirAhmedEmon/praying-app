"use client";
import { Button, Form, Input, ConfigProvider } from 'antd';
import { Typography } from 'antd';


const SetNewPasswordForm = () => {

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
                        <h2 style={{ color: "white" }} className=' text-center text-2xl  mb-6'>Set a new password</h2>
                        <p className='text-white text-center text-lg'>Create a new password. Ensure it differs from</p>
                        <p className='text-white text-center text-lg mt-[-6px]'> previous ones for security</p>
                    </div>

                    <Form.Item
                        label={<p className=' text-lg'>Password</p>}
                        name="password"
                        rules={[{ required: true, message: 'Please input your new password!' }]}
                    >
                        <Input.Password style={{ padding: "8px" }} className=' text-lg' placeholder="Password" />
                    </Form.Item>

                    <Form.Item
                        label={<p className=' text-lg'>Confirm Password</p>}
                        name="confirmPassword"
                        rules={[{ required: true, message: 'Please input comfirm password!' }]}
                    >
                        <Input.Password style={{ padding: "8px" }} className=' text-lg' placeholder="Confirm password" />
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
                            <Button className=' bg-[#5A015E] text-white px-6 py-5 text-lg' htmlType="submit">
                                Update Password
                            </Button>
                        </ConfigProvider>

                    </Form.Item>
                </Form>

            </ConfigProvider>

        </>
    );
};

export default SetNewPasswordForm;