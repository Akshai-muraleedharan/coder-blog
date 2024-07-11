const express =require('express')
const dotenv = require('dotenv')
const mongoose =require('mongoose')
const postRouter = require('./routes/posts')

dotenv.config()

const app = express()



app.use('/api/post',postRouter)

mongoose.connect(process.env.MONODB_KEY)
.then(() => console.log("DB connected successfully"))
.catch((err) =>  console.log(err))



const port = process.env.PORT || 4002

app.listen(port, () => console.log(`server is connected on port: ${port}`))