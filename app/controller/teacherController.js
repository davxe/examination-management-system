const Teacher = require('../models/teacher')

module.exports.list = (req, res) => {
    Teacher.find({ user:req.user._id}).populate('course').populate('department').populate('subject')
        .then((teacher) => {
            res.json(teacher)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Teacher.findOne({_id:id,user:req.user._id}).populate('course').populate('department').populate('subject')
        .then((teacher) => {
            if (teacher) {
                res.json(teacher)
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
    const teacher = new Teacher(body)
    teacher.user=req.user._id
    teacher.save()
        .then((teacher) => {
            res.json(teacher)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Teacher.findOneAndUpdate({_id:id,user:req.user._id}, body, { new: true, runValidators: true })
        .then((teacher) => {
            res.json(teacher)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Teacher.findOneAndDelete({_id:id,user:req.user._id})
        .then((teacher) => {
            res.json(teacher)
        })
        .catch((err) => {
            res.json(err)
        })
}