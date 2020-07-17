export const findCourse =(course,id)=>{
    return course.find(course=>course._id===id)
}