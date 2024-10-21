import { Outlet } from "react-router-dom"
import Header from "../Components/Header"
import ModelTrainForm from "../Components/ModelTrainForm"

function RootLayout() {
    return (
        <div className="min-h-screen">
            <Header />

            <Outlet />
        </div>
    )
}
export default RootLayout
