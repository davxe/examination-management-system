const Exam = require('../models/exam')

module.exports.list = (req, res) => {
    Exam.find({ user:req.user._id})
        .then((exam) => {
            res.json(exam)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Exam.findOne({_id:id,user:req.user._id})
        .then((exam) => {
            if (exam) {
                res.json(exam)
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
    const exam = new Exam(body)
    exam.user=req.user._id
    exam.save()
        .then((exam) => {
            res.json(exam)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Exam.findOneAndUpdate({_id:id,user:req.user._id}, body, { new: true, runValidators: true })
        .then((exam) => {
            res.json(exam)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Exam.findOneAndDelete({_id:id,user:req.user._id})
        .then((exam) => {
            res.json(exam)
        })
        .catch((err) => {
            res.json(err)
        })
}