import { registerUser } from "../../services/Auth";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const handleRegister = async (event) => {
        event.preventDefault()
        try {
            if (!name || !email || !password) {
                toast.error('Inputan tidak boleh kosong')
                return
            }
            if (password.length < 8) {
                toast.error('Password minimal 8 karakter')
                return
            }
            console.log(name)
            const response = await registerUser(name, email, password);
            if (!response) {
                toast.error(error.data.message)
                return
            }
            sessionStorage.setItem("user", JSON.stringify(response));
            toast.success('Register success', {
                position: 'top-right'
            })
            setTimeout(() => {
                navigate('/')
            }, 2000);
        } catch (error) {
            const errorMessage = error.response.data.message
            toast.error(errorMessage, {
                position: 'top-right'
            })
        }
    }
    return (
        <div>
        <div class="bg-white flex items-center h-screen w-full">
          <div class="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
            <span class="block w-full text-xl uppercase font-bold mb-4 text-black">
              Register
            </span>
            <form class="mb-4" onSubmit={handleRegister}>
            <div class="mb-4 md:w-full">
                <label for="name" class="block text-xs mb-1">
                  Nama
                </label>
                <input
                  class="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="text"
                  name="name"
                  autoComplete="off"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  placeholder="Tulis nama"
                />
              </div>
              <div class="mb-4 md:w-full">
                <label for="email" class="block text-xs mb-1">
                  Email
                </label>
                <input
                  class="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="email"
                  name="email"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div class="mb-6 md:w-full">
                <label for="password" class="block text-xs mb-1">
                  Password
                </label>
                <input
                  class="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
              <button
                class="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded"
                type="submit"
              >
                Register
              </button>
            </form>
            <Toaster />
          </div>
        </div>
      </div>
    )
}

export default Register