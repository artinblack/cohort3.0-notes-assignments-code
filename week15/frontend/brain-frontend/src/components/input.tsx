export function Input({ placeholder , ref} : { placeholder : string ; ref : any }) { 
    return <div>
        <input type={"text"} className="px-4 py-2 border shadow-sm m-2 shadow-black rounded-xl"  placeholder={placeholder} ref={ref}/>
    </div>
}