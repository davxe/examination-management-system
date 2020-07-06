const express=require('express')
const router=express.Router()
const usersController = require('../app/controller/userController')
const departmentController = require('../app/controller/departmentController')
const {authenticateUsers}=require('../app/middleware/authenticateUser')
//user authentication
router.post('/users/register',usersController.register)
router.post('/users/login',usersController.login)
router.get('/users/accounts',authenticateUsers,usersController.account)
//department
router.get('/departments',authenticateUsers,departmentController.list)
router.post('/departments',authenticateUsers,departmentController.create)
router.get('/departments/:id',authenticateUsers,departmentController.show)
router.put('/departments/:id',authenticateUsers,departmentController.update)
router.delete('/departments/:id',authenticateUsers,departmentController.destroy)

module.exports=router