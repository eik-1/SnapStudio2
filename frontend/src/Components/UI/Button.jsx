import React from "react"

export function Button({
    children,
    type = "button",
    onClick,
    disabled = false,
    className = "",
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
        px-4 py-2 rounded-md font-semibold text-sm
        transition-colors duration-200
        ${
            disabled
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-slate-950 text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50"
        }
        ${className}
      `}
        >
            {children}
        </button>
    )
}
