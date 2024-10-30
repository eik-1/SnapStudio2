import {motion, AnimatePresence} from 'framer-motion';
import {useState} from 'react';
import { Image, AlertTriangleIcon, Download } from 'lucide-react';
import { FadeLoader } from 'react-spinners';
function ImageGrid({ 
  imageUrls,
  generationStatus
}) {
    
    const [selectedId, setSelectedId] = useState(null);
    const [isHovering, setIsHovering] = useState(false);
    let content=null;
    console.log(generationStatus);
    console.log(imageUrls);
    if(generationStatus.status==="idle")
    {
        content=(<>
            <div className="w-full h-[36rem] sm:h-full sm:w-3/6 p-4 bg-transparent  rounded-xl flex flex-col justify-center items-center">
                <Image
                 size={64}
                 color='lightgray'
                />
            </div>
        </>)
    }
    else if(generationStatus.status==="loading")
    {
        content=(<><div className="w-3/6 p-4 bg-gray-50 rounded-xl flex justify-center items-center">
                <FadeLoader
                loading={true}
                height={15}
                width={5}
                radius={10}
                color="#ff4600"

                />
            </div></>)
    }
    else if(generationStatus.status==="generated")
    {
        content=(<>
            <div className="w-full sm:w-3/6 p-4 bg-gray-50 rounded-xl">
            <div className="grid grid-cols-2 gap-4">
              {imageUrls.map((url, index) => (
                <motion.div 
                  key={index}
                  layoutId={`container-${index}`}
                  className="aspect-square relative overflow-hidden rounded-lg shadow-sm bg-white cursor-pointer relative"
                  onClick={() => setSelectedId(index)}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <motion.img
                    layoutId={`image-${index}`}
                    src={url}
                    alt={`Grid image ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  {isHovering &&<a className='block absolute h-max w-max top-1 right-1 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 '
                   href={url}
                   download={"image"+index+".png"}
                   onClick={(e)=>e.stopPropagation()}

                  >
                    <Download color="white" size={16}/>
                  </a>}
                </motion.div>
              ))}
            </div>
          </div>
    
          <AnimatePresence>
            {selectedId !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
                onClick={() => setSelectedId(null)}
              >
                <motion.div
                  layoutId={`container-${selectedId}`}
                  className="relative max-w-2xl  h-5/6 overflow-hidden rounded-lg"
                  onClick={e => e.stopPropagation()}
                >
                  <motion.img
                    layoutId={`image-${selectedId}`}
                    src={imageUrls[selectedId]}
                    alt={`Enlarged view ${selectedId + 1}`}
                    className="w-full h-full object-contain"
                  />
                  <motion.button
                    className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
                    onClick={() => setSelectedId(null)}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </motion.button>
                  <a className='block absolute h-max w-max top-4 right-16 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 '
                   href={imageUrls[selectedId]}
                   download={"image"+selectedId+".png"}
                   onClick={(e)=>e.stopPropagation()}

                  >
                    <Download color="white" size={24}/>
                  </a>
                  

                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        
        </>)
    }
    else
    {
        content= (<>
            <div className="w-3/6 mx-auto p-4 bg-gray-50 rounded-xl flex flex-col gap-4 justify-center items-center font-sans">
                <AlertTriangleIcon
                 size={64}
                 color='red'
                />
                <p className="text-gray-500">{generationStatus.message}</p>
            </div>
            </>)
    }
    return (
        content
          
      );
}

export default ImageGrid;