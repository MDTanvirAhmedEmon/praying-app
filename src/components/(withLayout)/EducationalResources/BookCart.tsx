
import Image from "next/image";

const BookCart = ({ data }: any) => {

    return (
        <div className="flex gap-2 items-center bg-white rounded-md p-2">
            <div><Image src={data?.image} width={200} height={200} alt="image" /></div>
            <div>
                <p className="font-bold text-lg mb-2">{data?.name}</p>
                <p className=" mb-2">By <span className=" text-primary ">{data?.author}</span></p>
                <p>{data?.description?.slice(0, 40)}...</p>
            </div>
        </div>
    );
};

export default BookCart;