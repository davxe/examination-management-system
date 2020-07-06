const express=require('express')
const port=3001
const app=express()

const configureDB=require('./config/database')
configureDB()

app.use(express.json())

const routes=require('./config/routes')
app.use('/',routes)

app.listen(port,function(){
    console.log('listining on port',port)
})