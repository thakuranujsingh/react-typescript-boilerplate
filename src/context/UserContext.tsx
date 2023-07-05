import React, { FC, createContext, useCallback, useContext, useEffect, useState } from "react";
import { IUser } from "../interfaces/User.type";


interface User {
    id?: number;
    name: string;
    username?: string;
    email: string;
    address?: {
        street?: string;
        suite?: string;
        city: string;
        zipcode?: string;
        geo?: {
            lat: string;
            lng: string;
        }
    },
    phone?: string;
    website?: string;
    company?: {
        name: string;
        catchPhrase?: string;
        bs?: string;
    }
}

const apiUri = "https://jsonplaceholder.typicode.com/users";



interface IStore {
    users: User[],
    fetchUsers: () => void
    addNewUser: ({ name, email, city, company }: IUser) => void
}

const ContextProvider = createContext<IStore | null>(null)

export const useUserContext = () => useContext(ContextProvider);

export const Store: FC<{ children: JSX.Element }> = ({ children }) => {
    const [userDate, setUserData] = useState<User[]>([]);

    const fetchUsers = useCallback(async () => {
        const res = await fetch(apiUri);
        const data = await res.json();
        console.log("User", data);
        setUserData(data);
    }, [userDate])

    const addNewUser = (user: IUser) => {
        setUserData([
            ...userDate,
            {
                id: user.id,
                email: user.email,
                name: user.name,
                address: {
                    city: user.city
                },
                company: {
                    name: user.company
                }
            }
        ])
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <ContextProvider.Provider value={{ addNewUser, fetchUsers, users: userDate }} >
            {children}

        </ContextProvider.Provider>
    )
}