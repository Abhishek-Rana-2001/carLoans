import React, { useEffect } from 'react'

const MoneyField = ({value, setValue, fieldName}) => {

    useEffect(()=>{
         if(value){
            setValue(fieldName,value)
         }  
    },[])

    const onChange = (e)=>{
        setValue(fieldName, e.target.value)
    }

    return (
    <div className='rounded-md flex w-max border border-slate-400'>
      <div className='p-2 px-4 h-full flex justify-center items-center border-slate-400'>$</div>
      <input type='number' value={value} onChange={onChange} className='p-2 bg-white outline-none rounded-md text-center pr-8'/>
    </div>
  )
}

export default MoneyField

