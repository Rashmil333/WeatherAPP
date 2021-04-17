import React from 'react';

const Weatherinputdiv=()=>{

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
								<input id="weatherinput" type="search" placeholder="City Name"/>
								
							</div>
							<div className="col-xl-3 col-lg-3 col-md-3  ">
								
							</div>
						</div>
					</div>
					
					
				</div>
				<div className="col-xl-3  col-lg-3 col-md-3 ">
					
				</div>
			</div>

		 </div>

		</>);
}

export default Weatherinputdiv;