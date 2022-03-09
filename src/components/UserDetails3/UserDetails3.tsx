import React, { useState } from 'react'

import {FormContextType} from '../Form/typeFormState';
import {useFormContext} from '../Form/formContext';
import  {validateForm} from '../../utils';
import  Button  from "../Button/Button";
import TextInput from '../InputControl/InputControlText';
import {InputGridFlex,FormError} from '../InputControl/inputControlStyles';
import axios from 'axios';

interface IProps {
    nextStep:(event?:React.MouseEvent<HTMLButtonElement>)=>void;
}

export function UserDetail3(props:IProps){
  const {  formState ,handleChange ,resetForm } = useFormContext() as FormContextType;
  const {nextStep } = props;
    const [error, setError] = useState('');
      // Fetch all users
  const fetchUsers = async () => {
    // Send GET request to 'users/all' endpoint
    axios
      .get('http://localhost:4001/api/all')
      .then(response => {
        // Update the users state
        console.log(response.data)
      })
      .catch(error => console.error(`There was an error retrieving the user list: ${error}`))
  }
 const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault(); 
  if(validateAllForm()){
    axios.post('http://localhost:4001/api/create', {...formState})
    .then(res => {
      console.log(res.data)
      fetchUsers()
        resetForm();
        nextStep();
    })
    .catch(error => console.error(`There was an error creating the user: ${error}`))
  }
 }
 const validateAllForm=(): boolean=>{
   const res= validateForm(formState,3)
  setError(res)
  if(res === '')
     return true
  else
      return false
    
 }

    return(
            <form onSubmit={handleSubmit}>
            <InputGridFlex> 
                <TextInput value={formState.comment} name="comment" label="Comments"
                         onChange={(name,event) => handleChange('comment',event.target.value)}
                        type="text" multiline/>
              </InputGridFlex> 
              <Button type="submit" name="step3">Next</Button> 
              {error && <FormError>{error}</FormError>} 
            </form>
        
    )
}