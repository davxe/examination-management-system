export const findSubject =(subject,id)=>{
    return subject.find(subject=>subject._id===id)
}