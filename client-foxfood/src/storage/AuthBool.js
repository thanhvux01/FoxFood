import axios from "axios";

export const Authbool = async (token) => {
    try{
       if(!token){
          return false;
       }
    
        const data = await axios.get('http://localhost:8000/api/gate',{headers: {Authorization: 'Bearer ' + token, }});
        if(data['data']['data']){
            return true;
        }
       }catch(err){
           return false;
       }
}