const express =require('express')
const dotenv = require('dotenv')
const mongoose =require('mongoose')
const postRouter = require('./routes/posts')
const userRouter = require('./routes/user.route')
const userSignin = require('./routes/userSignin')
const cors =require('cors')
const bodyParser = require('body-parser');
dotenv.config()
 
const app = express()

app.use(cors())
app.use(bodyParser.json())


mongoose.connect(process.env.MONODB_KEY)
.then(() => console.log("DB connected successfully"))
.catch((err) =>  console.log(err))

app.use('/api/post',postRouter)
app.use('/api/user',userRouter)
app.use('/api/user/sigin',userSignin)


const port = process.env.PORT || 4002

app.listen(port, () => console.log(`server is connected on port: ${port}`))