
export const Button = ({
    disabled , 
    onClick , 
    children , 
}) => { 
    return <span className={`rounded-2xl cursor-pointer ${disabled ? "bg-blue-200" : "bg-green-400"} p-4 `} onClick={onClick}>
        {children}
    </span>
}