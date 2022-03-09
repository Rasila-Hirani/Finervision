
import { render, screen, waitFor } from '@testing-library/react';
import UserList from '../components/UseList/UserList';
const axios = require('axios');
const Users = require('./users');

jest.mock('axios')
const users = [{
    "id": 1,
    "first_name": "Robert",
    "surname": "Schwartz",
    "email": "rob23@gmail.com"
}, {
    "id": 2,
    "first_name": "Lucy",
    "surname": "Ballmer",
    "email": "lucyb56@gmail.com"
}];
test('should fetch users', async() => {

    render (<UserList/>)

    const resp = { data : users };

    axios.get.mockImplementation(() => Promise.resolve(resp));
    const userList = await waitFor(() =>{
        return screen.getByTestId('user-list');
        })
        expect(userList).toBeInTheDocument();
    });
   
    
   // Users.all().then(resp => expect(resp.data).toEqual(users));
