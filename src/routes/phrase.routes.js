import { Router } from 'express'

const router = Router()

router.get('/phrase', (req, res) => {res.send("todas las prhases")})
router.get('/phrase/:id', (req, res) => {res.send("1 prhase")})
router.post('/phrase', (req, res) => {res.send("creando prhase")})
router.delete('/phrase/:id', (req, res) => {res.send("eliminando prhase")})
router.put('/phrase/:id',(req, res) => {res.send("actualizando prhase")})

export default router; 