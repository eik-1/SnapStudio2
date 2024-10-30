import {useState} from "react"
import ModelTrainForm from "../Components/ModelTrainForm"
import ImageGenerateSection from "@/Components/ImageGenerateSection";

function Home() {

    return (
        <div className="h-max w-max flex justify-between gap-3 relative">
            <div className="h-[90dvh] w-[30dvw] mt-[10dvh]">
                <ModelTrainForm  
                />
            </div>
            <main className="h-max w-max">
               <ImageGenerateSection />
            </main>
        </div>
    )
}
export default Home
