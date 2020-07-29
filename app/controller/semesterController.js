const Semester = require('../models/semester')

module.exports.list = (req, res) => {
    Semester.find({ user:req.user._id})
        .then((semester) => {
            res.json(semester)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Semester.findOne({_id:id,user:req.user._id})
        .then((semester) => {
            if (semester) {
                res.json(semester)
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
    const semester = new Semester(body)
    semester.user=req.user._id
    semester.save()
        .then((semester) => {
            res.json(semester)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Semester.findOneAndUpdate({_id:id,user:req.user._id}, body, { new: true, runValidators: true })
        .then((semester) => {
            res.json(semester)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Semester.findOneAndDelete({_id:id,user:req.user._id})
        .then((semester) => {
            res.json(semester)
        })
        .catch((err) => {
            res.json(err)
        })
}