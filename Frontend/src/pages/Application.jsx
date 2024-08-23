import {easeOut, motion } from "framer-motion";
import ApplicationForm from "../components/forms/ApplicationForm";

const Application = () => {

  return (
    <div className="flex justify-center sm:w-[700px] w-full sm:p-0 p-6 mx-auto h-screen">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: easeOut }}
        className="p-10 md:mt-40 mt-20 rounded-md h-max shadow-2xl w-full"
      >
       <ApplicationForm/>
      </motion.div>
    </div>
  );
};

export default Application;
