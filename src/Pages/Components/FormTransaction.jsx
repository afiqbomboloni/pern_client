import { useState } from "react";
import { createTransaction } from "../../services/Transaction";
import useSnap from "../../hooks/useSnap";
import { useNavigate } from "react-router-dom";
import FormDivTransaction from "./Atoms/FormDivTransaction";

const FormTransaction = ({ data }) => {
  const navigate = useNavigate();
  const { snapEmbed } = useSnap();
  const [snapShow, setSnapShow] = useState(false);
  const handlePayTransaction = async () => {
    try {
      const dataTransaction = {
        user_id: data.user_id,
        course_id: data.course_id,
        amount: data.price,
        transaction_date: new Date().toISOString().slice(0, 10),
        payment_status: "pending",
      };
      const response = await createTransaction(dataTransaction);
      if ((response && response.status === 201) || response.status === 200) {
        await localStorage.removeItem("cart");
        setSnapShow(true);
        snapEmbed(response.data.data.snap_token, "snap-container", {
          onSuccess: function (result) {
            console.log("success", result);
            navigate(`/order-status?status=success&order_id=${response.data.data.transaction_id}`)
            setSnapShow(false);
          },
          onPending: function (result) {
            console.log("pending", result);
            navigate(`/order-status?status=pending&order_id=${response.data.data.transaction_id}`)
            setSnapShow(false);
          },
          onClose: function () {
            console.log(
              "customer closed the popup without finishing the payment"
            );
            navigate(`/course/${data.course_id}`)
            setSnapShow(false);
          },
        });
      } else {
        alert("Pembayaran Gagal");
      }
    } catch (error) {
      alert("Pembayaran Gagal");
      console.error("error pay transaction", error);
    }
  };
  return (
    <div class="h-screen flex flex-col justify-center items-center">
      {!snapShow && (
        <>
          <p class="font-semibold text-lg">Detail Pembayaran</p>
          <FormDivTransaction data={data} handlePayTransaction={handlePayTransaction} />
        </>
      )}

      <div id="snap-container"></div>
    </div>
  );
};

export default FormTransaction;
