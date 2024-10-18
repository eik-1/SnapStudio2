import { Outlet } from "react-router-dom"
import SideBar from "../Components/SideBar"
import ModelTrainForm from "../Components/ModelTrainForm"

function RootLayout() {
    return (
        <div className="flex min-h-screen">
            <ModelTrainForm />
            <div className="flex-grow ml-64 mt-24 flex flex-col">
                <Outlet />
            </div>
        </div>
    )
}
export default RootLayout
