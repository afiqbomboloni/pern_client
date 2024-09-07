const TableTransaction = ({ transactions }) => {
  return (
    <div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg my-10">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3">
                Order id
              </th>
              <th scope="col" class="px-6 py-3">
                Nama
              </th>
              <th scope="col" class="px-6 py-3">
                Judul Course
              </th>
              <th scope="col" class="px-6 py-3">
                Total Pembayaran
              </th>
              <th scope="col" class="px-6 py-3">
                Tanggal
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-6 py-3">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} class="odd:bg-white even:bg-gray-50 border-b">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {transaction.order_id}
                </th>
                <td class="px-6 py-4">{transaction.name}</td>
                <td class="px-6 py-4">{transaction.title}</td>
                <td class="px-6 py-4">{transaction.amount}</td>
                <td class="px-6 py-4">{transaction.transaction_date}</td>
                <td class="px-6 py-4">{transaction.payment_status}</td>
                <td class="px-6 py-4">
                  <a class="font-medium text-blue-600 hover:underline cursor-pointer">
                    Edit
                  </a>
                  <a class="font-medium text-blue-600 hover:underline ml-4 cursor-pointer">
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableTransaction;
