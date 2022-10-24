import { Router } from "express";
import * as notesController from '../Controllers/notesController'
import * as userController from '../Controllers/userController'
import {AuthPrivate} from '../middlewares/auth'

const router=Router()

router.get('/api/notes',AuthPrivate.auth,notesController.getAllNotes)
router.get('/api/notes/:id',notesController.getNote)
router.post('/api/notes',AuthPrivate.auth,notesController.createNote)
router.put('/api/notes/:id',notesController.updateNote)
router.delete('/api/notes/:id',notesController.deleteNote)



router.post('/api/login',userController.login)
router.post('/api/register',userController.register)
router.get('/api/users',userController.register)

router.get('/api/user/:id',AuthPrivate.auth,userController.getUser)
router.put('/api/notes/:id',AuthPrivate.auth,userController.updateUser)
router.delete('/api/notes/:id',AuthPrivate.auth,userController.deleteUser)


export default router