import { LuCalendarDays } from "react-icons/lu";

const OrderHeader = () => {
    return (
        <div className=" flex justify-between items-center">
            <div>
                <h2 className=" text-white text-2xl font-semibold">Orders List</h2>
            </div>
            <div>
                <div>
                    <button className="flex items-center py-2 px-3 cursor-text text-white gap-1 bg-slate-400 rounded-sm">
                        <LuCalendarDays className=" w-5 h-5" /> <span>Feb 15, 2024</span>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default OrderHeader;