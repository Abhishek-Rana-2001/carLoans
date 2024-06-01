import { createContext, useState } from "react";

const FormContext = createContext({})

export const FormProvider = ({children})=>{

    const [step, setStep] = useState(0)

    const [formData, setFormData] = useState({
        vehicleType : "",
        cartype:"",
        budget:"",
        emp:"",
        income:"",
        rentownhome:"",
        dob:new Date(),
        fname:"",
        lname:"",
        credit:"",
        vehicle:"",
        phone:"",
        email:"",
        locality:"",
        postal_code:"",
    })

    return <FormContext.Provider value={{step, setStep, formData, setFormData}}>
        {children}
    </FormContext.Provider>
} 

export default FormContext