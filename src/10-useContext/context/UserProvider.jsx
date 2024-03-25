
import { useState } from 'react';
import { UserContext } from './UserContext';

// const user ={
//     id:123,
//     name: 'Cristóbal',
//     email: 'cristobal@gmail.com',
// };

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState();

    return (
        // <UserContext.Provider value={{ mundo:'hola',user:user }}>
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
