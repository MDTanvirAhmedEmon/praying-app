import { ConfigProvider, Spin } from "antd";

const loading = () => {
    return (
        <div className=" h-screen w-full flex justify-center items-center">

            <ConfigProvider
                theme={{
                    components: {
                        Spin: {
                            colorPrimary: "#5A015E",
                        },
                    },
                }}
            >
                <Spin size="large" />
            </ConfigProvider>

        </div>
    );
};

export default loading;