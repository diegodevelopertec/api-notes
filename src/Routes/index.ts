import { Router } from "express";
import * as notesController from '../Controllers/notesController'


const router=Router()

router.get('/api/notes',notesController.getAllNotes)
router.get('/api/notes/:id')
router.post('/api/notes')
router.put('/api/notes/:id')
router.delete('/api/notes/:id')

export default router