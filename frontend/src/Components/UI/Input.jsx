import React from "react"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
    return (
        <input
            type={type}
            className={`
        w-full
        rounded-md
        border
        border-gray-700
        bg-white/10
        px-3
        py-2
        text-sm
        text-white
        placeholder:text-gray-400
        focus:outline-none
        focus:ring-2
        focus:ring-purple-500
        focus:border-transparent
        transition-colors
        ${className}
      `}
            ref={ref}
            {...props}
        />
    )
})

Input.displayName = "Input"

export { Input }
