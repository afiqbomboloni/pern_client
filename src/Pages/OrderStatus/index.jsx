import { Link, useLocation } from 'react-router-dom';
import successLogo from '../../assets/check-selesai.png'
import failedLogo from '../../assets/failed.png'

const OrderStatusSuccess = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const status = queryParams.get('status');
    const orderId = queryParams.get('order_id');

    return (
        <div class="h-screen flex flex-col justify-center items-center">
        {status === 'success' ? (
            <img width="500" src={successLogo} alt="" />
        ) : (
            <img width="500" src={failedLogo} alt="" />
        )}
        <p class="font-bold text-xl -mt-12 text-center">{`Status Pesanan Anda ${status}`}</p>
        {status === 'success' && (
            <p class="text-md mt-4 text-center">Terima kasih telah melakukan pembayaran, jangan bosan belanja</p>
        )}
       
            <Link to={`/`} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10">
            Kembali ke Home
            </Link>
        
        </div>
    );
}

export default OrderStatusSuccess;