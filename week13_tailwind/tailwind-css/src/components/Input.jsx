export const Input = ({
    onClick , 
    placeholder , 
    type
}) => { 
    return <span className={`rounded-2xl cursor-pointer text-white  bg-blue-200 p-4`} onClick={onClick}>
        <input type={type} placeholder={placeholder} />
    </span>
}