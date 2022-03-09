import {IFormState} from './components/Form/typeFormState';
export const validateString = (value: string): boolean =>
	/[0-9a-zA-Z]{2,}/i.test(`${value}`);

 const validateEmail = (value: string): boolean =>
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		`${value}`
	);
 const validatePhone =(value:number|undefined):boolean =>{
const stringPhone =/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
return stringPhone.test(`${value}`);
}		

 let dateValidation =(dd:number,mm:number,yy:number):string =>{

	if (dd > 31 || dd < 1) {
		return 'Wrong date';
	}else if ((mm===4 || mm===6 || mm===9 || mm===11) && dd ===31) {
		return 'Wrong date';
	}else if (mm===2) {
		let isleap = (yy % 4 === 0 && (yy % 100 !== 0 || yy % 400 === 0));
		if (dd> 29 || (dd ===29 && !isleap))
		return 'Wrong date';
	}
	if (mm > 12 || mm < 1) {
		return 'Wrong month';
	  } 
	  if (yy > new Date().getFullYear() || yy < 1900) {
		return 'Wrong year';
	  }
	 
	  return '';
}

export const validateForm =(formState:IFormState,step:number):string=>{
	const {firstname,surname,email,telephone,gender,date,month,year}= formState;
	const form1 =():string=>{
		const invalidFname = !validateString(firstname);
        const invalidSurname=!validateString(surname);
        const invalidEmail = !validateEmail(email);
		if(firstname === "" || surname === "" || email === ""){
			return 'All fields are required.'
            
        }else {
            if(invalidEmail)
                 return 'Email is not valid.'
            else if(invalidFname || invalidSurname)
               return 'This entry seems not valid...'
            else{
               return ''
            }
        }
	}
	const form2 =():string =>{
		const validPhone = !validatePhone(telephone);
        let bDate = dateValidation(date as number,month as number,year as number);
		if(telephone === undefined || gender === '0' || date ===undefined || month ===undefined || year ===undefined){
            return 'All fields are required.'
        }
        else{
            if(validPhone)
                 return 'Telephone number is not valid.'
            else if(bDate !== '')
                return bDate
			else{
					return ''
				 }
        }
	}
	if(step === 1){
		return form1()
	}
	else if(step === 2){
		return form2();
	}
	else{
		const form1_error = form1();
		const form2_error = form2();
		if(form1_error !== '')
			return form1_error
		else if(form2_error !== ''){
			return form2_error;}
		else 
			return ''

	}
}