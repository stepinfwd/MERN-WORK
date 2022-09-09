const express = require('express')
const mongo = require('mongodb');
let mongoose=require('mongoose')
require('dotenv').config()
const workoutRoutes = require('./routes/workout')
// express app
const app = express()


// middlewares
app.use(express.json())
app.use('/api/workouts',workoutRoutes)

// respond with "hello world" when a GET request is made to the homepage
app.get('/', async(req, res) => {
  res.send('hello world')

  const allAnimals = await client.db().collection("animals").find()
  console.log(allAnimals)
})

// connect to db
mongoose.connect(process.env.MONGO_URI).then(()=>{
  app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}` )
  })
})
.catch((err)=>{
  console.log("error",process.env.MONGO_URI);
})
