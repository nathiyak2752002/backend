import React,{useEffect, useState} from 'react'
import ModalPopup from './ModalPopup';
import Cards from './Cards';
import GetMethod from '../../ApiCalls/GetMethod';
import LoginModalpopup from '../../middlewares/LoginModalpopup';
import { useDispatch, useSelector } from 'react-redux';

function Home() {

  const state=useSelector((state)=>state?.Login);

  const {GetDataApi,response,loading,error}=GetMethod();
  const getApi=async()=>{
    try {
 await GetDataApi("/image/get","")
    } catch (error) {
    }
  }
  useEffect(()=>{
    getApi();
  },[state?.loginModal])
  if(loading)
  {
    <div>Loading...</div>
  }
  if(error)
  {
    <div>{error}</div>
  }
  return (
    <div>
<div>
  <ModalPopup
  getApi={getApi}
  state={state?.loginModal}

  />
</div>
<div>
  <LoginModalpopup
  state={state?.loginModal}
  />
</div>
<div>
  <Cards response={response}/>
</div>
    </div>
  )
}

export default Home