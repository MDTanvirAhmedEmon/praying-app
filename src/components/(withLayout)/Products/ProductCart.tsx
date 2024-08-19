import Image from "next/image";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

const ProductCart = ({ data }: any) => {

    return (
        <div className="flex gap-2 items-center bg-white rounded-md p-2">
            <div><Image src={data?.image} width={200} height={200} alt="image" /></div>
            <div>
                <p className="font-bold text-xl mb-2 capitalize">{data?.name}</p>
                <div>
                    {data.size.map((s: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined, index: any) => <span key={index} className=" bg-slate-200 p-1 rounded-md text-black m-1 uppercase">{s}</span>)}
                </div>
                <p className="font-bold text-2xl mb-1 mt-2">${data?.price}</p>
                <p className=" font-semibold ">{data?.description?.slice(0, 30)}...</p>
            </div>
        </div>
    );
};

export default ProductCart;