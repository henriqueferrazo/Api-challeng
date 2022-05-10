import express from 'express'
import cors from 'cors'
import morgan from "morgan"
import { PrismaClient } from '@prisma/client'

import { route } from './index'

const app = express()
const prisma = new PrismaClient()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/', route)

 

export default app;