import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { RootState } from "../../store"

export default function ProtectedRoutes() {

    const isAuth = useSelector((state: RootState) => state.dashboard.isAuthenticate)
    return isAuth ? <Outlet /> : <Navigate to="/auth/login" />
}

