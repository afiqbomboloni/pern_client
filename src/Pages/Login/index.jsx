import { useEffect, useState } from "react";

import { loginUser } from "../../services/Auth";
import {useNavigate} from 'react-router-dom'
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

export default function Login() {
  document.title = "Login - Unuja Course";

  //navigate
  const navigate = useNavigate();

  //define state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //define state errors
  const [errors, setErrors] = useState([]);

//method login
const handleLogin = async (event) => {
  event.preventDefault()
  try {
    const response = await loginUser(email, password);
    if (!response) {
      throw new Error("Login failed");
    } 
    toast.success('Login success', {
      position: 'top-right'
    })
    sessionStorage.setItem("user", JSON.stringify(response));
    setTimeout(() => {
      if(response.role === "admin") {
        navigate('/admin/courses')
      } else {
        navigate('/')
      }
    }, 2000);

  } catch (error) {
    console.log("error", error);
    toast.error('Login failed', {
      position: 'top-right'
    })
  }
}
  return (
    <div>
      <div class="bg-white flex items-center h-screen w-full">
        <div class="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <span class="block w-full text-xl uppercase font-bold mb-4 text-black">
            Login
          </span>
          <form class="mb-4" onSubmit={handleLogin}>
            <div class="mb-4 md:w-full">
              <label for="email" class="block text-xs mb-1">
                Username or Email
              </label>
              <input
                class="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="email"
                name="email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                placeholder="Username or Email"
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
              class="bg-purple-500 hover:bg-purple-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded"
              type="submit"
            >
              Login
            </button>
            
          </form>
          <p className="text-sm font-light">Belum punya akun? <Link to="/register" className="underline text-blue-500">klik disini</Link></p>
          <Toaster />
        </div>
      </div>
    </div>
  );
}
