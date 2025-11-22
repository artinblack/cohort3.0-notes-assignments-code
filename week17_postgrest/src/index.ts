import { Client } from 'pg' ; 
import express from 'express' ; 

const app = express() ; 

const client = new Client(
    "postgresql://neondb_owner:npg_DK2kAF1gBuqs@ep-crimson-heart-aha420tc-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
)

client.connect() ; 


app.use(express.json()) ; 

app.get('/signup', async (req,res) => { 
    
    const { username , password , email , city , country , street , pincode } = req.body ; 

    try { 


        const insertQuery = `insert into users (username,email,password) values ($1,$2,$3) returning id ; `

        const addressquery = `insert into addresses (city , country , street , pincode , user_id) values ($1 , $2 , $3 , $4 , $5) ; `
        

        await client.query('BEGIN ; ') ; 

        const response =  await client.query(insertQuery, [username,email,password]) ; 
        console.log(response) ; 
        const userId = response.rows[0].id ; 


        const addressqueryresponse = await client.query(addressquery , [ city , country , street , pincode , userId]) ; 

        await client.query('COMMIT ; ') ; 

        res.json({
            message : "User added !!" 
        })
    } catch(e) { 
        console.log(e) ; 
        res.json({
            message : "Error while signing up !!"
        })
    }
})

app.get('/metadata' ,async ( req ,res ) => { 
    const id = req.query.id ; 
    const query = `SELECT users.id , users.username , users.email , addresses.city , addresses.country , addresses.street , addresses.pincode FROM users JOIN addresses ON users.id = addresses.user_id 
        WHERE users.id = $1 ;`
    
    const response = await client.query(query , [id]) ; 
 
    res.json({
        response : response.rows 
    })
    
})

app.listen(3000) ; 

// async function main() { 
//     await client.connect() ; 
//     const result = await client.query('SELECT * FROM users') ; 
//     console.log(result.rows)
// }

// main() ; 



