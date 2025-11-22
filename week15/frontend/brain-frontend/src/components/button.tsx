import React, { type ReactElement } from 'react'

interface ButtonProps { 
    variant : "primary" | "secondary" ; 
    text : string ; 
    startIcon?: ReactElement ; 
    onClick?: () => void  ; 
    className?  : string ; 
}

const variantClasses = { 
    "primary" : "bg-purple-600 text-white" , 
    "secondary" : "bg-purple-200 text-purple-600" , 
} 

const Button = (props : ButtonProps) => {


    return (
        <button onClick={props.onClick}  className={`${props.className} ${props.loading ? "opacity-45" : null} ${variantClasses[props.variant]} flex items-center  p-2 rounded-xl font-normal cursor-pointer`} >
            {props.startIcon} {props.text}
        </button>
  )
}

export default Button