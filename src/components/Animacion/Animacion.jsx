import './Animacion.css';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';
import ovNi from '';
import letras from '';
import leaf from '';

const Animacion = () => {

  const [isVisible, setIsVisible] = useState(true);


  return (
    <div className='motion-container'>
      <motion.img 
        initial={{opacity:0}} 
        animate={{opacity:1}} 
        transition={{delay: 6, duration: 3}}
        src="../public/Letras.svg" alt="nombre" className='nombre'
      />

      <motion.img
        animate={{y: [-400,50], x: [100,220], scale: 1}} 
        transition={{type:"spring",delay: 3, duration: 3, times: [0.1,.1, 0.4, 1]}}
        src="../public/Ovni.svg"  alt="Ovni" className='logo'
      />
      <AnimatePresence>
        {isVisible && (   
          <motion.img initial={{opacity:1}} 
          animate={{x: [-100,200], opacity:1}} 
          transition={{delay: 1,duration: 2,velocity: 1}}
          exit={{opacity:0, y:-500, duration:1}}
          onClick={()=>setIsVisible(!isVisible)}
          src="../public/leaf.svg" alt="hoja" className='hoja' />
        )}
      {!isVisible && (
      <motion.p 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:1}}
      className='coming'
      >Coming soon..</motion.p>
      )}
      </AnimatePresence>

    </div>
  )
}

export default Animacion