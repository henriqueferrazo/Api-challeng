import { Router } from "express";

export const route = Router()

route.get('/', (req, res) => {
    res.json({ message: 'Olá mundo, esse é meu primeiro app Typescript' })
})