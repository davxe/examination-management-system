const mongoose=require('mongoose')
const confogureDB=()=>{
    mongoose.connect('mongodb://localhost:27017/examination-management-system',{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
        .then(()=>{
            console.log('connected to db')
        })
        .catch((err)=>{
            console.log(err)
        })
}
module.exports=confogureDB