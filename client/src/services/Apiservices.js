import userAxios from '../Axios/user'
export const createuser = async(userdata)=>{
    try{
        const response = await userAxios.post('/signup',userdata);
        return response.data
    }
    catch(error){
        console.log(error)
    }
}
export const loginuser = async(userdata)=>{
    try{
        const response = await userAxios.post('/login',userdata)
        return response.data 
    }
    catch(error){
        console.log(error)
    }
}
export const addstudents = async(userdata)=>{
    try{
        const response = await userAxios.post('/addstudent',userdata)
        return response.data 
    }
    catch(error){
        console.log(error)
    }
}
export const liststudents = async()=>{
    try{
        const response = await userAxios.get('/liststudents')
        return response.data
    }
    catch(error){
        console.log(error)
    }
}