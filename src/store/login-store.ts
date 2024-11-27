import { create } from "zustand";

export interface userProps {
    fullname: string;
    email: string;
    phone: string;
    cep: string;
    neighborhood: string;
    street: string;
    number: string;
    complement?: string | undefined | null;
    password: string;
}

interface loginState {
    users: userProps[];
    addUser: (userData: userProps) => void;
    checkUser: (email: string, password: string) => boolean;
}

export const userLogin = create<loginState>((set) => ({
    users: JSON.parse(localStorage.getItem('users') || '[]'),
    
    addUser: (userData) => set((state) => {
        const updatedUser = [...state.users, userData];
        localStorage.setItem('users', JSON.stringify(updatedUser));
        return { users: updatedUser };
    }),
    
    checkUser: (email, password) => {
        const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
        return storedUsers.some(
            (user: userProps) => user.email === email && user.password === password
        );
    },
}));