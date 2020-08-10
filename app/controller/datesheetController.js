const Datesheet = require('../models/datesheet')
module.exports.list = (req, res) => {
    Datesheet.find({ user:req.user._id}).populate('course').populate('department').populate('semester').populate('subject').populate('exam').populate('room').populate('student')
        .then((datesheet) => {
            res.json(datesheet)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Datesheet.findOne({_id:id,user:req.user._id}).populate('course').populate('department').populate('semester').populate('subject').populate('exam').populate('room').populate('student')
        .then((datesheet) => {
            if (datesheet) {
                res.json(datesheet)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.create = (req, res) => {
    const body = req.body
    const datesheet = new Datesheet(body)
    datesheet.user=req.user._id
    datesheet.save()
        .then((datesheet) => {
            res.json(datesheet)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Datesheet.findOneAndUpdate({_id:id,user:req.user._id}, body, { new: true, runValidators: true })
        .then((datesheet) => {
            res.json(datesheet)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Datesheet.findOneAndDelete({_id:id,user:req.user._id})
        .then((datesheet) => {
            res.json(datesheet)
        })
        .catch((err) => {
            res.json(err)
        })
}
module.exports.send=(req,res)=>{
    const accountSid='AC4ffe75d8250501ad09ed271e26ac772f'
    const authToken ='510847ce3a0ff465e13c294fb226693d'
    const client =require('twilio')(accountSid,authToken);
    
    const {recipent,textmessage} = req.query

    client.messages.create({
        body:textmessage,
        from:'+12029320920',
        to:`${recipent}`,
    }).then((message)=>console.log(message.sid))
    console.log("to",recipent,"message",textmessage)
}