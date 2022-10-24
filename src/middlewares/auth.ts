import {Request,Response,NextFunction } from "express";
import dotenv from 'dotenv'
import  jwt from "jsonwebtoken";


dotenv.config()



export const AuthPrivate={
    auth:async(req:Request,res:Response,next:NextFunction)=>{
        let entry=false

        if(req.headers.authorization){
            let [authType,token]=req.headers.authorization.split(' ')
            if(authType === 'Bearer'){
                try{
                    console.log(token);
                    
                    jwt.verify(token,process.env.JWT_KEY as string)
                    entry=true
                }catch(e){
                    console.log(e);
                    
                }
         }


        }


        if(entry){
            next()
        }else{ 
            res.status(403).json({erro:'rota nao autorizada'})
        }


    }
}