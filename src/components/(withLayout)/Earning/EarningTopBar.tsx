import { LuArrowLeftRight } from "react-icons/lu";

const EarningTopBar = () => {
    return (
        <div className="px-6">
            <div className=" flex gap-6 items-center">
                <h2 className=" text-2xl font-bold mr-8">Earnings</h2>
                <span className="flex gap-3 items-center bg-secondary px-4 py-2 rounded-md">
                    <LuArrowLeftRight className="w-4 h-4" />
                    <p className=" text-lg">Today’s Earning</p>
                    <p className=" text-lg font-bold">$3230</p>
                </span>
                <span className="flex gap-3 items-center bg-secondary px-4 py-2 rounded-md">
                    <LuArrowLeftRight className="w-4 h-4" />
                    <p className=" text-lg">All Earning</p>
                    <p className=" text-lg font-bold">$5230</p>
                </span>
            </div>
        </div>
    );
};

export default EarningTopBar;