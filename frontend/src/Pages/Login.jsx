import React, { useState } from "react"
import { AlertCircle } from "lucide-react"
import { Client, Account } from "appwrite"
import { useNavigate } from "react-router-dom"

import { useUser } from "@/contexts/UserContext"
import { Alert, AlertDescription } from "@/Components/UI/alert"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [errors, setErrors] = useState({})
    const [isSignup, setIsSignup] = useState(false)
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const { user, login } = useUser()
    const navigate = useNavigate()

    /* Appwrite */
    const createUser = async () => {
        const client = new Client()

        const account = new Account(client)
        client
            .setEndpoint("https://cloud.appwrite.io/v1")
            .setProject(import.meta.env.VITE_APPWRITE_PROJECTID)

        try {
            const response = await account.create(
                "unique()",
                email,
                password,
                username,
            )
            console.log(response)
            navigate("/home")
        } catch (error) {
            console.log(error)
            setErrorMessage(error.message || "Failed to create account")
        }
    }

    const loginUser = async () => {
        try {
            await login(email, password)
            navigate("/home")
        } catch (error) {
            console.log(error)
            setErrorMessage(error.message || "Failed to login")
        }
    }

    /* Form Validation */
    const validateForm = () => {
        const newErrors = {}

        if (!email) {
            newErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email is invalid"
        }

        if (!password) {
            newErrors.password = "Password is required"
        } else if (password.length < 8) {
            newErrors.password = "Password must be at least 8 characters long"
        }

        if (isSignup && !username) {
            newErrors.username = "Username is required"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    /* Form Submission */
    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrorMessage("")
        if (validateForm()) {
            setLoading(true)
            try {
                if (isSignup) {
                    await createUser()
                } else {
                    await loginUser()
                }
            } catch (err) {
                setErrorMessage(err.message || "An error occurred")
            } finally {
                setLoading(false)
            }
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 font-sans">
            <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg w-full max-w-md rounded-lg">
                <h3 className="text-2xl font-bold text-center mb-4">
                    {isSignup
                        ? "Create a new account"
                        : "Login to your account"}
                </h3>
                <form onSubmit={handleSubmit}>
                    <div className="mt-4">
                        {isSignup && (
                            <div className="mt-4">
                                <label className="block" htmlFor="username">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    placeholder="Username"
                                    className={`w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 ${
                                        errors.username ? "border-red-500" : ""
                                    }`}
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                />
                                {errors.username && (
                                    <Alert
                                        variant="destructive"
                                        className="mt-2"
                                    >
                                        <AlertCircle className="h-4 w-4" />
                                        <AlertDescription>
                                            {errors.username}
                                        </AlertDescription>
                                    </Alert>
                                )}
                            </div>
                        )}
                        <div>
                            <label className="block" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="text"
                                placeholder="Email"
                                className={`w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 ${
                                    errors.email ? "border-red-500" : ""
                                }`}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && (
                                <Alert variant="destructive" className="mt-2">
                                    <AlertCircle className="h-4 w-4" />
                                    <AlertDescription>
                                        {errors.email}
                                    </AlertDescription>
                                </Alert>
                            )}
                        </div>
                        <div className="mt-4">
                            <label className="block" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className={`w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 ${
                                    errors.password ? "border-red-500" : ""
                                }`}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password && (
                                <Alert variant="destructive" className="mt-2">
                                    <AlertCircle className="h-4 w-4" />
                                    <AlertDescription>
                                        {errors.password}
                                    </AlertDescription>
                                </Alert>
                            )}
                        </div>
                        {errorMessage && (
                            <Alert variant="destructive" className="mt-2">
                                <AlertCircle className="h-4 w-4" />
                                <AlertDescription>
                                    {errorMessage}
                                </AlertDescription>
                            </Alert>
                        )}
                        <div className="flex items-baseline justify-between">
                            <button
                                type="submit"
                                className="px-6 py-2 mt-4 text-white bg-black rounded-lg hover:scale-105 transition-all w-full"
                                disabled={loading}
                            >
                                {isSignup ? "Sign Up" : "Login"}
                            </button>
                        </div>
                    </div>
                </form>
                <button
                    onClick={() => setIsSignup(!isSignup)}
                    className="w-full mt-4 text-blue-600 hover:underline"
                >
                    {isSignup
                        ? "Already have an account? Login"
                        : "Create new account"}
                </button>
            </div>
        </div>
    )
}

export default Login
