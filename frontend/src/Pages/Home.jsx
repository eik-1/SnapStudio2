import ModelTrainForm from "../Components/ModelTrainForm"
import PromptForm from "../Components/PromptForm";
function Home(){

    return (
        <div className="h-max w-max flex relative">
             <div className="fixed h-[90dvh] w-[30dvw] top-[10dvh] left-0">
                 <ModelTrainForm />
            </div>
            <main className="h-[80dvh] w-[66dvw] ml-[32dvw] mt-[12dvh]  bg-gray-100 rounded-xl">
                     <PromptForm />
            </main>
            
        </div>
    )
}
export default Home;