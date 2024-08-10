import { Button, ConfigProvider, message, Modal, Radio, RadioChangeEvent, Typography, Upload, UploadProps } from "antd";
import { FiUpload } from "react-icons/fi";
import { Form, Input } from 'antd';
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import './ProductUploadModal.css';


const ProductUploadModal = ({ isModalOpen, handleOk, handleCancel }: any) => {
    const [productSize, setProductSize] = useState('m');
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
    // form handler
    const onFinish = (values: any) => {
        console.log('Success:', values, 'Product size', productSize);
    };

    // radio button
    const onChange = (e: RadioChangeEvent) => {
        console.log(`radio checked:${e.target.value}`);
        setProductSize(e.target.value)
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
                        Product Image
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

                    label={<span style={{ fontSize: "18px" }}>Product Name</span>}
                    name="product"
                    rules={[{ required: true, message: 'Please input product name!' }]}
                >
                    <Input placeholder="Product Name..." className="border-primary" style={{ padding: "10px" }} />
                </Form.Item>

                {/* Short Description */}
                <Form.Item
                    label={<span style={{ fontSize: "18px" }}>Description</span>}
                    name="description"
                >
                    <TextArea className="border-primary hover:border-primary" placeholder="Type here..." rows={4} />
                </Form.Item>

                {/* Price */}
                <Form.Item
                    label={<span style={{ fontSize: "18px" }}>Product Price</span>}
                    name="price"
                    rules={[{ required: true, message: 'Please input product price!' }]}
                >
                    <Input placeholder="Product Price..." className="border-primary" style={{ padding: "10px" }} />
                </Form.Item>

                {/* Product size */}

                <Form.Item className="mb-3">
                    <Radio.Group onChange={onChange} className=" flex gap-2" defaultValue={productSize}>
                        {/* <ConfigProvider
                            theme={{
                                components: {
                                    Radio: {
                                        buttonSolidCheckedActiveBg: "#5A015E",
                                        buttonSolidCheckedBg: "#5A015E",
                                        buttonSolidCheckedColor: "#5A015E",
                                        buttonSolidCheckedHoverBg: "#5A015E",
                                    },
                                },
                            }}
                        > */}
                            <Radio.Button value="s">S</Radio.Button>
                            <Radio.Button value="m">M</Radio.Button>
                            <Radio.Button value="l">L</Radio.Button>
                            <Radio.Button value="xl">XL</Radio.Button>
                            <Radio.Button value="xxl">XXL</Radio.Button>
                        {/* </ConfigProvider> */}
                    </Radio.Group>
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

export default ProductUploadModal;
