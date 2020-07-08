const Course = require('../models/course')

module.exports.list = (req, res) => {
    Course.find({ user:req.user._id})
        .then((course) => {
            res.json(course)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Course.findOne({_id:id,user:req.user._id})
        .then((course) => {
            if (course) {
                res.json(course)
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
    const course = new Course(body)
    course.user=req.user._id
    course.save()
        .then((course) => {
            res.json(course)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Course.findOneAndUpdate({_id:id,user:req.user._id}, body, { new: true, runValidators: true })
        .then((course) => {
            res.json(course)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Course.findOneAndDelete({_id:id,user:req.user._id})
        .then((course) => {
            res.json(course)
        })
        .catch((err) => {
            res.json(err)
        })
}