import { Outlet } from "react-router-dom"
import Header from "../Components/Header"
import ModelTrainForm from "../Components/ModelTrainForm"

function RootLayout() {
    return (
        <div className="flex flex-col min-h-screen relative">
            <Header />
            <div className="abosolute h-[90dvh] w-max top-[10dvh] left-0">
                <ModelTrainForm />
            </div>

            <Outlet />
        </div>
    )
}
export default RootLayout
