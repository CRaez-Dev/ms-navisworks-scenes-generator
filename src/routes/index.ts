import { Router } from 'express'
import navisworks from './navisworks'

const router = Router()


router.use('/navisworks',navisworks)


export default router