import {motion, useInView} from "framer-motion"
import { useRef } from "react"
import { twMerge } from "tailwind-merge"

const AnimatedHeading = ({children, className, transition, once=true}) => {
   const ref = useRef(null)
    const isInView = useInView(ref, {
        margin : "0px 0px -200px 0px",
        once:once
    })

    const defaultTransition = {
        duration : 0.5,
        ease:"easeInOut"
    }

    const variants = {
        initial: {
            opacity:0,
            y:20,
        },
        animate:{
            opacity:1,
            y:0,
            transition:transition || defaultTransition
        }
    }

  return (
    <motion.h1 ref={ref} variants={variants} initial="initial" animate={isInView ? "animate" : "initial"} className={twMerge("", className)}>
       {children}
    </motion.h1>
  )
}

export default AnimatedHeading
