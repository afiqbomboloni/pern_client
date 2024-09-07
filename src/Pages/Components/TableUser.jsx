const TableUser = ({ users }) => {
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
            {users.map((user, index) => (
              <tr key={index} class="odd:bg-white even:bg-gray-50 border-b">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {user.order_id}
                </th>
                <td class="px-6 py-4">{user.name}</td>
                <td class="px-6 py-4">{user.title}</td>
                <td class="px-6 py-4">{user.amount}</td>
                <td class="px-6 py-4">{user.user_date}</td>
                <td class="px-6 py-4">{user.payment_status}</td>
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
}