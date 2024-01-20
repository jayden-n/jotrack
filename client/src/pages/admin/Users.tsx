import React from "react";
import NavBar from './NavBar';
import {Link} from "react-router-dom"
// import SearchIcon from '../../components/assets/search.png'
import { CiSearch } from "react-icons/ci";

export default function Users() {

	const getUserData = () => {
		return (
			<div>

				{/*  ==================== User Applications  ====================*/}
				<table className="bg-white rounded-lg w-1/4">

					<thead>
						<tr>
							<th>Application</th>
							<th>Status</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				</table>
				{/* ==================== User Info =================== */}
				<div>
					<div>
						<p>User ID
							<span>

							</span></p>

						<p>Name
							<span>
								
							</span></p>
						
						<p>Email
							<span>
								
							</span>
						</p>

						<p>Address
							<span>
								
							</span>
						</p>

						<p>Phone
							<span>
								
							</span>
						</p>
					</div>

					<div>
						<Link to={"/admin/user/activity"}
						className='bg-green font-outfit text-white text-normal text-center py-1
                        rounded-md  hover:opacity-90 ring-0.5 col-end-6  w-full md:w-2/5 '
						>
							User Activity
						</Link>
					</div>
					
				</div>
			</div>
		)
	}
	

	return (
		<div>
			<NavBar/>
			<div className="grid grid-cols-6 mt-10">
				
				<input type="search" placeholder="search by user name/id"
				 className=" w-full  col-start-2 col-end-5 font-outfit text-normal text-sm px-3 py-3 rounded-l-xl "/>

				 <button className="bg-btnPurple text-white font-outfit text-normal text-md w-full md:w-2/5
                        rounded-r-xl hover:opacity-90 ring-0.5 flex justify-center items-center">
							
					<CiSearch className="text-3xl"/>
				</button>
			</div>
		</div>
	);
}
