import { Request,Response} from "express";
import { mysql } from "../Database/mysql.instance";
import { notes } from "../Models/notesModels";

export const getAllNotes=async(req:Request,res:Response)=>{

    try{

        /*console.log('conectando banco ...');
        await mysql.authenticate()
        console.log('conectado');
        res.json({ok:'banco ok'})
        */
        let list=await notes.findAll()
        res.status(200).json({list})

    }catch(e){
        console.log(e);
        
    }



}

export const getNote=async(req:Request,res:Response)=>{



    
}
export const createNote=async(req:Request,res:Response)=>{



    
}
export const updateNote=async(req:Request,res:Response)=>{



    
}
export const deleteNote=async(req:Request,res:Response)=>{



    
}