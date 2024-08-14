import Image from "next/image";
import logo from "../../../assets/logo.png"

const SiderContent = () => {
    return (
        <div className="w-full flex justify-center mt-16">
            <div className="">
                <Image src={logo} width={120} height={120} alt="logo" />
            </div>

        </div>
    );
};

export default SiderContent;