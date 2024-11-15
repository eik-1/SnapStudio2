import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import React, { useEffect, useRef, useState } from "react"

import { img1 as afterImage } from "@/assets/images"
import { img4 as beforeImage } from "@/assets/input-images"

export default function ImageComparisonSlider({
    beforeLabel = "Before",
    afterLabel = "After",
}) {
    const [sliderPosition, setSliderPosition] = useState(50)
    const [imagesLoaded, setImagesLoaded] = useState(false)
    const containerRef = useRef(null)
    const beforeImageRef = useRef(null)
    const afterImageRef = useRef(null)

    useEffect(() => {
        const beforeImg = beforeImageRef.current
        const afterImg = afterImageRef.current

        if (beforeImg && afterImg) {
            const handleLoad = () => {
                if (beforeImg.complete && afterImg.complete) {
                    setImagesLoaded(true)
                }
            }

            beforeImg.addEventListener("load", handleLoad)
            afterImg.addEventListener("load", handleLoad)
            beforeImg.addEventListener("error", handleLoad)
            afterImg.addEventListener("error", handleLoad)

            return () => {
                beforeImg.removeEventListener("load", handleLoad)
                afterImg.removeEventListener("load", handleLoad)
                beforeImg.removeEventListener("error", handleLoad)
                afterImg.removeEventListener("error", handleLoad)
            }
        }
    }, [beforeImage, afterImage])

    const handleMove = (clientX) => {
        const container = containerRef.current
        if (container) {
            const rect = container.getBoundingClientRect()
            const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
            const percentage = (x / rect.width) * 100
            setSliderPosition(percentage)
        }
    }

    const handleMouseDown = (event) => {
        event.preventDefault()
        handleMove(event.clientX)

        const handleMouseMove = (e) => {
            handleMove(e.clientX)
        }

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("mouseup", handleMouseUp)
        }

        document.addEventListener("mousemove", handleMouseMove)
        document.addEventListener("mouseup", handleMouseUp)
    }

    const handleTouchStart = (event) => {
        event.preventDefault()
        handleMove(event.touches[0].clientX)

        const handleTouchMove = (e) => {
            handleMove(e.touches[0].clientX)
        }

        const handleTouchEnd = () => {
            document.removeEventListener("touchmove", handleTouchMove)
            document.removeEventListener("touchend", handleTouchEnd)
        }

        document.addEventListener("touchmove", handleTouchMove)
        document.addEventListener("touchend", handleTouchEnd)
    }

    return (
        <div
            ref={containerRef}
            className="relative w-full max-w-xl max-h-[500px] overflow-hidden rounded-lg border-[10px] border-secondary"
            aria-label="Image comparison slider"
        >
            <div className="relative h-full">
                <img
                    ref={afterImageRef}
                    src={afterImage}
                    alt="After"
                    className="w-full h-full object-cover"
                    style={{ display: imagesLoaded ? "block" : "none" }}
                />
                <div
                    className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden"
                    style={{
                        clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                        display: imagesLoaded ? "block" : "none",
                    }}
                >
                    <img
                        ref={beforeImageRef}
                        src={beforeImage}
                        alt="Before"
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                </div>
            </div>
            <div
                className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize"
                style={{
                    left: `${sliderPosition}%`,
                    display: imagesLoaded ? "block" : "none",
                }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                role="slider"
                aria-valuenow={sliderPosition}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Comparison slider"
                tabIndex={0}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-secondary rounded-full shadow-md flex items-center justify-center">
                    <ChevronLeftIcon className="w-4 h-4 text-secondary-content" />
                    <ChevronRightIcon className="w-4 h-4 text-secondary-content" />
                </div>
            </div>
            {imagesLoaded && (
                <>
                    <div className="absolute top-4 left-4 bg-secondary text-secondary-content px-2 py-1 rounded">
                        {beforeLabel}
                    </div>
                    <div className="absolute top-4 right-4 bg-secondary text-secondary-content px-2 py-1 rounded">
                        {afterLabel}
                    </div>
                </>
            )}
        </div>
    )
}
