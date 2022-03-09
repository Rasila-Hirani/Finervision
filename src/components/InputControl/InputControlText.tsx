import React, { ChangeEvent} from 'react'
import {InputWrapper,InputLabel,Input,InputTextArea} from './inputControlStyles';

export interface InputProps  {
  type?: 'text' | 'email' |'select';
  value: string 
  name: string;
  label?: string;
  multiline?: boolean
  required?: boolean;
  onChange?: (
    name: string,
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => void;
  
}


  const TextInput = (props:  InputProps): JSX.Element => {
   const {required,value,onChange,label,type,name,multiline} = props;

  return (
    <InputWrapper>
      <InputLabel htmlFor={name}>{label}</InputLabel>
     
      {
    multiline ?
      <InputTextArea  onChange={event => onChange && onChange(name, event)}
      id={name}
      name={name}
      value={value || ''}
      autoFocus={true}
      >{value}
      </InputTextArea> 
      :
      <Input
      id={name}
      name={name}
      type={type}
      onChange={event => onChange && onChange(name, event)}
      value={value || ''}
      autoFocus={true}
      required={required}
      />
      }
    </InputWrapper>
  )
}
export default TextInput

