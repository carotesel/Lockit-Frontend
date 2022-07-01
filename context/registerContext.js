import react, { useState } from 'react';
import { createContext } from 'react';

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {

    const [hola, setHola] = useState('hoihdsahsadihoisadola')
    
    // fuincion  -> objeto que se va a subir al back 


    return (
        <RegisterContext.Provider value={{hola, setHola}}>
            {children}
        </RegisterContext.Provider>
    )
}


