import React from 'react';
import traindata from "./traindata.json";
import './Traintable.css'
function Traintable() {
    // let navigate = useNavigate();
	
    const DisplayData=traindata.map(
		(info)=>{
			return(
				<tr>
					<td>{info.trainName}</td>
					<td>{info.trainNumber}</td>
					<td>{info.departureTime.Hours+ info.departureTime.Minutes  + info.departureTime.Seconds}</td>
					<td>{info.seatsAvailable.sleeper}</td>
					<td>{info.seatsAvailable.AC}</td>
					<td>{info.price.sleeper}</td>
					<td>{info.price.AC}</td>
				</tr>
			)
		}
	)

	return(
		<div name="traintable">
			<table class="table table-striped">
				<thead>
					<tr>
					<th>Train Name</th>
					<th>Train Number</th>
					<th>Train Time</th>
					<th>Train Seats sleeper</th>
					<th>Train Seats AC</th>
					<th>Train price sleeper</th>
					<th>Train price AC</th>
					</tr>
				</thead>
				<tbody>
				
					
					{DisplayData}
					
				</tbody>
			</table>
			
		</div>
	)
}




export default Traintable;

