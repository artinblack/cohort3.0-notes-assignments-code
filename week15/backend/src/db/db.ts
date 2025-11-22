import mongoose, { Model } from "mongoose";
const Schema = mongoose.Schema ; 
const ObjectId = mongoose.Types.ObjectId ; 

const User = new Schema({
    username : { 
        type : String , 
        unique : true
    } , 
    password : String 
})

export const userModel = mongoose.model('user',User) ; 

const Content = new Schema({
    title : String , 
    link : String , 
    tags : [{ type : ObjectId , ref : 'Tag' }] , 
    type : String , 
    userId : { type : ObjectId , ref : 'User' , require : true }
})


export const contentModel = mongoose.model('contents',Content) ; 


const Links =  new Schema({
    hash : String , 
    userId : {
        type: ObjectId , 
        ref : 'User' , 
        require : true ,
        unique : true
    } 
})

export const linksModel = mongoose.model('links',Links) ; 