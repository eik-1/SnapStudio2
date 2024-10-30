import {useState} from "react"
import ModelTrainForm from "../Components/ModelTrainForm"
import ImageGenerateSection from "@/Components/ImageGenerateSection";

function Home() {
    const [trainingState, setTrainingState] = useState("loading"); 
    return (
        <div className="h-max w-max flex relative">
            <div className="fixed h-[90dvh] w-[30dvw] top-[10dvh] left-0">
                <ModelTrainForm  trainingState={trainingState} 
                setTrainingState={setTrainingState}
                />
            </div>
            <main className="h-max w-max">
               <ImageGenerateSection trainingState={trainingState}/>
            </main>
        </div>
    )
}
export default Home
