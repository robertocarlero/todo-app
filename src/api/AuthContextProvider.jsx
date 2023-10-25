import { createContext, useState } from "react";

export const authContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [userState, setUserState] = useState('deslogeado');

    const login = () => {
        setUserState('logeado');
    }

    const value = {
        state: userState, 
        login
    };

    return <authContext.Provider value={value}>{children}</authContext.Provider>
};