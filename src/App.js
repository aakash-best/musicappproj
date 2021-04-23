import React, {useState, useRef } from "react";
  import Song from './Song'
  import Songplayers from './Songplayers'
  import Songcollection from './Songcollection'
  import Songlibrary from './Songlibrary'
  import Data from './Data'
import Nav from "./Nav"
function App (){
		const [songs, setsongs]= useState(Data());
		const [currentsong, setcurrentsong] = useState(songs[0]);
		const [isplaying, setisplaying] = useState(false);
		const audioRef = useRef(null);

		const [songinfo, setsonginfo ] = useState(
		{
		currentTime:0,
		duration:0,
		animationper:0,
		})
		const [library_move, setlibrary_move] = useState(false);
		const anmat={
			background: `${currentsong.background}`
			}

		return(
		< div style={anmat} className={`app ${library_move ? "boddy": ""}`}>
		<Nav library_move={library_move} setlibrary_move={setlibrary_move} />
		<Song currentsong={currentsong}  />
		
		<Songplayers songs={songs} setsongs={setsongs} audioRef ={audioRef }  songinfo={songinfo} setsonginfo={setsonginfo} isplaying={isplaying} setisplaying={setisplaying} currentsong={currentsong} setcurrentsong={setcurrentsong} />
		<Songcollection audioRef ={audioRef } library_move={library_move} setlibrary_move={setlibrary_move} setcurrentsong={ setcurrentsong} isplaying={isplaying} setisplaying={setisplaying}  songs={songs} setsongs={setsongs} />
		</div>
		
		)
		
		
		
	}
	
	




 export default App