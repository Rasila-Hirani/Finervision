import React, { useState } from 'react'
import {FormContextType} from '../Form/typeFormState';
import  {validateForm} from '../../utils';
import {useFormContext} from '../Form/formContext';
import  Button  from "../Button/Button";
import NumberInput from '../InputControl/InputControlNumber';
import {InputLabel,InputGrid,InputSelect,FormError,DataGrid} from '../InputControl/inputControlStyles';
interface IProps {
    nextStep:(event?:React.MouseEvent<HTMLButtonElement>)=>void;
}

export function UserDetail2(props:IProps){
    const {  formState ,handleChange  } = useFormContext() as FormContextType;
    const {nextStep } = props;
    const [error, setError] = useState('');
  
    const handleFormSubmit =() =>{
        const res = validateForm(formState,2)
        setError(res)
        if(res === '')
            nextStep()
       
    }
    return(
            <form >
                <InputGrid>  
                    <NumberInput value={formState.telephone} name="telephone" label="Telephone number"
                         onChange={(name,event) => handleChange('telephone',event.target.value)}
                        type="number" />
                  
                    <div>
                        <InputLabel htmlFor="gender">Gender</InputLabel>
                    <InputSelect id="gender" onChange={(event) => handleChange('gender',event.target.value)} 
                        name="gender"  value={formState.gender}>
                            <option defaultValue="0">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="notSpecified">Not Specified</option>
                        </InputSelect>
                    </div> 
            </InputGrid>
             <InputGrid>
                 <div>
                    <InputLabel htmlFor="date">Date of birth</InputLabel>
                   
                     <DataGrid>
                            <NumberInput  value={formState.date} name="date" label=""
                                onChange={(name,event) => handleChange('date',event.target.value)}
                                type="number" dateBox/>
                        <NumberInput  value={formState.month} name="month" label=""
                                onChange={(name,event) => handleChange('month',event.target.value)}
                                type="number" dateBox/>
                        <NumberInput  value={formState.year} name="year" label=""
                                onChange={(name,event) => handleChange('year',event.target.value)}
                                type="number" dateBox/>     
                    </DataGrid>
                 </div>
                </InputGrid>
             <Button type="button" onClick={handleFormSubmit} name="step2">Next</Button> 
             {error && <FormError>{error}</FormError>} 
            </form>
      
    )
}