import React from 'react'
import {render, fireEvent,screen,waitFor} from '@testing-library/react';

import "@testing-library/jest-dom";
import user from '@testing-library/user-event';
import { UserDetail } from '../components/UserDetail/UserDetail';
import FormContextProvider,{FormContext} from '../components/Form/formContext';
import {IFormState,formDefaultValues} from '../components/Form/typeFormState';



describe('<UserDetail />', () => {
    let result =[];
   
    const inputData ={
        firstname:'abc',
        surname:'smith',
        email:'email@google.com'

    }
    const data = {
        formState: formDefaultValues,
        handleChange: jest.fn(),
        resetForm:jest.fn()
      };

        render(
          <FormContext.Provider value={data}>
            <UserDetail nextStep={()=>{}}/>
          </FormContext.Provider>
        );
        const handleFormSubmit = jest.fn();
    it('All fields are required',async()=>{
        user.type(getFirsname(),inputData.firstname);
        user.type(getSurname(),inputData.surname);
        user.type(getEmail(),inputData.email);
        clickNextButton();
        expect(handleFormSubmit).toHaveBeenCalledTimes(1)
        expect(handleFormSubmit).toHaveBeenCalledWith(inputData)

        
    })
})
function getFirsname(){
    return screen.getByRole('textbox', { name: /First Name/i });
 }
 function getSurname(){
    return screen.getByRole('textbox', { name: /Surname/i });
 }
 function getEmail(){
    return screen.getByRole('textbox', { name: /Email Address/i });
 }
 function clickNextButton() {
    fireEvent.click(screen.getByRole('button', { name: /Next/i }));
  }