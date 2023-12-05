import React, { createContext, useContext, useState, useEffect } from "react";
import useAuthOperation from "../stores/AuthStore";

type AuthContextType = {
    user: string | null;
    setUser: React.Dispatch<React.SetStateAction<string | null>>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<string | null>(null); // Initialize user as null initially
    const { setToken } = useAuthOperation();

    // Use useEffect to set the token when the component mounts
    useEffect(() => {
        const cookie = document.cookie.split(';').find((cookie) => cookie.startsWith('Authorization'));
        const token = cookie?.split('=')[1];

        if (token) {
            setUser(token); // Set the user token
            setToken(token); // Assuming setToken updates your auth store
        }
    }, [setToken]);

    const contextValue = { user, setUser };

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
