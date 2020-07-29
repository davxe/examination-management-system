export const findSemester =(semester,id)=>{
    return semester.find(semester=>semester._id===id)
}