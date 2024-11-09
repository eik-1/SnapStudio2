import { motion } from "framer-motion"
import { Camera, Flame, ShoppingBag, Video } from "lucide-react"
import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"

import { img1, img2, img3, img4, img5, img6, img7 } from "@/assets/images"
import { Button } from "@/Components/UI/Button"
import GridPattern from "@/Components/UI/grid-pattern"
import { Input } from "@/Components/UI/Input"
import Marquee from "@/Components/UI/marquee"
import { useUser } from "@/contexts/UserContext"
import { useToast } from "@/hooks/use-toast"

export default function LandingPage() {
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    const { user } = useUser()
    const { toast } = useToast()

    function handleEmailSubmit() {
        navigate("/login", { state: { email: email } })
    }

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
        <div className="min-h-screen">
            <nav className="flex items-center justify-between p-4 lg:px-8">
                <div className="flex items-center space-x-2">
                    <Camera className="h-8 w-8 text-primary" />
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

            <div className="relative">
                <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                {/* <Flame className="h-12 w-12 text-orange-500" /> */}
                                <h1 className="text-6xl font-extrabold text-base-content">
                                    Your{" "}
                                    <span className="text-secondary">
                                        AI Photographer
                                    </span>{" "}
                                </h1>
                            </div>

                            <p className="text-xl text-neutral mb-8">
                                Get custom images of you, any way you envision.
                                With just a few photos of yourself and a simple
                                prompt, you can create stunning, customized
                                images that bring your ideas to life
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <Camera className="h-6 w-6 text-secondary" />
                                    <span className="text-lg">
                                        <span className="font-semibold hover:text-secondary cursor-pointer">
                                            Take 100% AI photos
                                        </span>{" "}
                                        in any pose, place or action
                                    </span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <ShoppingBag className="h-6 w-6 text-secondary" />
                                    <span className="text-lg">
                                        <span className="font-semibold hover:text-secondary  cursor-pointer">
                                            Try on clothes on your model
                                        </span>{" "}
                                        for your Shopify store
                                    </span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Video className="h-6 w-6 text-secondary" />
                                    <span className="text-lg">
                                        <span className="font-semibold hover:text-secondary  cursor-pointer">
                                            Create 100% AI videos
                                        </span>{" "}
                                        from any AI photo you take
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:pl-8 flex justify-center items-center">
                            <div className="w-[30rem] overflow-hidden p-[3rem] card card-body bg-transparent shadow-xl border-[10px] border-secondary">
                                <div className="absolute top-[1.5rem] right-1 transform rotate-[10deg]">
                                    <span className="inline-flex items-center rounded-full bg-green-400 px-2.5 py-0.5 text-sm font-medium text-green-900">
                                        Now with Flux Pro Ultra 1.1!
                                    </span>
                                </div>

                                <div className="space-y-6 w-full">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        placeholder="Type your email..."
                                        className="input input-bordered w-full"
                                    />

                                    <button
                                        className="w-full btn btn-secondary"
                                        onClick={handleEmailSubmit}
                                    >
                                        Create your AI model +
                                    </button>

                                    <p className="text-center text-sm text-neutral-content">
                                        You can login or sign up
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
