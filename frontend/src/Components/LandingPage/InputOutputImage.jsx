import { MoveRight } from "lucide-react"

import HandDrawnArrow from "@/Components/UI/HandDrawnArrow"
import { img1 as outputImage } from "@/assets/images"
import { img1, img2, img3, img4 } from "@/assets/input-images"

function InputOutputImage() {
    return (
        <div className="flex flex-col items-center justify-start bg-primary h-fit pt-20">
            <div className="flex flex-row items-center justify-center gap-4 mb-20">
                <h1 className="text-4xl font-bold text-primary-content">
                    Upload Your Images
                </h1>
                <MoveRight
                    size={48}
                    strokeWidth={2.25}
                    className="text-primary-content"
                />
                <h1 className="text-4xl font-bold text-primary-content">
                    Write Your Prompt
                </h1>
                <MoveRight
                    size={48}
                    strokeWidth={2.25}
                    className="text-primary-content"
                />
                <h1 className="text-4xl font-bold text-primary-content">
                    Get AI Generated Images
                </h1>
            </div>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16 relative pb-20">
                <div className="w-1/2 ">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl overflow-hidden aspect-square">
                            <img
                                src={img1}
                                alt="Casual selfie"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="rounded-2xl overflow-hidden aspect-square">
                            <img
                                src={img2}
                                alt="Restaurant"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="rounded-2xl overflow-hidden aspect-square">
                            <img
                                src={img3}
                                alt="Street"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="rounded-2xl overflow-hidden aspect-square">
                            <img
                                src={img4}
                                alt="Birthday celebration"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="rotate-[40deg]">
                    <HandDrawnArrow />
                </div>
                <div className="w-full md:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden aspect-auto">
                        <img
                            src={outputImage}
                            alt="AI generated professional"
                            className="w-full object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-success text-xs text-white px-2 py-1 rounded">
                            AI GENERATED PHOTO
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputOutputImage