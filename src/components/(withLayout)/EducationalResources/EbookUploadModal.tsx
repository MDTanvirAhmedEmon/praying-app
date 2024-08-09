
import { Button, message, Modal, Typography, Upload, UploadProps } from "antd";
import { FiUpload } from "react-icons/fi";
import type { FormProps } from 'antd';
import { Checkbox, Form, Input } from 'antd';
import TextArea from "antd/es/input/TextArea";


const EbookUploadModal = ({ isModalOpen, handleOk, handleCancel }: any) => {
    const props: UploadProps = {
        name: 'file',
        action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
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

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    return (

        <Modal width={800} centered open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <div className="mb-4">
                <Typography.Title style={{ color: "#5A015E" }} level={2}>E-Book Upload</Typography.Title>
                <Typography.Text style={{ fontSize: "18px" }}>E-Book Cover Image</Typography.Text>
            </div>

            <Upload style={{}} className=" cursor-pointer " {...props}>
                <div className="w-[752px] h-[100px] border-2 border-[#5A015E] border-dashed rounded-lg flex items-center justify-center">
                    <FiUpload className="w-7 h-7 mr-3 text-[#5A015E]" /> <p className=" text-lg text-[#5A015E]">Upload Image</p>
                </div>
            </Upload>

            {/* form */}

            <Form
                className="mt-5 w-[752px]"
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 752 }}
                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    className="w-full"
                    style={{width: "752px"}}
                    label="Name"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>



                <Form.Item label="Short Description">
                    <TextArea rows={4} />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>

        </Modal>
    );
};

export default EbookUploadModal;