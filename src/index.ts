import express from 'express'
import dotenv from 'dotenv'
import router from './Routes'

const api=express()
dotenv.config()
api.use(express.urlencoded({extended:true}))
api.use(router)
api.use((req,res)=>{
    res.status(404).json({erro:'pagina não encontrada'})
})
api.listen(process.env.PORT)