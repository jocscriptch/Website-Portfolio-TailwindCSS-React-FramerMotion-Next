import React from "react";
import {motion} from "framer-motion"

const quote = {
    initial:{
        opacity:1,
    },
    animate:{
        opacity:1,
        transiton:{
            delay:0.08,
            staggerChildren: 0.8,
        }
    }
}

const singelWord = {
    initial:{
        opacity:0,
        y:80,
    },
    animate:{
        opacity:1,
        y:0,
        transiton:{
            duration:1,
        }
    }
}

const AnimateText = ({text, className=""}) => {
    return (
        <div className='w-full mx-auto py-2 flex items-center justify-center text-center
        overflow-hidden sm:py-0'>
            <motion.h1 className={`inline-block w-full text-dark font-bold capitalize text-6xl 
            dark:text-light
            ${className}`}
            variants={quote}
            initial="initial"
            animate="animate"
            >
            {
                text.split(" ").map((word,index) =>
                <motion.span key={word+'-'+index} className="inline-block"
                variants={singelWord}
                >
                    {word}&nbsp;
                </motion.span>
                )
            }
            </motion.h1>
        </div>
    )
}

export default AnimateText