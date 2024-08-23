import { createContext, useState } from "react";
import { defaultSchema } from "../static/formDataSchema";

const FormContext = createContext({})

export const FormProvider = ({children})=>{

    const [step, setStep] = useState(0)

    const [formData, setFormData] = useState(defaultSchema)

    return <FormContext.Provider value={{step, setStep, formData, setFormData}}>
        {children}
    </FormContext.Provider>
} 

export default FormContext