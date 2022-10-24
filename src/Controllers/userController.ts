import { Request,Response} from "express";
import {users } from "../Models/userModel";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'


dotenv.config()

export const getAllUsers=async(req:Request,res:Response)=>{

        let userList=await users.findAll()
        res.status(200).json({userList})


}

export const getUser=async(req:Request,res:Response)=>{
        let {id}=req.params
        let user=await users.findByPk(id)
        if(user){
                res.status(200).json({user})
        }else{
                res.status(404).json({erro:'usuário não existe'})
        }

}


export const updateUser=async(req:Request,res:Response)=>{
        let {id}=req.params
        let {name,email,password}=req.body
        if(name !=='' ||  email !== '' || password !== ' '){
                let user=await users.findByPk(id)
                if(user){
                       user.name=name
                       user.password=password
                       user.email=email
                        await user.save()
                      res.status(200).json({user})

                }
       }
        else{
                res.json({erro:'nenhuma alteração feita'})
        }


    
}
export const deleteUser=async(req:Request,res:Response)=>{
    let {id}=req.params
    await users.destroy({where:{id}})
    res.status(200).json({ok:'conta  excluida'})

}

export const login=async(req:Request,res:Response)=>{
        if(req.body.email && req.body.password ){
                let {email}=req.body
                let {password}=req.body
                
                let user=await users.findOne({where:{email}})
                if(user){
                   const token=jwt.sign(
                        { email:user.email,password:user.password},
                        process.env.JWT_KEY as string
                      
                   )
                   res.json({status:true,token})
               

                }else{
                        res.json({erro:'usuário não existe.Cadastra-se'})
                }


    }else{
        res.json({erro:'algum dado não enviados'})
   }


  
        
}

export const register=async(req:Request,res:Response)=>{
      
        if(req.body.email && req.body.password &&  req.body.name){
                let {name,email,password}=req.body
                let hasUser=await users.findOne({where:{email}})
                if(!hasUser){
                        let newUser=await users.create({name,email,password})
                        const token=jwt.sign(
                                { email:newUser.email,password:newUser.password},
                                 process.env.JWT_KEY as string,
                              
                            )
                        res.status(201).json({token,ok:'cadastro concluido'})
                }else{
                        res.json('usuário já eiste')
                }


    }else{
        res.json({erro:'algum dado não enviados'})
   }
            
        }