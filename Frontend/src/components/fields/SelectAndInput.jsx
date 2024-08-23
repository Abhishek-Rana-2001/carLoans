import React from "react";
import SelectRadioInput from "./SelectRadioInput";
import MoneyField from "./MoneyField";

const SelectAndInput = ({ fields, formData, onChange, setFormData}) => {
  return (
    <>
      {fields.map((field, index) => {
        if (field.type === "select") {
            return field.options.map((option, index)=>{
             return  <div
                  key={index}
                  className="sm:w-2/5 w-full flex justify-center"
                >
                  <SelectRadioInput
                    value={option.value}
                    fieldName={field.fieldName}
                    onChange={onChange}
                    selectedField={formData[field.fieldName]}
                  >
                    {option.name}
                  </SelectRadioInput>
                </div>
          })
        }
        if (field.type === "text" || "number") {
          return (
            <div key={index} className="flex gap-1 border items-center rounded-md p-1">
            {field.icon && field.icon}
            <input
              type={field.type}
              name={field.fieldName}
              value={formData[field.fieldName]}
              onChange={(e)=>onChange(e.target.name, e.target.value)}
              placeholder={field.placeholder}
              className="p-1 bg-white outline-none text-center"
              />
              </div>
          );
        }

        if(field.type === "money"){
          return <MoneyField value={formData[field.fieldName]} setValue={setFormData} fieldName={field.fieldName} />
        }
      })}
    </>
  );
};

export default SelectAndInput;
