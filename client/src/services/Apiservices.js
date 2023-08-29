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