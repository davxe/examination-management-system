export const findExam =(exam,id)=>{
    return exam.find(exam=>exam._id===id)
}