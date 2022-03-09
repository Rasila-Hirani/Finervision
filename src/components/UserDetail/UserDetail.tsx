import React, { useState } from 'react'
import {FormContextType} from '../Form/typeFormState';
import  {validateForm} from '../../utils';
import {useFormContext} from '../Form/formContext';
import  Button  from "../Button/Button";
import TextInput from '../InputControl/InputControlText';
import {InputGrid,FormError} from '../InputControl/inputControlStyles';
interface IProps {
    nextStep:(event?:React.MouseEvent<HTMLButtonElement>)=>void;
}


export function UserDetail(props:IProps){

    const {  formState ,handleChange  } = useFormContext() as FormContextType;
    const {nextStep } = props;
     const [error, setError] = useState('');
     const {firstname,surname,email}= formState;
     const handleFormSubmit =() =>{
       const res=validateForm(formState,1)
        setError(res)
        if(res === '')
            nextStep();
     }
    return(
            <form>
                
               <InputGrid>
               <TextInput  value={firstname} name="firstname" label="First Name"
                         onChange={(name,event) => handleChange('firstname',event.target.value)}
                        type="text" required/>
                <TextInput  value={surname} name="surname" label="Surname"
                         onChange={(name,event) => handleChange('surname',event.target.value)}
                        type="text" required/>
              
            </InputGrid> 
            <InputGrid>   
             <TextInput  value={email} name="email" label="Email Address"
                         onChange={(name,event) => handleChange('email',event.target.value)}
                        type="email" required/>
             
             </InputGrid> 
             
             <Button type="button" onClick={handleFormSubmit} name="step1">Next</Button>
             {error && <FormError>{error}</FormError>}
             
            </form>
       
    )
}