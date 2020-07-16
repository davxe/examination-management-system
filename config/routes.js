const express=require('express')
const router=express.Router()

const {authenticateUsers}=require('../app/middleware/authenticateUser')

const usersController = require('../app/controller/userController')
const departmentController=require('../app/controller/departmentController')
const courseController = require('../app/controller/courseController')
const examController = require('../app/controller/examController')
const teacherController = require('../app/controller/teacherController')
const subjectController = require('../app/controller/subjectController')
const studentController = require('../app/controller/studentController')

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
//course
router.get('/courses',authenticateUsers,courseController.list)
router.post('/courses',authenticateUsers,courseController.create)
router.get('/courses/:id',authenticateUsers,courseController.show)
router.put('/courses/:id',authenticateUsers,courseController.update)
router.delete('/courses/:id',authenticateUsers,courseController.destroy)
//exam
router.get('/exams',authenticateUsers,examController.list)
router.post('/exams',authenticateUsers,examController.create)
router.get('/exams/:id',authenticateUsers,examController.show)
router.put('/exams/:id',authenticateUsers,examController.update)
router.delete('/exams/:id',authenticateUsers,examController.destroy)
//teacher
router.get('/teachers',authenticateUsers,teacherController.list)
router.post('/teachers',authenticateUsers,teacherController.create)
router.get('/teachers/:id',authenticateUsers,teacherController.show)
router.put('/teachers/:id',authenticateUsers,teacherController.update)
router.delete('/teachers/:id',authenticateUsers,teacherController.destroy)
//subject
router.get('/subjects',authenticateUsers,subjectController.list)
router.post('/subjects',authenticateUsers,subjectController.create)
router.get('/subjects/:id',authenticateUsers,subjectController.show)
router.put('/subjects/:id',authenticateUsers,subjectController.update)
router.delete('/subjects/:id',authenticateUsers,subjectController.destroy)
//student
router.get('/students',authenticateUsers,studentController.list)
router.post('/students',authenticateUsers,studentController.create)
router.get('/students/:id',authenticateUsers,studentController.show)
router.put('/students/:id',authenticateUsers,studentController.update)
router.delete('/students/:id',authenticateUsers,studentController.destroy)

module.exports=router