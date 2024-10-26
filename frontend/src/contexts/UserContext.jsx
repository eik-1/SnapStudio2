import { useState, createContext, useEffect, useContext, useMemo } from "react"
import { Account } from "appwrite"
import {client} from "@/configs/ClientConfig"


const UserContext = createContext()

function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    

    const account = useMemo(()=>new Account(client),[])

    useEffect(() => {
        async function fetchUser() {
            try {
                const response = await account.get()
                setUser(response)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchUser()
    }, [account])

    async function login(email, password) {
        try {
            const response = await account.createEmailPasswordSession(
                email,
                password,
            )
            setUser(response)
            return response
        } catch (err) {
            setError(err)
            throw err
        }
    }

    async function logout() {
        try {
            await account.deleteSession("current")
            setUser(null)
        } catch (err) {
            setError(err)
            throw err
        }
    }

    return (
        <UserContext.Provider value={{ user, loading, error, login, logout }}>
            {children}
        </UserContext.Provider>
    )
}

function useUser() {
    const context = useContext(UserContext)
    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider")
    }
    return context
}

export { UserProvider, useUser }
