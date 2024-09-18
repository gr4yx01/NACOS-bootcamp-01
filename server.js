import express from 'express'
import userRouter from './routes/user.js'

const app = express();
app.use(express.json())

app.use(userRouter);

app.listen('4000', () => {
    console.log('server currently running')
})