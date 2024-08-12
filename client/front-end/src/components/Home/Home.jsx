import React,{useEffect, useState} from 'react'
import ModalPopup from './ModalPopup';
import Cards from './Cards';
import GetMethod from '../../ApiCalls/GetMethod';
import LoginModalpopup from '../../middlewares/LoginModalpopup';
import { useDispatch, useSelector } from 'react-redux';
import ReactPlayer from 'react-player'
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


  const playing=(params)=>{
    console.log(params);
    window.alert("kalai")
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



<ReactPlayer url='https://www.youtube.com/watch?v=RGYQ-_lAnRs' 

// onPlayPause={playPauseHandler}
           playing={playing}
           controls={true}
          //  onRewind={rewindHandler}
          //  onForward={handleFastFoward}
          //  played={played}
          //  onSeek={seekHandler}
          //  onSeekMouseUp={seekMouseUpHandler}
          //  volume ={volume}
          //  onVolumeChangeHandler = {volumeChangeHandler}
          //  onVolumeSeekUp = {volumeSeekUpHandler}
          //  mute = {muted}
          //  onMute = {muteHandler}
          //  playRate = {playbackRate}
          //  onPlayRate = {playBackRateHandler}
          //  duration = {formatDuration}
          //  currentTime = {formatCurrentTime}
/>




<div>
  <Cards response={response}/>
</div>
</div>
  )
}

export default Home