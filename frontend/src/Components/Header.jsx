import React from "react"
import { useNavigate } from "react-router-dom"
import { LogOut } from "lucide-react"
import Avvvatars from "avvvatars-react"

import { Button } from "./UI/Button"
import { useUser } from "@/contexts/UserContext"

function Header() {
    const navigate = useNavigate()
    const { user, logout } = useUser()
    console.log("user from header", user)

    function handleLogin() {
        navigate("/login")
    }

    async function handleLogout() {
        await logout()
        navigate("/login")
    }

    return (
        <header className="flex max-h-[10dvh] w-full justify-between items-center px-6 py-4 bg-white border-[1px] fixed top-0 z-50">
            <div className="flex items-center space-x-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 text-2xl font-bold font-heading">
                    SnapStudio
                </span>
            </div>

            <div className="flex items-center space-x-3">
                {user ? (
                    <>
                        <Avvvatars value={user.name} />
                        <span className="text-gray-600 font-semibold">
                            {user.name}
                        </span>
                        <button onClick={handleLogout}>
                            <LogOut />
                        </button>
                    </>
                ) : (
                    <Button onClick={handleLogin}>Sign In / Sign Up</Button>
                )}
            </div>
        </header>
    )
}

export default Header
