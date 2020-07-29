const Subject = require('../models/subject')

module.exports.list = (req, res) => {
    Subject.find({ user:req.user._id}).populate('course').populate('department').populate('semester')
        .then((subject) => {
            res.json(subject)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Subject.findOne({_id:id,user:req.user._id}).populate('course').populate('department').populate('semester')
        .then((subject) => {
            if (subject) {
                res.json(subject)
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
    const subject = new Subject(body)
    subject.user=req.user._id
    subject.save()
        .then((subject) => {
            res.json(subject)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Subject.findOneAndUpdate({_id:id,user:req.user._id}, body, { new: true, runValidators: true })
        .then((subject) => {
            res.json(subject)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Subject.findOneAndDelete({_id:id,user:req.user._id})
        .then((subject) => {
            res.json(subject)
        })
        .catch((err) => {
            res.json(err)
        })
}