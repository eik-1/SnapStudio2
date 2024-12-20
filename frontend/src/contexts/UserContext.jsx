import { client } from "@/configs/ClientConfig"
import { Account } from "appwrite"
import { createContext, useContext, useEffect, useMemo, useState } from "react"

const UserContext = createContext()

function UserProvider({ children }) {
    const [user, setUser] = useState(
        localStorage.getItem("userData")
            ? JSON.parse(localStorage.getItem("userData"))
            : null,
    )
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const account = useMemo(() => new Account(client), [])

    /* useEffect(() => {
        async function fetchUser() {
            try {
                const response = await account.get()
                console.log("response from get user", response)
                setUser(response)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchUser()
    },[account])*/

    async function login(email, password) {
        try {
            setLoading(true)
            await account.createEmailPasswordSession(email, password)
            const response = await account.get()
            const userData = {
                email: response.email,
                name: response.name,
                $id: response.$id,
            }
            localStorage.setItem("userData", JSON.stringify(userData))
            console.log("response from login after account get", response)
            setUser(userData)
            return response
        } catch (err) {
            setError(err)
            throw err
        } finally {
            setLoading(false)
        }
    }

    async function logout() {
        try {
            localStorage.removeItem("userData")
            await account.deleteSessions()
            setUser(null)
        } catch (err) {
            setError(err)
            throw err
        }
    }

    return (
        <UserContext.Provider
            value={{ user, loading, error, login, logout, setLoading }}
        >
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
