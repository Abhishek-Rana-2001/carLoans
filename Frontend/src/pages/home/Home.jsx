import React from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Fleet from "../../components/Fleet"
import { useRef } from "react";
import Footer from "../../components/Footer";
import Process from "./Process";

const fadeInVariantsLeft = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

const fadeInVariantsRight = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const fadeInUp = {
  initial: {
    opacity: 0,
    y: 40
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const Home = () => {

    const navigate = useNavigate()

    const trustSection = useRef(null);
    const featuresRef = useRef(null);
    const loanInfoRef = useRef(null);

    const isTrustVisible = useInView(trustSection, { once: true, margin: "-100px" });
    const areFeaturesVisible = useInView(featuresRef, { once: true, margin: "-100px" });
    const isLoanInfoVisible = useInView(loanInfoRef, { once: true, margin: "-100px" });

  return (
    <div>

    {/* Hero section */}
      <div className="flex sm:flex-row flex-col justify-center items-center gap-10 min-h-screen mx-auto md:p-40 p-3">
        <section
          className="md:w-2/4 min-h-full flex flex-col md:gap-10  gap-5 justify-center items-center"
        >
        <motion.div variants={fadeInVariantsRight}
          initial="initial"
          animate={"animate"}
          className="flex flex-col gap-4"
          transition={{ duration: 0.8, delay: 0.2 }}>
          <h1 className="md:text-5xl text-2xl font-semibold text-center w-3/4 mx-auto">
            Pre-Qualify for a Car Within Your Budget
          </h1>
          <p className="text-lg text-center">No Obligations, Contactless, FREE TO APPLY</p>
          {/* <p className="text-lg text-center">Apply for car loans</p> */}
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


{/* Process Section */}

<Process/>



      <motion.section
        ref={trustSection}
        style={{
          opacity: isTrustVisible ? 1 : 0,
          transform: isTrustVisible ? "translateY(0)" : "translateY(50px)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
        className="bg-gray-50 py-16 px-4 md:px-20"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Your Trusted Partner in Car Financing
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="text-lg text-gray-700 space-y-4">
              <p>
                We specialize in helping customers find the perfect car loan solutions that fit their budget and needs. With years of experience in the automotive financing industry, we've helped thousands of customers achieve their dream of car ownership.
              </p>
              <p>
                Our hassle-free application process and network of trusted lenders ensure you get the best possible rates and terms. Whether you have perfect credit or are working to rebuild it, we're here to help you get behind the wheel.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img 
                src="/happy-customer.jpg" 
                alt="Happy customer with their new car" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <motion.div
            ref={featuresRef}
            className="grid md:grid-cols-3 gap-8 mt-12"
          >
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                style={{
                  opacity: areFeaturesVisible ? 1 : 0,
                  transform: areFeaturesVisible ? "translateY(0)" : "translateY(30px)",
                  transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${0.5 + index * 0.1}s`
                }}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <img 
                  src="/easy-process.svg" 
                  alt="Easy application process" 
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-center mb-2">Easy Process</h3>
                <p className="text-gray-600 text-center">Simple online application with quick response times</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        ref={loanInfoRef}
        style={{
          opacity: isLoanInfoVisible ? 1 : 0,
          transform: isLoanInfoVisible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
        className="bg-purple-50 py-12 px-4 md:px-20"
      >
        <motion.div 
          style={{
            opacity: isLoanInfoVisible ? 1 : 0,
            transform: isLoanInfoVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
          }}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto"
          >
            <motion.div 
              variants={fadeInUp}
              className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-purple-100"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-2xl font-semibold text-center mb-6"
              >
                Understanding Your Car Loan Application
              </motion.h2>
              <motion.div 
                variants={fadeInUp}
                className="space-y-4 text-gray-700"
              >
                <p className="text-center mb-6">
                  When you apply with us, you're taking the first step towards securing financing for your dream car.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div 
                    variants={fadeInVariantsLeft}
                    className="space-y-2"
                  >
                    <h3 className="font-semibold text-lg">What to Expect:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Quick pre-qualification process</li>
                      <li>Multiple loan options from various lenders</li>
                      <li>Competitive interest rates</li>
                      <li>Flexible repayment terms</li>
                    </ul>
                  </motion.div>
                  <motion.div 
                    variants={fadeInVariantsRight}
                    className="space-y-2"
                  >
                    <h3 className="font-semibold text-lg">Required Information:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Basic personal information</li>
                      <li>Employment details</li>
                      <li>Income verification</li>
                      <li>Desired loan amount</li>
                    </ul>
                  </motion.div>
                </div>
                <motion.div 
                  variants={fadeInUp}
                  className="mt-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-md"
                >
                  <p className="font-semibold mb-2">Important Notice:</p>
                  <p>
                    By submitting an application, you're requesting to be pre-qualified for an auto loan. This is not a final loan offer and is subject to lender approval. A soft credit check may be performed, which won't affect your credit score.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      <Fleet/>
      <Footer />
    </div>
    
  );
};

export default Home;
