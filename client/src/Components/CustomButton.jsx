import React from 'react'

export const CustomButton = ({text, onClick}) => {
    return (
        <button className="
        w-36
        h-7
        text-base
        px-2
        border 
        border-transparent 
        shadow-md 
        bg-blue-500 
        text-white 
        rounded-md 
        transition 
        duration-300 
        ease-in-out 
        transform 
        hover:shadow-none 
        hover:bg-gradient-to-r 
        from-blue-500 
        to-cyan-500 
        active:translate-y-1 
        active:shadow-none 
        active:bg-blue-500 
        focus:outline-none"
        onClick={onClick}
        >
            {text}
        </button>

    )
}
