// imports
import express from 'express' ; 
import { config } from 'dotenv';
config() ; 
import {z} from 'zod' ; 
import cors from 'cors' ; 
import jwt from 'jsonwebtoken' ; 
import mongoose, { mongo } from 'mongoose';
import bcrypt from 'bcrypt' ; 
const app = express() ; 
import { contentModel, linksModel, userModel } from '../src/db/db' ; 
import { userMiddleware } from './middlewares/auth';
import { random } from './utils';
//middlewares
app.use(cors()); 
app.use(express.json()) ; 

const JWT_SECRET  = process.env.JWT_PASSWORD ; 

// endpoints 
app.post('/api/v1/signup', async (req,res) => { 
    // todo : fix similar user crash 
    const NewUser = z.object({
        username : z.string().min(3).max(100) , 
        password : z.string().min(3).max(100) 
    }) 

    type User = z.infer<typeof NewUser> ; 

    const { username , password } : User = req.body ; 

    NewUser.parse({ username : username , password : password})

    try { 
        const hashedPassword = await bcrypt.hash(password,10) ; 
        await userModel.create({
            username : username , 
            password : hashedPassword 
        })
        res.json({
            message : "user signed up"
        })
    } catch(e) { 
        res.json({
            error : e
        })
    }

})

app.post('/api/v1/signin', async(req,res) => { 
    
    const NewUser = z.object({
        username : z.string().min(3).max(100) , 
        password : z.string().min(3).max(100)  
    })

    type User = z.infer<typeof NewUser>

    const { username , password } : User = req.body ;  

    NewUser.parse({ username : username , password : password})

    try { 
        const user  = await userModel.findOne({
            username : username , 
        })
        if (!user || !user.password) {
            return res.status(401).json({ error: "Invalid username or password" });
        }
        const passwordmatch = await bcrypt.compare(password, user.password);
        if (!passwordmatch) {
            return res.status(401).json({ error: "Invalid username or password" });
        }
        if(user && passwordmatch) { 
            if (!JWT_SECRET) {
                return res.status(500).json({ error: "JWT secret is not set" });
            }
            const token = jwt.sign({
                id : user._id , 
            }, JWT_SECRET);
            return res.json({ message: "Signin successful", token : token });
        }
        res.status(401).json({ error: "Invalid username or password" });
    } catch(e) { 
        res.json({error : e})
    }

})


app.post('/api/v1/content',userMiddleware, async (req,res) => { 
    const { link , type } = req.body.link ; 
    await contentModel.create({
        link : link , 
        type : type, 
        // @ts-ignore
        userId : req.userId , 
        tags : [] 
    })
    return res.json({
        message : "Content added !!"
    })
})

app.get('/api/v1/content',userMiddleware, async (req,res) => { 
    // @ts-ignore
    const userId = req.userId;
    
    try {
        const content = await contentModel.find({
        userId: userId
        })
        if(content) { 
            res.json({
                content : content
            })
        }
    } catch(e) { 
        res.json({
            error : e
        })
    }
})


app.delete('/api/v1/content', userMiddleware , async (req,res) => { 
    const contentId = req.body.id
     
    await contentModel.deleteMany({
        contentId , 
        //@ts-ignore
        userId : req.userId 
    })

    res.json({
        message : "Deleted "
    })
})

app.post('/api/v1/brain/share', userMiddleware , async (req,res) => { 
    const share = req.body.share ; 
    
    if(share) { 
        const hash = random(10) 
        await linksModel.create({
            // @ts-ignore
            userId : req.userId ,
            hash : hash
        })
    } else { 
        await linksModel.deleteOne({
            // @ts-ignore
            userId : req.userId 
        })
    }

    res.json({
        message : "Updated sharable link"
    })
})

app.get('/api/v1/brain/:shareLink', userMiddleware ,async (req,res) => {  
    const hash = req.params.shareLink ; 

    const foundlink = await linksModel.findOne({
        hash : hash
    }) 

    if(!foundlink) { 
        res.status(411).json({
            message : "Sorry incorrect input"
        })
        return
    }
    // early returning 
    // userId 
    const content = await contentModel.find({
        userId : foundlink?.userId
    })

    const user = await userModel.findOne({
        userId : foundlink?.userId 
    })

    res.json({
        // optional chaining the user can also be null 
        username : user?.username , 
        content : content
    })
})  

// port listener 
const main = async () => { 
    const mongoURI = process.env.MONGO_CONNECTION;
    if (!mongoURI) {
        throw new Error('MONGO_CONNECTION environment variable is not set');
    }
    await mongoose.connect(mongoURI);
    console.log('database connected') ; 
    app.listen(3000);
}

main() 