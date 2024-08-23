import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoClose, IoMenu } from "react-icons/io5";
import { easeInOut, motion } from "framer-motion";
import { useClickOutside } from "../../hooks/useClickOutside";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768 ? true : false);
  const toggle = () => setIsOpen(!isOpen);
  const location = useLocation()
  const [windowDimensions, setWindowDimensions] = useState({
    width:window.innerWidth,
    height:window.innerHeight
  })


  useEffect(()=>{
    const handleResize =  ()=>{
      setWindowDimensions({width : window.innerWidth , height : window.innerHeight})
      if(window.innerWidth >= 768){
        setIsOpen(true)
      }else{
        setIsOpen(false)
      }
    }

    window.addEventListener("resize",handleResize)

    return ()=>{
      window.removeEventListener("resize", handleResize)
    }
  },[])
  
  const links = [
    {
      title: "Home",
      path: "/",
      },
      {
        title: "About",
        path: "/about",
        },
        {
          title: "Contact",
          path: "/contact",
          },
          ];

  return (
    <nav className="absolute top-0 p-4 px-6 flex z-10 justify-between w-full md:items-center  md:flex-row flex-col">
      <div className="text-2xl">Logo Here</div>
      <button className="md:hidden absolute right-5 top-4 rounded-full p-2 bg-neutral-200 z-20 hover:cursor-pointer focus-within:outline-1" onClick={toggle}>
          {
            isOpen ? <IoClose size={25} /> : <IoMenu size={25} />
          }
      </button>
        <motion.ul initial={{scale:0, opacity:0}} animate={{scale : windowDimensions.width > 768 ? 1 : isOpen ? 1 : 0 , opacity:windowDimensions.width > 768 ? 1 : isOpen ? 1 : 0, transition :{duration : 0.3 , ease:easeInOut }}} className="flex gap-5 md:flex-row flex-col origin-top-right  bg-neutral-300 md:bg-inherit p-2 rounded-lg mt-10 md:mt-0">
          {
            links.map((link, index)=>{
              return <li key={index} className={`text-center p-2 ${location.pathname === link.path ? "underline underline-offset-4" : ""}`}><NavLink to={link.path}>{link.title}</NavLink></li>
            })
          }
        </motion.ul>
    </nav>
  );
};

export default Navbar;
