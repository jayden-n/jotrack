import { ReactEventHandler, useState } from 'react';
import { toast } from 'react-toastify';
import ChangePassword from './ChangePassword'

const DashboardLayout: React.FC = () => {

	const [openChange, setChange] = useState(false)

	const handlePassword = (e: React.FormEvent<HTMLButtonElement>) => {
		e.preventDefault()
		setChange(!openChange)
	}

	const handleSave = (e: React.FormEvent<HTMLButtonElement>) => {
		e.preventDefault()
		toast.success('Changes successfully updated.');
	};

	const inputStyle = 'w-full border p-2 font-normal shadow-md font-outfit text-lg rounded-md border-gray '
	const divStyle = 'mb-4 flex flex-wrap gap-x-16 md:pl-8 pt-5 '

	return (
		<div className="mt-10 md:ml-10 mx-5 md:mx-0 grid md:grid-cols-6 grid-cols-1">
			
			<p className="text-purple font-poppins font-bold text-3xl">
				Hello
				<span className="text-gray font-normal  text-3xl">, Admin</span>
			</p>

			<form className="border-white bg-white rounded-xl p-4 col-start-1 col-span-5 w-full shadow-lg mb-6 md:w-2/3 mt-5 ">
				{/* ============================ Name div ============================ */}
				<div className={`${divStyle}`}>

					{/* ============================ first name ============================ */}
					<div className="w-full sm:w-2/5  mb-2 ">
						<label className="block text-lg font-outfit mb-3">First name</label>
						<input
							type="text"
							readOnly
							id="first-name"
							placeholder="Any"
							className={`${inputStyle}`}
						/>
					</div>

					{/* ============================ last name ============================ */}
					<div className="w-full sm:w-2/5  mb-2 ">
						<label className="block text-lg font-outfit mb-3">Last name</label>
						<input
							type="text"
							readOnly
							id="last-name"
							placeholder="Body"
							className={`${inputStyle}`}						/>
					</div>
				</div>

				{/* ============================ Phone & Email div ============================ */}

				<div className={`${divStyle}`}>

					{/* ============================ Phone div ============================ */}
					<div className="w-full sm:w-2/5   mb-2 ">
						<label className="block text-lg font-outfit mb-2">
							Phone number
						</label>

						<input
							type="number"
							id="phone"
							className={`${inputStyle}`}			
							placeholder="555555"
						/>
					</div>

					{/* ============================ Email div ============================ */}
					<div className="w-full sm:w-2/5 mb-2 ">
						<label className="block text-lg mb-2 font-outfit">
							Email
						</label>

						<input
							type="email"
							id="email"
							className={`${inputStyle}`}
							placeholder="anybody@gmail.com"
						/>
					</div>
				</div>

				{/* ============================ Address div ============================ */}

				<div className="mb-4 md:pl-8">
					<label className="block text-lg font-outfit mb-2">Address</label>
					<input
						type="text"
						id="address"
						className="w-full md:w-2/3 font-normal font-outfit border p-2 
						rounded-md border-gray text-lg shadow-md "
						placeholder="123 st North, Toronto, ON, R2M4Z3"
					/>
				</div>

				{/* ============================ Save Button ============================ */}
				<div className="flex justify-end ">
					<button
						className="bg-lightblue text-white font-outfit font-medium text-md px-5 py-1
             			 rounded-lg border  mb-4 border-gray hover:opacity-95 shadow-md	"
						 onClick={handleSave}
					>
						Save changes
					</button>
				</div>
				{/* ============================ Password div ============================  */}

				<hr className="mb-4"></hr>
				<div className="pl-5 pt-5">
					<div className="mb-4 flex flex-wrap bg-lightgrey w-full md:w-2/3  shadow-lg rounded-md p-3 ">
						<div className="w-full">
							
							<div className="flex items-center justify-between mb-2">
								<p className="text-xl font-semibold font-outfit">Password</p>
								{/* ============================ Change Button ============================ */}
								<button className="border md:px-8 px-4 py-0.5 hover:bg-indigo 
								 border-gray text-md shadow-md rounded-lg bg-white font-outfit text-normal"
								 onClick={handlePassword}
								 >
									Change
								</button>
							</div>

							<p className="text-md mt-2 mb-3 font-outfit">
								change your password here
							</p>
						</div>
					</div>
				</div>
			</form>
		
			{openChange && <ChangePassword onClose={() => setChange(false)} />}
			
		</div>
	);
};
export default DashboardLayout;
