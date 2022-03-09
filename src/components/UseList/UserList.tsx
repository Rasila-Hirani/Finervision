import React, { FC,useEffect,useState } from 'react';

import User from './User';
import {ListContainer,ListHeader} from './userListStyle'
import axios from 'axios';
import { LinkButton,ButtonMargin } from '../Button/buttonStyles';
const UserList:FC=() => {
    const [userList,setUsers]=useState([]);
    const fetchUsers = async () => {
        // Send GET request to 'users/all' endpoint
        axios
          .get('http://localhost:4001/api/all')
          .then(response => {
            // Update the users state
            console.log(response.data)
            setUsers(response.data)
          })
          .catch(error => console.error(`There was an error retrieving the user list: ${error}`))
      }
      useEffect(() => {
       fetchUsers()
      }, []);
    return (
        <>
        <ButtonMargin><LinkButton to='/'>Go Back</LinkButton></ButtonMargin>
         
        <ListContainer>
            <ListHeader>
                <div>Name</div>
                <div>Email</div>
                <div>Telephone</div>
                <div>Gender</div>
                <div>Date</div>
                <div>Comment</div>
                </ListHeader>
            {
               userList.length === 0?'':
               <>
                {
                    userList.map((user,index)=>{
                     
                        return <User key={index} data={user}/>
                    })
                }
               </>
            }
           
           
           
        </ListContainer>
      
        </>
    )
}
export default UserList;