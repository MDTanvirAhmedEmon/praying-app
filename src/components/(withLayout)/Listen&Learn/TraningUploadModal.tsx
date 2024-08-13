import { Button, ConfigProvider, message, Modal, Select, Typography, Upload, UploadProps } from "antd";
import { FiUpload } from "react-icons/fi";
import { Form, Input } from 'antd';
import TextArea from "antd/es/input/TextArea";
import Link from "next/link";

const TraningUploadModal = ({ isModalOpen, handleOk, handleCancel }: any) => {
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
                Listen & Learn Upload
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
                <div className="mb-4">
                    <Typography.Text style={{ fontSize: "18px" }}>
                        Cover Image
                    </Typography.Text>
                </div>
                {/* Upload Image */}
                <Form.Item
                    className="mb-4 "
                    name="imageUpload"
                >
                    <Upload className=" w-full" {...props}>
                        <div className="w-[752px] h-[100px] border border-[#5A015E] border-dashed rounded-lg flex items-center justify-center cursor-pointer">
                            <FiUpload className="w-7 h-7 mr-3 text-[#5A015E]" />
                            <p className="text-lg text-[#5A015E]">Upload Image</p>
                        </div>
                    </Upload>
                </Form.Item>

                {/* Name Input */}
                <Form.Item

                    label={<span style={{ fontSize: "18px" }}>Category Name</span>}
                    name="category"
                    rules={[{ required: true, message: 'Please category name!' }]}
                >
                    <Input placeholder="Enter Name..." className="border-primary" style={{ padding: "10px" }} />
                </Form.Item>

                <Form.Item

                    label={<span style={{ fontSize: "18px" }}>Training & Workshop Type(Optional) </span>}
                    name="training"
                >
                    <ConfigProvider
                        theme={{
                            components: {
                                Select: {
                                    clearBg: "#5A015E",
                                    colorBorder: "#5A015E",
                                    colorPrimaryActive: "#5A015E",
                                },
                            },
                        }}
                    >
                        <Select
                            defaultValue="paid"
                            className="border-primary"
                            style={{ width: "100%", height: "45px" }}
                            onChange={handleChange}
                            options={[
                                { value: 'paid', label: 'Paid' },
                                { value: 'free', label: 'Free' },
                            ]}
                        />
                    </ConfigProvider>

                </Form.Item>

                <Form.Item

                    label={<span style={{ fontSize: "18px" }}>Price</span>}
                    name="price"
                    rules={[{ required: true, message: 'Please input price!' }]}
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
                        <Link href={`/listen-and-learn/1`}> <Button block className=" bg-primary text-white text-xl py-8 border-none hover:bg-primary" htmlType="submit">
                            Upload
                        </Button></Link>
                    </ConfigProvider>

                </Form.Item>
            </Form>
        </Modal>
    );
};

export default TraningUploadModal;
