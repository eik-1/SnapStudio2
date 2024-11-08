import { useNavigate, useRouteError } from "react-router-dom"

function Error() {
    const error = useRouteError()
    const navigate = useNavigate()

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-4xl text-black mb-4">
                Oops! Something went wrong.
            </h1>
            <p className="text-xl text-gray-500 mb-8 px-8">
                {error.statusText ||
                    error.message ||
                    "An unexpected error occurred."}
            </p>
            <button
                className="px-6 py-2 text-base text-white bg-red-600 rounded hover:bg-red-700 transition-colors duration-300 cursor-pointer"
                onClick={() => navigate("/")}
            >
                Go to Home
            </button>
        </div>
    )
}

export default Error
