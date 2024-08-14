import OrderHeader from "@/components/(withLayout)/OrderList/OrderHeader";
import OrderTable from "@/components/(withLayout)/OrderList/OrderTable";

const OrderList = () => {
    return (
        <>
            <div>
                <OrderHeader></OrderHeader>
            </div>
            <div className="mt-8">
                <OrderTable></OrderTable>
            </div>
            
        </>
    );
};

export default OrderList;