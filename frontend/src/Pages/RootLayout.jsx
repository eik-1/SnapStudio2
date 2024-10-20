import { Outlet } from "react-router-dom"
import Header from "../Components/Header"
import ModelTrainForm from "../Components/ModelTrainForm"

function RootLayout() {
    return (
        <div className="flex flex-col min-h-screen relative">
            <Header />

            <Outlet />
        </div>
    )
}
export default RootLayout
