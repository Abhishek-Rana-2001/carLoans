import React from 'react'
import { IoPersonSharp } from 'react-icons/io5'
import { FaBuilding } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { BiDollar } from "react-icons/bi";

const iconExporter = (fieldName) => {
 const icons =  {
        jobtitle:<IoPersonSharp size={15}/>,
        companyname:<FaBuilding size={15}/>,
        address:<FaLocationDot size={15}/>,
        addresslength:<SlCalender size={15}/>,
        addresslength_months:<SlCalender size={15}/>,
        home_monthly:<BiDollar size={15} />
    }
  return (
    <>
    {
        icons[fieldName] || null
    }
    </>
  )
}

export default iconExporter
