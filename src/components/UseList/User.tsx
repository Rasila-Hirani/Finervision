import React ,{FC} from 'react';
import { IFormState } from '../Form/typeFormState';
import {UserRow,ListEle} from './userListStyle';



function User({ data }:{  data: IFormState ;}){
const {firstname,surname,email,telephone,gender,date,month,year,comment}=data;

    return(
       
        
        <UserRow>
            <ListEle>{`${firstname} ${surname}`}</ListEle>
            <ListEle>{email}</ListEle>
            <ListEle>{telephone}</ListEle>
            <ListEle>{gender}</ListEle>
            <ListEle>{date}/{month}/{year}</ListEle>
            <ListEle>{comment}</ListEle>
        </UserRow>
        
    );
}
export default User;