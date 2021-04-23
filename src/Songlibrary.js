import React, {useEffect }from "react";


const Songlibrary =({song, songs, setsongs,  setcurrentsong ,isplaying, setisplaying ,audioRef, id  }) =>{
	

	const switchhandler =() =>{
		 setcurrentsong(song);
		 const Newgana = songs.map((song)=>{
			if (song.id === id){
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



		if(isplaying){
			const promise = audioRef.current.play();
			if(promise !== undefined)
			promise.then((audio)=>{
				audioRef.current.play();
			}
			
			
			)
		}
		 
	}
	
	
	
	
	return(
	
	<div className={`library_song ${song.Active ? "library_active": ""}`} onClick={switchhandler}>
	
<img src={song.Image} />
<div>
	<h2>{song.Music_name}</h2>
	<h2>{song.Artist_name}</h2> 
	</div>
	</div>
	
	)
		
		
	
}
export default Songlibrary