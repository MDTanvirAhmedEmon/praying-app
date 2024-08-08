import Image from "next/image";
import logo from "../../../assets/logo.png"

const SiderContent = () => {
    return (
        <div className="w-full flex justify-center mt-20">
            <div className="">
                <Image src={logo} width={130} height={130} alt="logo" />
            </div>

        </div>
    );
};

export default SiderContent;