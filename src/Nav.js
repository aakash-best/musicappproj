import React from "react";


const Nav =({library_move, setlibrary_move}) =>{
	
	
	
	return(
	<div className="navbar">
		<h1>Music</h1>
		<button onClick={()=> setlibrary_move(!library_move)}>Library</button>

			</div>
		)
		
		
	
}
export default Nav