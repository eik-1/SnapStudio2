import { NavLink, useNavigate } from "react-router-dom"

import { useUser } from "@/contexts/UserContext"
import { useToast } from "@/hooks/use-toast"
import { Button } from "../UI/Button"

function LandingNav() {
    const navigate = useNavigate()

    const { toast } = useToast()
    const { user } = useUser()
    function handleDashboard() {
        if (user) {
            navigate("/home")
        } else {
            toast({
                description: "Please login to access the dashboard",
            })
        }
    }

    return (
        <nav className="flex items-center justify-between p-4 lg:px-8">
            <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-primary ">
                    SnapSTUDIO
                </span>
            </div>
            <div className="flex items-center space-x-3 text-lg font-bold">
                <NavLink
                    to="/pricing"
                    className="text-base-content hover:bg-base-200 rounded-md px-3 py-2"
                >
                    Pricing
                </NavLink>

                <NavLink
                    to="/gallery"
                    className="text-base-content hover:bg-base-200 rounded-md px-3 py-2"
                >
                    Gallery
                </NavLink>

                {!user ? (
                    <NavLink
                        to="/login"
                        className="text-base-content hover:bg-base-200 rounded-md px-3 py-2"
                    >
                        Login
                    </NavLink>
                ) : (
                    <span className="text-base-content hover:bg-base-200 rounded-md px-3 py-2">
                        Hello, {user.name}
                    </span>
                )}

                <Button
                    className="bg-secondary hover:bg-secondary rounded-md text-base-content text-lg font-bold"
                    onClick={handleDashboard}
                >
                    Dashboard →
                </Button>
            </div>
        </nav>
    )
}

export default LandingNav
