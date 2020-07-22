const Room = require('../models/room')

module.exports.list = (req, res) => {
    Room.find({ user:req.user._id})
        .then((room) => {
            res.json(room)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Room.findOne({_id:id,user:req.user._id})
        .then((room) => {
            if (room) {
                res.json(room)
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
    const room = new Room(body)
    room.user=req.user._id
    room.save()
        .then((room) => {
            res.json(room)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Room.findOneAndUpdate({_id:id,user:req.user._id}, body, { new: true, runValidators: true })
        .then((room) => {
            res.json(room)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Room.findOneAndDelete({_id:id,user:req.user._id})
        .then((room) => {
            res.json(room)
        })
        .catch((err) => {
            res.json(err)
        })
}