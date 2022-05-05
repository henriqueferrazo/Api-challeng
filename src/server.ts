const express = require('express')
import { Router, Request, Response} from 'express'

const app = express()
const route = Router()
app.use(express.json())

route.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Olá mundo, esse é meu primeiro app Typescript' })
})

app.use(route)

app.listen(5000, () => 'Servidor funcionando na port 5000')