import { MenuOutlined } from "@ant-design/icons";
import { Button } from "antd";

const HeaderContent = ({ toggleCollapsed }: any) => {

    return (
        <div className="w-full">
            <Button className=" hover:text-black" onClick={toggleCollapsed} style={{ color: "black",border: "none", fontSize: "25px", fontWeight: "600"}}>
                <MenuOutlined />
            </Button>
        </div>
    );
};

export default HeaderContent;