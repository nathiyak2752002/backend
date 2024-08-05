
import React,{useState} from 'react';
import InstanceBaseUrl from '../Config/AxiosConfig';
function PostMethod() {
    const [response,setResponse]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState("");
    const PostDataApi=async(url,paramsid,data)=>{
       

        if(url)
        {
            const url=paramsid?`${url}/${paramsid}`:url;
            setLoading(true);
            try {
                const apiResponse=await InstanceBaseUrl.post(url,data);
                if(apiResponse)
                {
                    setResponse(apiResponse?.data);
                setLoading(false);
                }
            } catch (error) {
                setLoading(false);
                setError(error?.response?.data?.message);
            }finally
            {
                setLoading(false);
            }
        }
       
    }
  return {PostDataApi,response,loading,error};
}

export default PostMethod