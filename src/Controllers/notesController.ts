import { Request,Response} from "express";
import { notes } from "../Models/notesModels";

export const getAllNotes=async(req:Request,res:Response)=>{

        let list=await notes.findAll()
        res.status(200).json({list})


}

export const getNote=async(req:Request,res:Response)=>{
        let {id}=req.params
        let note=await notes.findByPk(id)
        if(note){
                res.status(200).json({note})
        }else{
                res.status(404).json({erro:'anotação não existe'})
        }

}

export const createNote=async(req:Request,res:Response)=>{

        let {title,content}=req.body
        let newNote=await notes.create({title,content})
        res.status(200).json({id:newNote.id,title,content})  
}

export const updateNote=async(req:Request,res:Response)=>{
        let {id}=req.params
        let {title,content}=req.body
        if(title !=='' && content !== ''){
                let note=await notes.findByPk(id)
                if(note){
                        note.title=title
                        note.content=content
                        await note.save()
                      res.status(200).json({note})

                }
       }
        else{
                res.json({erro:'nenhuma alteração feita'})
        }


    
}
export const deleteNote=async(req:Request,res:Response)=>{
let {id}=req.params
await notes.destroy({where:{id}})
res.status(200).json({ok:'anotação excluida'})

    
}