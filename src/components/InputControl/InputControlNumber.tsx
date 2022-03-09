import { ChangeEvent } from 'react'
import{InputWrapper,InputNumber,InputLabel} from './inputControlStyles';

export interface InputProps  {
    type?: 'number' ;
  value?: number;
  name: string;
  label?: string;
  dateBox?:boolean;
  required?: boolean;
  onChange?: (
    name: string,
    event: ChangeEvent<HTMLInputElement>
) => void;
  
}


  const NumberInput = (props:  InputProps): JSX.Element => {
   const {dateBox,required,value,onChange,label,type,name} = props;

  return (
    <InputWrapper>
      <InputLabel htmlFor={name}>{label}</InputLabel>
     
      <InputNumber
       width={dateBox ?'80px':'100%'}
      name={name}
      type={type}
      onChange={event => onChange && onChange(name, event)}
      value={value || ''}
      autoFocus={true}
      required={required}
      />
    
    </InputWrapper>
  )
}
export default NumberInput;

