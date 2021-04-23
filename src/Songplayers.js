import React, { useState, useRef, useEffect} from 'react';
import * as FaIcons from "react-icons/fa";
import {BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5";
import {IconContext} from 'react-icons'

function Songplayers({currentsong, setsongs, setcurrentsong, isplaying, setisplaying ,audioRef,  songinfo, setsonginfo, songs}){
useEffect(() => {
	const Newgana = songs.map((song)=>{
		if (song.id === currentsong.id){
			return{
				...song,
				Active:true,
			};
		}else{
				return{
					...song,
					Active:false,

				};
			}
			
		}
		
		
		);
		setsongs(Newgana);

}, [currentsong])
	
	const timehandler =(e)=>{
	const current= e.target.currentTime;
	 const duration =e.target.duration;
	 const roundcurrent = Math.round(current);
	 const roundduration = Math.round(duration);
	 const animation =Math.round((roundcurrent/roundduration)*100)
	setsonginfo({...songinfo, currentTime:current , duration, animationper:animation})
	}
	
	const clickhandler =()=>{
		
	
		if(isplaying){
			audioRef.current.pause();
			setisplaying(!isplaying)
		}else{
			audioRef.current.play();
			setisplaying(!isplaying)
			
		}
		
	
	}
	const Mathcorrect =(e)=>{
		return(
		(Math.floor(e/60)) + ':' + ('0' + Math.floor(e%60)).slice(-2)
		)
		
	}
	const changehandle =(e) =>{
		audioRef.current.currentTime= e.target.value;
		setsonginfo({...songinfo, currentTime:e.target.value})
		
		
	}
	const skip_handle = (direction)=>{

		const currentIndex = songs.findIndex((song) => song.id === currentsong.id)
		if(direction == "S_forward"){
			setcurrentsong(songs[(currentIndex +1) % songs.length] );
		} else if(direction == "S_backward"){
				if((currentIndex-1) == -1){
					setcurrentsong(songs[songs.length -1])
		/*....................add.............................*/
		if(isplaying){
			const promise = audioRef.current.play();
			if(promise !== undefined)
			promise.then((audio)=>{
				audioRef.current.play();
			}
			
			
			)
		}
		 //.................remove.................................//
	return;
				}
				setcurrentsong(songs[(currentIndex -1) % songs.length] );		

		}
		if(isplaying){
		
			const promise = audioRef.current.play();
			if(promise !== undefined)
			promise.then((audio)=>{
				audioRef.current.play();
			}
			
			
			)
		}
		
}
const trackAni ={
	transform: `translateX(${songinfo.animationper}%)`
}
const anmat={
background: `linear-gradient(to right, ${currentsong.Color[0]}, ${currentsong.Color[1]})`
}
const ender = async() =>{

	const currentIndex = songs.findIndex((song) => song.id === currentsong.id)
		
			await setcurrentsong(songs[(currentIndex +1) % songs.length] );
	if(isplaying) audioRef.current.play();
	



}

	return(
		<IconContext.Provider value={{color: "white"}}>
	<div className='player'>
	<div className="time_control">
	
	<p>{Mathcorrect(songinfo.currentTime)}</p>
	<div className="track" style={anmat}>
	<input type="range" min={0} max={songinfo.duration || 0} value={songinfo.currentTime} onChange={changehandle}></input>
	<div className="animation_track" style={trackAni} ></div>
	</div>
	<p>{songinfo.duration ? Mathcorrect(songinfo.duration) : "0:00"} </p>
	
	</div>
	<div className="play_control">
	<IoPlaySkipBack className="icons" onClick={()=> skip_handle('S_backward')}/>
	
	
	{
		isplaying && (
<FaIcons.FaPause className="icons" onClick={clickhandler} />
		)

}{ !isplaying && (
		<FaIcons.FaPlay className="icons" onClick={clickhandler} />
)
}

	<IoPlaySkipForward  className="icons" onClick={()=> skip_handle('S_forward')}/>
	<audio onLoadedMetadata={timehandler} onTimeUpdate={timehandler} ref={audioRef} src={currentsong.Audio} onEnded={ender}></audio>

	</div>

	</div>
	
	</IconContext.Provider>
	)
	
}


export default Songplayers
