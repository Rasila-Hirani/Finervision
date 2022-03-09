import React, { Component } from 'react';
import {MultiStepForm} from './components/Form/FormControl';
import UserList from './components/UseList/UserList';
import {GlobalStyle,Container} from './global';
import {Route, Routes,BrowserRouter } from 'react-router-dom';

export const App:React.FC=()=> {
 
    return (
      <>
      <GlobalStyle/>
      <Container>
     <BrowserRouter>
        <Routes>
          <Route  path="/" element={<MultiStepForm/>} />
          <Route  path="/userlist" element={<UserList />} />
        </Routes>
      </BrowserRouter>
        </Container>
      </>
    );
  
}

