import PromptForm from "./PromptForm";
import ImageGrid from "./images";
import {useState} from "react";
function ImageGenerateSection({trainingState})
{
    
   
   
    const [generationStatus, setGenerationStatus] = useState({
        status:"idle",
        message: ""
    })
    const [generatedImageUrls, setGeneratedImageUrls] = useState([]);
   

    return(
        <section className="h-max sm:h-[85dvh] w-[66dvw] ml-[32dvw] mt-[12dvh] p-2 flex flex-col sm:flex-row justify-between gap-4 bg-gray-100 rounded-xl" trainingState={trainingState}>
            <PromptForm trainingState={trainingState} generationStatusStatus={generationStatus} setGenerationStatus={setGenerationStatus} setGeneratedImageUrls={setGeneratedImageUrls}/>
            <ImageGrid imageUrls={generatedImageUrls} generationStatus={generationStatus}/>
        </section>
    )
}
export default ImageGenerateSection;