const express=require('express')
const cors = require('cors')
const app=express()
const port=process.env.PORT || 3001

const path = require('path')
const routes=require('./config/routes')

const configureDB=require('./config/database')
configureDB()

app.use(express.json())
app.use(cors())
app.use('/',routes)

app.use(express.static(path.join(__dirname,"client/build")))
app.get("*",(req,res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"))
})

app.listen(port,function(){
    console.log('listining on port',port)
})