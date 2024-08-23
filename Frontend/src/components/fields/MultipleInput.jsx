import React from "react";

const MultipleInput = ({ fields, formData, setFormData }) => {

    const onChange = (e)=>{
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    return (
        <>
      {fields.map((field, index) => {
          return (
              <div key={index} className="flex gap-1 border items-center rounded-md p-1">
          {field.icon && field.icon}
          <input
            type={field.type}
            name={field.fieldName}
            value={formData[field.fieldName]}
            onChange={onChange}
            placeholder={field.placeholder}
            className="p-1 bg-white outline-none text-center"
            />
            </div>
        );
      })}
    </>
  );
};

export default MultipleInput;
