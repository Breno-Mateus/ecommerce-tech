import { create } from "zustand";

export interface userProps {
    name: string;
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
    currentUser: userProps | null;
    addUser: (userData: userProps) => void;
    checkUser: (email: string, password: string) => boolean;
    loginUser: (email: string, password: string) => void;
    logoutUser: () => void;
}

export const userLogin = create<loginState>((set) => ({
    users: JSON.parse(localStorage.getItem('users') || '[]'),
    
    currentUser: JSON.parse(localStorage.getItem("currentUser") || "null"),

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

    loginUser: (email, password) => set((state) => {
        const user = state.users.find(
            (u) => u.email === email && u.password === password
        );
        if (user) {
            localStorage.setItem("currentUser", JSON.stringify(user));
            return { currentUser: user };
        }
        return { currentUser: null };
    }),

    logoutUser: () => set(() => {
        localStorage.removeItem("currentUser");
        return { currentUser: null };
    }),
}));