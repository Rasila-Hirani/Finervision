
export interface IFormState {
    firstname:string;
    surname:string;
    email:string;
    telephone?:number;
    gender:string;
    date?:number;
    month?:number;
    year?:number;
    comment:string;
}
export const formDefaultValues :IFormState ={
    firstname:'',
    surname:'',
    email:'',
    telephone:undefined,
    gender:'',
    date:undefined,
    month:undefined,
    year:undefined,
    comment:'',
  }
  
export type FormContextType ={
    formState:IFormState;
    handleChange:(fieldName: string,value: string ) =>void;
    resetForm:()=>void;
   
}