/* eslint-disable react-refresh/only-export-components */
 
import React, { createContext, useContext, useEffect, useState } from 'react';

// Cria o contexto para o usuário
const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export function UserProvider({ children }) {
    
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Recupera o usuário do localStorage, se existirem dados salvos
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setIsLoading(false);
    }, []);

    const loginUser = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logoutUser = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <UserContext.Provider value={{ user, loginUser, logoutUser, isLoading }}>
            {children}
        </UserContext.Provider>
    );
}
