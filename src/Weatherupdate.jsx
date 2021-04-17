import React,{useState,useEffect} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import axios from "axios";
import CloudQueueIcon from '@material-ui/icons/CloudQueue';

const img1="https://i.ibb.co/sqbyrf5/Mostlysunny.png";
const img2="https://i.ibb.co/hmG00VR/rainy2logo.png";
const img3="https://i.ibb.co/Jv0sDsm/hazylogo.png";
const img4="https://i.ibb.co/w7yCB89/partiallysunny.png";
const Weatherupdate=()=>{

	const [state,setstate]=useState();
	const [city,setcity]=useState(null);
	const [temprature,settemprature]=useState(32);
	const [humidity,sethumidity]=useState(0);
	const [tempmax,settempmax]=useState(0);
	const [tempmin,settempmin]=useState(0);
	const [image,setimage]=useState();


	const inputchange=(event)=>{
		console.log(event.target.value);
		setstate(event.target.value);
	}

	useEffect(()=>{
		
	async function getData(){
			const res=await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${state}&appid=886705b4c1182eb1c69f28eb8c520e20`);
			console.log(res);
			console.log(res.data.name);
			setcity(res.data.name);
			settemprature(res.data.main.temp);
			sethumidity(res.data.main.humidity);
			settempmax(res.data.main.temp_max);
			settempmin(res.data.main.temp_min);
			var tempo=((res.data.main.temp)-273.15).toFixed(0);
			console.log(tempo);
			if(tempo>=32){
				setimage(img1);
			}
			else if(tempo>27&&tempo<32){
				setimage(img4);
			}
			else if(tempo>=20&&tempo<=27){
				setimage(img2)

			}
			else{
				setimage(img3);
			}
			
		

		}

		
		getData();
	})


	return(<>
		
		 <div className="container">
			<div className="row">
				<div className="col-xl-3 col-lg-3 col-md-3">

				</div>
				<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" id="weatherdiv">
					<div className="container">
						<div className="row">
							<div className="col-xl-3 col-lg-3 col-md-3 ">

							</div>
							<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
								<input id="weatherinput" type="search" placeholder="City Name" value={state} onChange={inputchange} autocomplete="off"/>
							</div>
							<div className="col-xl-3 col-lg-3 col-md-3  ">
								
							</div>
						</div>	
					</div><br/><br/>
					<div className="container">
						<div className="row">
							<div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12"id="text_white">
									{!city? (<p>No data found</p>):
									(<div>	
									<img src={image}/>
									<h1 >{state}</h1>
									<h1> {(temprature-273.15).toFixed(0)}<sup>o</sup>C</h1>
									<h1> Humidity:{humidity}</h1>
									<h3>Max:{(tempmax-273.15).toFixed(0)}<sup>o</sup>C<br/>Min:{(tempmin-273.15).toFixed(0)}<sup>o</sup>C</h3>
									</div>)

								}
							</div> 
							<div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12" id="animatediv">
								<div ><img src="https://i.ibb.co/7gKSxrS/animated-weather-icons-5-2.gif"/></div>
								
							</div> 
						</div>
					</div>
				</div>
					
			</div>

		 </div>

		</>)
}

export default Weatherupdate;


