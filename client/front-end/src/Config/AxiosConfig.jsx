import axios from 'axios';
import EnvContext from '../EnvFiles/EnvFiles';

const InstanceBaseUrl=axios.create({
    baseURL:"http://localhost:8001/api",
    // headers:{
    //     "Authorization":"",
    //     "Content-Type": "application/json",
    //     "timeout" : 1000,
    // }
})


export default InstanceBaseUrl;