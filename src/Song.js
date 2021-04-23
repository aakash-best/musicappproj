import React from "react";
 import Nav from './Nav'
function Song({currentsong}){
	return(
	
	<div className="song_container">
	
	<img src={currentsong.Image} />
	<h1>{currentsong.Music_name}</h1>
	<p>{currentsong.Artist_name}</p> 
	
	</div>
	
	)
	
}

export default Song