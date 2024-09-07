import { Navigate, Outlet } from "react-router-dom"

const AdminRoute = () => {
    let user = JSON.parse(sessionStorage.getItem('user'))
    let auth = {'token': user?.accessToken, 'role': user?.role}
    return (
        auth.token 
        ? auth.role === 'admin' 
            ? <Outlet/>
            : <Navigate to="/"/>
        : <Navigate to="/login"/>
    )
}

export default AdminRoute