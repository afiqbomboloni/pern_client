import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import AdminDashboard from "./Pages/Admin/Dashboard";
import Course from "./Pages/Admin/Course";
import CreateCourse from "./Pages/Admin/Course/CreateCourse";
import Transaction from "./Pages/Admin/Transaction";
import UserPage from "./Pages/Admin/User";
import Register from "./Pages/Register";
import CourseList from "./Pages/Course";
import CourseDetailUser from "./Pages/CourseDetailUser";
import EpisodePage from "./Pages/Episode";
import PrivateRoutes from "./services/PrivateRoute";
import AdminRoute from "./services/AdminRoute";
import AdminEpisodePage from "./Pages/Admin/Episode";
import TransactionPage from "./Pages/Transaction";
import OrderStatusSuccess from "./Pages/OrderStatus";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/" element={<Dashboard />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/course" element={<CourseList />} />
          <Route path="/course/:id" element={<CourseDetailUser />} />
          <Route path="/course/:id/episode/:episodeId" element={<EpisodePage />} />
          <Route path="/course/:id/transaction" element={<TransactionPage />} />
          <Route path="/order-status" element={<OrderStatusSuccess />} />
        </Route>
        <Route element={<AdminRoute />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/courses" element={<Course />} />
          <Route
            path="/admin/courses/tambah-course"
            element={<CreateCourse />}
          />
          <Route path="/admin/transactions" element={<Transaction />} />
          <Route path="/admin/users" element={<UserPage />} />
          
          <Route path="/admin/courses/:id/episodes" element={<AdminEpisodePage />} />
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
