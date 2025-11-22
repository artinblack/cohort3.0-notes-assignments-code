import { useRef, useState } from "react"
import { Button } from "./Button";

export const Otp = () =>  { 
    const ref1 = useRef() ; 
    const ref2 = useRef() ; 
    const ref3 = useRef() ; 
    const ref4 = useRef() ; 
    const ref5 = useRef() ; 
    const ref6 = useRef() ; 

    const [disabled ,setDisabled] = useState(true) ; 

    return (
        <div className="flex justify-center ">
            <SubOtpBox reference={ref1} onDone={() => { 
                ref2.current.focus() ; 
            }} />
            <SubOtpBox reference={ref2} onDone={() => { 
                ref3.current.focus() ; 
            }} onBack={() => { 
                ref2.current.focus() ; 
            }} />
            <SubOtpBox reference={ref3} onDone={() => { 
                ref4.current.focus() ; 
            }} onBack={() => { 
                ref3.current.focus() ; 
            }} />
            <SubOtpBox reference={ref4} onDone={() => { 
                ref5.current.focus() ; 
            }} onBack={() => { 
                ref4.current.focus() ; 
            }} />
            <SubOtpBox reference={ref5} onDone={() => { 
                ref6.current.focus() ; 
            }} onBack={() => { 
                ref5.current.focus() ; 
            }} />
            <SubOtpBox reference={ref6} onDone={() => { 
                setDisabled(false)  
            }} />

            <br />
            <Button disabled={disabled}>Sign up</Button>
        </div>
    )
}

function SubOtpBox({
    reference , onDone , onBack
}) { 
    const [inputBoxVal, setInputBoxVal] = useState('')  ; 
    return <div>
        <input type="text" value={inputBoxVal} ref={reference} onChange={(e) => {
            const val = e.target.value ; 
            if( val == "") { 
                if(e.key == 'Backspace') {
                    onBack() ; 
                }  
            } 
            else if ( val == "1" || val == "2" || val == "3" || val == "4" || val == "5" || val == "6" || val == "7" || val == "8" || val == "9" ) {
                setInputBoxVal(val) ; 
                onDone() ; 
            }
            onDone() 
        }} className="m-1.5 w-[40px] h-[50px] rounded-2xl bg-blue-500" />
    </div>
}