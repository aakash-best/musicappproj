import React from "react";
import Audioa from './Alan Walker - Sing Me To Sleep.webm'
import Audiob from './Alan Walker - The Spectre.webm'
import Audioc from './Alan Walker -Alone.webm'
import Audiod from './Ed Sheeran - Beautiful People.webm'
import Audioe from './Ed Sheeran - Perfect.webm'
import Audiof from './Eminem - Lucky You.webm'
import Audiog from "./I Don't Care.webm"
import Audioh from './Imagine Dragons - Natural.webm'
import Audioi from './Imagine Dragons - Whatever It Takes.webm'
import Audioj from './Marshmello - Alone.webm'
import Audiok from './Marshmello ft. Bastille - Happier.webm'
import first from './1.jpg'
import second from './2.jpg'
import third from './3.jpg'
import forth from './4.jpg'
import fifth from './5.jpg'
import sixth from './6.jpg'
import seventh from './7.jpg'









const Data =() =>{
	
	
	
	return[
	{
		id:1,
		Music_name:'Sing Me To Sleep',
		Artist_name:'Alan Walker ',
		Audio:Audioa,
		Active:true,
		Color:['rgb(25 95 154);', 'rgb(130 205 194)', 'white'],
		Image:first,
		background:"#185e9a"

	},
	{
		id:2,
		Music_name:'The Spectre',
		Artist_name:'Alan Walker',
		Audio:Audiob,
		Active:false,
		Color:['rgb(152, 148, 148)', 'rgb(2 13 25)'],
		background:"#989494",
		Image:second,
	}
	,
	{
		id:3,
		Music_name:'Alone',
		Artist_name:'Alan Walker',
		Audio:Audioc,
		Active:false,
		Color:['rgb(203, 170, 204)', 'rgb(0 4 44)'],
		Image:third,
		background:"#cbaacc",
		
	}
	,
	{
		id:4,
		Music_name:'Beautiful People',
		Artist_name:'Ed Sheeran',
		Audio:Audiod,
		Active:false,
		Color:['rgb(149, 145, 222)', 'rgb(203 109 92)'],
		Image:forth,
		background:"#9591de"
		
	}
	,
	{
		id:5,
		Music_name:'Perfect',
		Artist_name:'Ed Sheeran',
		Audio:Audioe,
		Active:false,
		Color:['rgb(222, 191, 145)en', 'rgb(47 136 194)'],
		Image:fifth,
		background:"#debf91"
		
	}
	,
	{
		id:6,
		Music_name:'Lucky You',
		Artist_name:'Eminem',
		Audio:Audiof,
		Active:false,
		Color:['rgb(178, 222, 145)', 'rgb(244 86 157)'],
		Image:sixth,
		background:"#b2de91"
		
	}
	,
	{
		id:7,
		Music_name:"I Don't Care",
		Artist_name:'Ed Sheeran',
		Audio:Audiog,
		Active:false,
		Color:['rgb(101, 123, 142)', 'rgb(123 169 99)'],
		Image:seventh,
		background:"#657b8e"
	}
	,
	
	
	]
			
		
		
		
	
}
export default Data