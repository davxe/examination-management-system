export const findTeacher =(teacher,id)=>{
    return teacher.find(teacher=>teacher._id===id)
}