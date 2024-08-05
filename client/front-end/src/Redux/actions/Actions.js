import usePostMethod from "../../ApiCalls/PostMethod";


export const PostMethodAction=(url,queryparamsid,data)=>async(dispatch)=>{

    const {PostDataApi, response, loading, error}=usePostMethod();
    console.log(url,queryparamsid,data,"klkl")
    try {
        
        const response=await PostDataApi(url,queryparamsid,data);
        console.log(response);
    } catch (error) {
        
    }
}