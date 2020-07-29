const Student = require('../models/student')

module.exports.list = (req, res) => {
    Student.find({ user:req.user._id}).populate('course').populate('department').populate('semester')
        .then((student) => {
            res.json(student)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Student.findOne({_id:id,user:req.user._id}).populate('course').populate('department').populate('semester')
        .then((student) => {
            if (student) {
                res.json(student)
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
    const student = new Student(body)
    student.user=req.user._id
    student.save()
        .then((student) => {
            res.json(student)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Student.findOneAndUpdate({_id:id,user:req.user._id}, body, { new: true, runValidators: true })
        .then((student) => {
            res.json(student)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Student.findOneAndDelete({_id:id,user:req.user._id})
        .then((student) => {
            res.json(student)
        })
        .catch((err) => {
            res.json(err)
        })
}