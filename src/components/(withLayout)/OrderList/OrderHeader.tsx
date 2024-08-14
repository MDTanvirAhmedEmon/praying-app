import { LuCalendarDays } from "react-icons/lu";

const OrderHeader = () => {
    return (
        <div className=" flex justify-between items-center">
            <div>
                <h2 className=" text-white text-2xl font-semibold">Orders List</h2>
            </div>
            <div>
                <div>
                    <button className="flex gap-2 items-center py-3 px-6 cursor-text text-white bg-[#727272] rounded-sm">
                        <LuCalendarDays className=" w-4 h-4" />
                        <p className=" text-base">Feb 15, 2024</p>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default OrderHeader;