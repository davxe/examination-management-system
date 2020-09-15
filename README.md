# examination-management-system
[![Build Status](https://img.shields.io/badge/build-deployed-success)](https://examination-management-system.herokuapp.com/)
# Overview
Normally what happens is that on day of examination, every student has to look sitting arrangement and then rush towards the examination hall. The idea is to automate this whole process so that student can receive the seating arrangement on text message on the day of examination so that they can proceed directly towards the Hall.


# Features
* User can log in and register, custom authentication is used with jwt, 
   bcrypt.js, validator on the backend with node.js, express.js and  monogDb.
* For redirecting to other routes user has to be logged in if not then this project directly redirect to the login page .
* User can  add  student, teacher, exam, datesheet  if he/she  is logged in .
* CRUD on course, department, semester, teacher, subject, student, exam, room, datesheet .
* Build with MVC architecture

# Dependencies
1. bcryptjs 
2. cors 
3. express 
4. jsonwebtoken 
5. moment 
6.mongoose 
7. twilio 
8. validator 
9. axios 
10. bootstrap 
11. react-bootstrap 
12. react-redux 
13. reactstrap 
14. redux 
15. redux-thunk 
16. sweetalert 

## Installation
Install the dependencies and devDependencies and start the server.

```sh
$ npm install
```

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


