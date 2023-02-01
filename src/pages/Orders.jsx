import { Button } from "../components";
import OrderComponent from "../components/OrderComponent";
import ordersApi from "../api/orders";
import useApi from "../hooks/useApi";
import Loader from "../components/Loader";

const Order = () => {
  const { data, loading } = useApi(ordersApi.getOrders);

  if (loading || !data) {
    return <Loader />;
  }

  return (
    <>
      <div className='px-10'>
        <div className='mb-5'>
          <Button
            onclick={() => window.location.replace("/customerinfo")}
            bgColor='#001E4A'
            text='Create New'
            color='white'
            size='text-md'
            borderRadius='5px'
          />
        </div>
        <div>
          {data[0].payload.map((item) => (
            <OrderComponent key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Order;
