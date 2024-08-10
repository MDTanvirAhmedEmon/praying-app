"use client"
import SingleUserInfo from "@/components/(withLayout)/OrderList/SingleOrder/SingleUserInfo";
import paymentInfo from '../../../../assets/order/payment.png'
import Image from "next/image";
import SingleOrderDetails from "@/components/(withLayout)/OrderList/SingleOrder/SingleOrderDetails";
const SingleOrder = () => {

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    return (
        <>
            <div>
                <SingleUserInfo handleChange={handleChange}></SingleUserInfo>
            </div>
            <div className=" mt-10">
                <Image src={paymentInfo} width={1200} height={200} alt="payment info"/>
            </div>
            <div className="mt-10">
                <SingleOrderDetails></SingleOrderDetails>
            </div>
        </>
    );
};

export default SingleOrder;