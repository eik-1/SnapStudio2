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

export default function LandingPage() {
    const [email, setEmail] = useState("")
    const navigate = useNavigate()
    function handleEmailSubmit() {
        navigate(`/login/${email}`)
    }

    return (
        <div className="min-h-screen bg-black text-white">
            <nav className="flex items-center justify-between p-4 lg:px-8">
                <div className="flex items-center space-x-2">
                    <Camera className="h-8 w-8 text-purple-500" />
                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                        SnapSTUDIO
                    </span>
                </div>
                <div className="flex items-center space-x-4">
                    <NavLink
                        to="/pricing"
                        className="text-gray-300 hover:text-white"
                    >
                        Pricing
                    </NavLink>
                    <NavLink
                        to="/login"
                        className="text-gray-300 hover:text-white"
                    >
                        Log in
                    </NavLink>
                    <NavLink
                        to="/gallery"
                        className="text-gray-300 hover:text-white"
                    >
                        Gallery
                    </NavLink>
                    <Button className="bg-purple-600 hover:bg-purple-700">
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
                                <h1 className="text-5xl font-bold">
                                    Your AI Photographer
                                </h1>
                            </div>

                            <p className="text-xl text-gray-400 mb-8">
                                Get custom images of you, any way you envision.
                                With just a few photos of yourself and a simple
                                prompt, you can create stunning, customized
                                images that bring your ideas to life..
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <Camera className="h-6 w-6 text-purple-500" />
                                    <span className="text-lg">
                                        <span className="font-semibold hover:text-purple-400 cursor-pointer">
                                            Take 100% AI photos
                                        </span>{" "}
                                        in any pose, place or action
                                    </span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <ShoppingBag className="h-6 w-6 text-purple-500" />
                                    <span className="text-lg">
                                        <span className="font-semibold hover:text-purple-400 cursor-pointer">
                                            Try on clothes on your model
                                        </span>{" "}
                                        for your Shopify store
                                    </span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Video className="h-6 w-6 text-purple-500" />
                                    <span className="text-lg">
                                        <span className="font-semibold hover:text-purple-400 cursor-pointer">
                                            Create 100% AI videos
                                        </span>{" "}
                                        from any AI photo you take
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:pl-8">
                            <div className="relative overflow-hidden rounded-2xl bg-gray-900 p-8">
                                <div className="absolute top-2 right-2">
                                    <span className="inline-flex items-center rounded-full bg-green-400 px-2.5 py-0.5 text-sm font-medium text-green-900">
                                        Now with Flux 1.1!
                                    </span>
                                </div>

                                <div className="space-y-6">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        placeholder="Type your email..."
                                        className="w-full bg-white/10 border-gray-700 text-white placeholder:text-gray-400 w-full
        rounded-md
        border
        border-gray-700
        bg-white/10
        px-3
        py-2
        text-sm
        text-white
        placeholder:text-gray-400
        focus:outline-none
        focus:ring-2
        focus:ring-purple-500
        focus:border-transparent
        transition-colors"
                                    />

                                    <Button
                                        className="w-full bg-teal-500 hover:bg-teal-600 text-white"
                                        onClick={handleEmailSubmit}
                                    >
                                        Create your AI model +
                                    </Button>

                                    <p className="text-center text-sm text-gray-400">
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
