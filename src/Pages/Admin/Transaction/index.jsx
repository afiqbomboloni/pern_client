import AdminNavbar from "../../Components/AdminNavbar";
import TableTransaction from "../../Components/TableTransaction";
import { fetchTransactions } from "../../../services/Transaction";
import { useEffect, useState } from "react";

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);

  const handleFetchTransaction = async () => {
    try {
      const response = await fetchTransactions();
      setTransactions(response.data || []);
    } catch (error) {
      console.error("error", error);
    }
  }

  useEffect(() => {
    handleFetchTransaction();
  }, []);
  return (
    <div>
      <AdminNavbar activeLink="transaction" />
      <div className="max-w-screen-xl mx-auto">
            <h1 className="font-semibold text-2xl">Daftar Transaksi</h1>
            <TableTransaction transactions={transactions} />
        </div>
    </div>
  );
};

export default Transaction;
