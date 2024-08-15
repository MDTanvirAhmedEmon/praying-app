import { Button, ConfigProvider, message, Modal, Select, Typography, Upload, UploadProps } from "antd";
import { FiUpload } from "react-icons/fi";
import { Form, Input } from 'antd';
import Link from "next/link";

const CategoryUploadModal = ({ isModalOpen, handleOk, handleCancel }: any) => {
    const props: UploadProps = {
        name: 'file',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    //  selector
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    return (
        <Modal
            footer={null}
            width={800}
            centered
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <Typography.Title
                style={{ color: "#5A015E" }}
                level={2}
                className="mb-3"
            >
                Event Cover Image
            </Typography.Title>

            {/* Form */}
            <Form
                name="basic"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                style={{ maxWidth: '100%' }}
                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >

                {/* Upload Image */}
                <Form.Item
                    className="mb-4 "
                    name="imageUpload"
                >
                    <Upload className=" w-full" {...props}>
                        <div className="w-[752px] h-[100px] border border-[#5A015E] border-dashed rounded-lg flex items-center justify-center cursor-pointer">
                            <FiUpload className="w-7 h-7 mr-3 text-[#5A015E]" />
                            <p className="text-lg text-[#5A015E]">Upload category icon</p>
                        </div>
                    </Upload>
                </Form.Item>

                <Form.Item

                    label={<span style={{ fontSize: "18px" }}>Category Name</span>}
                    name="category"
                    rules={[{ required: true, message: 'Please category name!' }]}
                >
                    <Input placeholder="Enter Name..." className="border-primary" style={{ padding: "10px" }} />
                </Form.Item>

                <Form.Item

                    label={<span style={{ fontSize: "18px" }}>Category Serial</span>}
                    name="serial"
                    rules={[{ required: true, message: 'Please input category serial!' }]}
                >
                    <Input placeholder="Enter Name..." className="border-primary" style={{ padding: "10px" }} />
                </Form.Item>


                {/* Submit Button */}
                <Form.Item
                    className="mt-6"
                >
                    <ConfigProvider
                        theme={{
                            components: {
                                Button: {
                                    defaultHoverBg: "#5A015E",
                                    defaultHoverColor: "white",
                                    defaultActiveBg: "#5A015E",
                                    defaultActiveColor: "white",
                                },
                            },
                        }}
                    >
                        <Button block className=" bg-primary text-white text-xl py-8 border-none hover:bg-primary" htmlType="submit">
                            Upload
                        </Button>
                    </ConfigProvider>

                </Form.Item>
            </Form>
        </Modal>
    );
};

export default CategoryUploadModal;
