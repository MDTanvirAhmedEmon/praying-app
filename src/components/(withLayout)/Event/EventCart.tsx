
import Image from "next/image";

const EventCart = ({ data }: any) => {

    return (
        <div className="flex flex-col gap-2 bg-white rounded-md ">
            <div><Image className=" rounded-md" src={data?.image} width={600} height={600} alt="image" /></div>
            <div className=" p-4">
                <p className="font-bold text-lg mb-2">{data?.name}</p>
                <p className=" mb-2">By <span className=" text-primary ">{data?.date}</span></p>
                <p>{data?.time}</p>
            </div>
        </div>
    );
};

export default EventCart;