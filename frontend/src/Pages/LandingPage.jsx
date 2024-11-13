import { motion } from "framer-motion"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import Hero from "@/Components/LandingPage/Hero"
import InputOutputImage from "@/Components/LandingPage/InputOutputImage"
import LandingNav from "@/Components/LandingPage/LandingNav"
import GridPattern from "@/Components/UI/grid-pattern"
import Marquee from "@/Components/UI/marquee"

export default function LandingPage() {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen w-screen">
            <LandingNav />
            <Hero />
            <InputOutputImage />
        </div>
    )
}
