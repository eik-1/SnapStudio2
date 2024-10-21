import { useState } from 'react';
import NumberInput from './NumberInput';
import {Button} from './UI/Button';
import Pen from './PenIcon';
import TextStarIcon from './TextStarIcon';
export default function PromptForm() {
  const [promptData, setPromptData] = useState({ prompt: "", images: 1 });

  return (
    <div className="w-2/5 ml-4 h-max font-sans">
      <div className='w-max h-max flex justify-between items-center  mt-4 gap-2'>
        <Pen/>
        <h1 className="font-sans text-xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          Describe how you want to be seen.
        </h1>
      </div>
      
      <div className="mt-4 w-full">
        <form className="space-y-4" onSubmit={(e)=>{e.preventDefault()}}>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <textarea 
              id="promptInput"
              placeholder="Enter your prompt"
              className="w-full h-24 px-2 text-sm focus:outline-none resize-none placeholder:text-xs"
            />
            <div className='h-max w-max flex items-center justify-center gap-2 '>
                  <TextStarIcon/>
                  <button 
                    type="button"
                    onClick={() => {}} 
                    className="text-[0.675rem] text-gray-400"
                  >
                    Enhance Prompt
                  </button>
            </div>
           
          </div>
          <div className='flex justify-between h-max w-full mt-2 gap-4 '>
            <div> 
                <label htmlFor="imagesInput" className="block  text-xs font-medium text-gray-700 font-sans">
                  Number of Output Images
                </label>
                <p className='text-[0.675rem] text-gray-500 mb-2'>{"(minimum: 1, maximum: 5)"}</p>
            </div>
         
            <NumberInput
              min={1}
              max={5}
              step={1}
              initialValue={1}
              onChange={(value) => setPromptData({...promptData, images: value})}
            />
          </div>
        </form>
        <div className='w-full h-max flex justify-center mt-8'>
                <Button className="w-4/5 bg-gradient-to-r from-[#ee0979] via-[#ff6a00] to-[#ee0979] ">Generate ✨</Button>
        </div>
        
      </div>
    </div>
  );
}