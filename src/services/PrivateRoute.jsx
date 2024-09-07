import { Navigate, Outlet } from "react-router-dom"

const PrivateRoutes = () => {
    let user = JSON.parse(sessionStorage.getItem('user'))
    let auth = {'token': user?.accessToken || user?.data.accessToken}
    return (
        auth.token ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes