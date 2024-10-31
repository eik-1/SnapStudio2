import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { useUser } from '@/contexts/UserContext';
import GridPattern from '@/Components/UI/grid-pattern';
import Marquee from '@/Components/UI/marquee';
import Login from '../Components/Login';
import image1 from '@/assets/images/img1.webp';
import image2 from '@/assets/images/img2.png';
import image3 from '@/assets/images/img3.png';
import image4 from '@/assets/images/img4.webp';
import image5 from '@/assets/images/img5.webp';
import image6 from '@/assets/images/img6.webp';
import image7 from '@/assets/images/img7.webp';


const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const imageGrid = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7
];

function LandingPage(){
 
  
  const navigate = useNavigate();
  const {user} =useUser();

  useEffect(() => {
    if(user)
    {
      navigate("/home");
    }
    
  },);



  
  
  
  return (
    <div className="flex  min-h-screen bg-white font-sans">
      <GridPattern className={'min-h-screen w-1/2 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]'}/>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-1/2  flex flex-col  items-center bg-gradient-to-br from-sky-50  to-white"
      >
        <motion.div 
          className="w-full gap-12 mt-[5rem] flex flex-col items-center"
          initial="initial"
          animate="animate"
        >
          <motion.h1 
            className="text-4xl px-12 font-bold text-center bg-gradient-to-r from-blue-600  via-pink-600  to-purple-600 bg-clip-text text-transparent"
            variants={fadeIn}
          >
            Bring Your Characters to Life with a Few Simple Words.
          </motion.h1>

          <motion.p 
            className="text-center text-gray-600 px-12 font-medium"
            variants={fadeIn}
          >
           Get custom images of you, any way you envision. With just a few photos of yourself and a simple prompt, you can create stunning, customized images that bring your ideas to life..
          </motion.p>

          <motion.div 
            className="relative bg-transparent rounded-sm w-full mt-10"
            variants={fadeIn}
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 z-30 bg-gradient-to-r from-[#ffffffa0] "></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 z-30 bg-gradient-to-l from-[#ffffffa0] "></div>
            <Marquee
            pauseOnHover
            >


            
            {imageGrid.map((img, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="h-[200px] w-[200px] rounded-xl bg-transparent overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img 
                  src={img} 
                  alt={`Character ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
          ))}
          </Marquee>
            
          </motion.div>
        </motion.div>
      </motion.div>

      <Login />
     
    </div>
  );
};

export default LandingPage;