import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const fadeInVariantsLeft = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

const fadeInVariantsRight = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

const Home = () => {

    const navigate = useNavigate()

  return (
    <div className="flex sm:flex-row flex-col justify-center items-center gap-10 min-h-screen mx-auto md:p-40 p-3">
      <section
        className="md:w-2/4 min-h-full flex flex-col md:gap-10  gap-5 justify-center items-center"
      > 
      <motion.div variants={fadeInVariantsRight}
        initial="initial"
        animate={"animate"}
        className="flex flex-col gap-4"
        transition={{ duration: 0.8, delay: 0.2 }}>
        <h1 className="md:text-5xl font-semibold text-center w-3/4 mx-auto">
          Pre-Qualify for a Car Within Your Budget
        </h1>
        <p className="text-lg text-center">No Obligations, Contactless, FREE TO APPLY</p>
      </motion.div>
        <div>
          <motion.button onClick={()=>navigate("/application")} initial={{y:50, opacity:0}} animate={{y:0, opacity:1}} transition={{duration : 0.8, delay:0.2}} className="py-2 px-10 rounded-md hover:bg-red-600 bg-purple-500 text-white">
            Get Approved Today
          </motion.button>
        </div>
      </section>

      <motion.section
        variants={fadeInVariantsLeft}
        initial="initial"
        animate={"animate"}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="md:w-2/4 w-full min-h-full   flex justify-center items-center"
      >
        <img src="/LandingCar.png"></img>
      </motion.section>
    </div>
  );
};

export default Home;
