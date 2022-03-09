import React from 'react'
import {CustomButton} from './buttonStyles';

interface IButtonPropList {
  type: 'button' | 'submit' | 'reset'
  name:string;
  children: string | JSX.Element;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
 
}

export const Button = (props: IButtonPropList): JSX.Element => {
  const { children, type, onClick,name } = props;
  return (
    <CustomButton type={type} onClick={event => onClick && onClick(event)} name={name}>
      {children}
    </CustomButton>
   
  )
}


export default Button;