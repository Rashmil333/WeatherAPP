import React from 'react';

function Apps(){
  var greeting="Hello";
	
	var d=new Date();
var hours=d.getHours();

if(hours>=1&& hours<12){
	greeting="Good Morning";
}
else if(hours>=12&& hours<=17){
	greeting="Good Afternoon";

}
else if(hours>17&& hours<20){
	greeting="Good Evening";
}
else if(hours>=20&& hours<24){
	greeting="Good night";
}

return(<div style={{backgroundColor:'Grey',textAlign:'center',color:'white',width:'50%',marginLeft:'25%'}}>
	  <p style={{fontWeight:'bold',fontSize:'30px'}}>Hello Sir,{greeting}</p>
	</div>);
}

const fname="Rashmil";
const lname="Rajpoot";

function parents(){
	return("Bharat Singh and Sukrati Rajpoot");
}

function add(a,b){
   return(a/b);
	
}

export default Apps;
export{fname,lname,parents,add};

