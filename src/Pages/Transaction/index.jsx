import Footer from "../Components/Footer";
import FormTransaction from "../Components/FormTransaction";
import HomeNavbar from "../Components/HomeNavbar";

const TransactionPage = () => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  return (
    <div>
      <HomeNavbar linkActive="transaction" />
      <FormTransaction data={cart} />
      <Footer />
    </div>
  );
};

export default TransactionPage;
