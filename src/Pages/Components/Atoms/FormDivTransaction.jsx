const FormDivTransaction = ({data, handlePayTransaction}) => {
    return (
        <div class="max-w-sm md:w-full mx-auto md:mx-0 text-center py-4">
            <div class="mb-5">
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Nama
              </label>
              <input
                type="text"
                id="name"
                value={data.name}
                disabled
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed"
                required
              />
            </div>
            <div class="mb-5">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                value={data.email}
                disabled
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg cursor-not-allowed block w-full p-2.5"
                required
              />
            </div>
            <div class="mb-5">
              <label
                for="total"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Total
              </label>
              <input
                type="text"
                id="total"
                disabled
                value={`Rp ${new Intl.NumberFormat("id-ID").format(
                  data.price
                )}`}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg cursor-not-allowed block w-full p-2.5"
                required
              />
            </div>
            <button
              onClick={handlePayTransaction}
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Selesaikan Pembayaran
            </button>
          </div>
    )
}

export default FormDivTransaction