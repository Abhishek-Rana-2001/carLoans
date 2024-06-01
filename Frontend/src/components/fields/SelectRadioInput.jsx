import React, { useRef, useState } from "react";

const SelectRadioInput = ({ children, value, onChange, fieldName, selectedField }) => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleChange = (e) => {
    onChange(e.target.name, e.target.value)
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={` md:w-11/12 w-full flex justify-center p-2 text-lg items-center shadow-md hover:cursor-pointer ${selectedField === value ? "bg-purple-500 text-white" : ""} hover:border-purple-500 border border-slate-300 rounded-lg`} 
      >
        <label className="hover:cursor-pointer text-sm">{children}</label>
      </div>
      <input
        name={fieldName}
        ref={inputRef}
        onChange={handleChange}
        type="radio"
        value={value}
        checked={value === selectedField}
        className="hidden "
      ></input>
    </>
  );
};

export default SelectRadioInput;
