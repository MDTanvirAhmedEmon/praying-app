import Image from "next/image";

const WorkShopCart = ({ data }: any) => {

    return (
        <div className=" gap-2 items-center bg-white rounded-md p-2">
            <div><Image src={data?.image} width={300} height={300} alt="image" /></div>
            <div>
                <p className="font-bold text-lg mb-2">{data?.name}</p>
                <p className=" mb-2">By <span className=" text-primary ">{data?.skill}</span></p>
                <p>{data?.total}</p>
            </div>
            <button className=" w-full bg-primary p-1 text-white mt-2">Enroll</button>
        </div>
    );
};

export default WorkShopCart;