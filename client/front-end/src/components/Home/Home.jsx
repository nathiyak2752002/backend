import React, { useEffect,useState } from 'react'
import GetMethod from './../../ApiCalls/GetMethod';
import {useDispatch,useSelector} from 'react-redux'; 
import usePostMethod from './../../ApiCalls/PostMethod';
function Home() {

  const dispatch=useDispatch();

  const [user,setUser]=useState({
    name:"",
    age:""
  });

  const {name,age}=user;

  const postUrl=[
    {
      id:1,
      value:name,
      label:"Name",
      name:"name"
    },
    {
      id:2,
      value:age,
      label:"Age",
      name:"age"
    }
  ]
  const {GetDataApi,response,loading,error}=GetMethod();

  const {PostDataApi}=usePostMethod();



  useEffect(()=>{
    GetDataApi("/post/get","")
  },[]);

  if(loading)
  {
    <div>Loading...</div>
  }

  if(error)
  {
    <div>{error}</div>
  }


  const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }

  const addChange=()=>{
    if(name && age)
    {


      const data={
        name:name,
        age:Number(age)
      }

      PostDataApi("/post/create","",data)
      
    }
  }
  return (
    <div className='p-4'>


<div>

  {postUrl?.map((item,index)=>{
    return(
      <div key={index}>
<label>{item?.label}</label>
<div>
  <input type="text" className="border p-2" placeholder={`Please Enter ${item?.label}`} value={item?.value} name={item?.name} onChange={handleChange}/>
  </div>
      </div>
    )
  })}
</div>

<div className='mt-3 mb-3'><button onClick={addChange} className='border p-2 bg-blue-500 rounded cursor-pointer text-white'>+ Add User</button></div>

{response?.data?.length>0?<>

{response?.data?.map((item,index)=>{
  return(
    <div key={index} className='card border p-2 rounded mb-3 mt-2'>
      {item?.name}
    </div>
  )
})}
</>:<>No Data Found</>}
    </div>
  )
}

export default Home