import React, { useEffect, useState } from 'react'
import { Calendar } from 'react-date-range'
import { format } from 'date-fns'

import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import { IoCalendarNumberOutline } from "react-icons/io5";


const DateField = ({date, setDate, fieldName}) => {

    const [open, setOpen]= useState(false)

    useEffect(()=>{
      if(date){
        setDate(fieldName ,format(date, "yyyy/MM/dd"))
      }
    },[])

    const onChange = (value)=>{
        setDate(fieldName ,format(value, "yyyy/MM/dd"))
        setOpen(false)
    }


  return (
    <div className='relative w-full'>
    <div className='flex gap-1 items-center w-full border border-slate-400 pr-2 rounded-md'>
        <input  value={date} readOnly className='p-2 w-full rounded-md bg-white ' onClick={()=>setOpen(!open)} placeholder='yyyy/mm/dd' />
      <IoCalendarNumberOutline size={20} onClick={()=>setOpen(!open)} />
        </div>
      {open &&  
        <div className='absolute top-10 shadow-lg z-20' onClick={e=>e.stopPropagation()}>
        <Calendar onChange={onChange} maxDate={new Date()} className='z-50'/> 
        </div>
        }
    </div>
  )
}

export default DateField