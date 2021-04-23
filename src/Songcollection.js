import React from "react";
import Songlibrary from './Songlibrary'
function Songcollection({songs, library_move, setlibrary_move, setsongs, setcurrentsong ,isplaying, setisplaying ,audioRef}){
		
	

		return(
		
		
		<div class={`libray ${library_move ? "library_actives": ""}`}>
		<h1>Libray</h1>
		<div className="library_songs">
		{
			songs.map((song) => <Songlibrary  setsongs={setsongs} audioRef ={audioRef }  setcurrentsong={ setcurrentsong} isplaying={isplaying} setisplaying={setisplaying} song={song} songs={songs} id={song.id} key={song.id}/>
			
			
		)
			
		}
		</div>
		
		</div>
		
		
		
		
		)
		
		
		
	}



export default Songcollection