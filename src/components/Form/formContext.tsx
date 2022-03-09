import React,{ useState,createContext } from 'react';

import {FormContextType,IFormState,formDefaultValues} from './typeFormState';

export const FormContext = createContext<FormContextType | null>(null);

const FormContextProvider : React.FC<React.ReactNode> =({ children }) => {
    const [formState,setFormState] = useState<IFormState>(formDefaultValues);
    const handleChange = (fieldName: string,value: string ) => {
        setFormState((prevState) =>({
          ...prevState,
          [fieldName]: value
        }));
      }
      const resetForm =()=>{
        setFormState({...formDefaultValues});
      }
      return <FormContext.Provider value={{ formState, handleChange, resetForm }}>{children}</FormContext.Provider>;
}
export default FormContextProvider

export const useFormContext = () =>React.useContext(FormContext);