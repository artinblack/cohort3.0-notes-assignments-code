const jwt = require('jsonwebtoken') ; 
const jwtPassword = "secret" ; 
const zod = require('zod') ; 

const emailSchema =  zod.string().email() ; 
const passwordSchema = zod.string().min(6) ; 

function signJwt(username,password) { 
    const usernameResponse = emailSchema.safeParse(username) ;
    const passwordResponse = passwordSchema.safeParse(password) ;  
    if(!usernameResponse.success || !passwordResponse.success) { 
        return null
    } 
    const signature = jwt.sign({
        username
    },jwtPassword)

    return signature ; 
}

function verifyJwt(token) { 
    const verifyjwt = jwt.verify(token,jwtPassword) ; 
    if(verifyjwt) { 
        return true ;
    } else { 
        return false ; 
    }
}

function decodeJwt(token) { 
    const decoded = jwt.decode(token) ; 
    if(decoded) { 
        return true; 
    } else { 
        return false ; 
    }
    console.log(decoded.username) ; 
}



const ans = signJwt("aashray.bhagtani@gmail.com","aashray2004")
console.log(ans)