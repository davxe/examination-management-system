# examination-management-system
[![Build Status](https://img.shields.io/badge/build-deployed-success)](https://examination-management-system.herokuapp.com/)
# Overview
Normally what happens is that on day of examination, every student has to look sitting arrangement and then rush towards the examination hall. The idea is to automate this whole process so that student can receive the seating arrangement on text message on the day of examination so that they can proceed directly towards the Hall.

# Dependencies
1. bcryptjs `npm install bcryptjs`
2. cors `npm install cors`
3. express `npm install express`
4. jsonwebtoken `npm install jsonwebtoken`
5. moment `npm install moment`
6.mongoose `npm install mongoose`
7. twilio `npm install twilio`
8. validator `npm install validator`
9. axios `npm install axios`
10. bootstrap `npm install bootstrap`
11. react-bootstrap `npm install react-bootstrap`
12. react-redux `npm install react-redux`
13. reactstrap `npm install reactstrap`
14. redux `npm install redux`
15. redux-thunk `npm install redux-thunk`
16. sweetalert `npm install sweetalert`

## Folder structure

```bash
├───app
│   ├───controllers
│   ├───middlewares
│   └───models
├───client
│   ├───public
│   └───src
│       ├───actions
│       ├───component
│       │   ├───auth
│       │   ├───course
│       │   ├───datesheet
│       │   ├───department
│       │   ├───exam
│       │   ├───room
│       │   ├───semester
│       │   ├───static
│       │   ├───student
│       │   ├───subject
│       │   └───teacher
│       ├───config
│       ├───reducers
│       ├───selectors 
│       └───store           
└───config
```

# Features
* User can log in and register, custom authentication is used with jwt, 
   bcrypt.js, validator on the backend with node.js, express.js and  monogDb.
* For redirecting to other routes user has to be logged in if not then this project directly redirect to the login page .
* User can  add  student, teacher, exam, datesheet  if he/she  is logged in .
* CRUD on course, department, semester, teacher, subject, student, exam, room, datesheet .

