const DashboardLayout: React.FC = () => {
	return (
		<div className="mt-10 ml-10">
			<p className="text-purple font-poppins font-bold text-3xl">
				Hello
				<span className="text-gray font-normal  text-3xl">, Admin</span>
			</p>

			<form className="border-white bg-white rounded-xl p-4 w-full md:w-3/6 mt-5 ">
				<div className="mb-4 flex flex-wrap gap-x-16 pl-8 pt-5 ">
					<div className="w-full sm:w-2/5  mb-2 ">
						<label className="block text-sm font-outfit mb-3">First name</label>
						<input
							type="text"
							readOnly
							id="first-name"
							placeholder="Any"
							className="w-full border p-2 font-normal font-outfit text-sm rounded-sm border-gray "
						/>
					</div>

					<div className="w-full sm:w-2/5  mb-2 ">
						<label className="block text-sm font-outfit mb-3">Last name</label>
						<input
							type="text"
							readOnly
							id="last-name"
							placeholder="Body"
							className="w-full border p-2 font-normal font-outfit  text-sm rounded-sm border-gray"
						/>
					</div>
				</div>

				<div className="mb-4 flex flex-wrap gap-x-16 pl-8 ">
					<div className="w-full sm:w-2/5   mb-2 ">
						<label className="block text-sm font-outfit mb-2">
							Phone number
						</label>

						<input
							type="number"
							id="phone"
							className="w-full border p-2 font-normal font-outfit text-sm rounded-sm border-gray"
							placeholder="555555"
						/>
					</div>

					<div className="w-full sm:w-2/5 mb-2 ">
						<label className="block text-sm font-outfit mb-2 font-outfit">
							Email
						</label>

						<input
							type="email"
							id="email"
							className="w-full border p-2 font-normal font-outfit text-sm rounded-sm border-gray"
							placeholder="anybody@gmail.com"
						/>
					</div>
				</div>

				<div className="mb-4 pl-8">
					<label className="block text-sm font-outfit mb-2">Address</label>
					<input
						type="text"
						id="address"
						className="w-full md:w-2/3 font-normal font-outfit border p-2 rounded-sm border-gray text-sm"
						placeholder="123 st North, Toronto, ON, R2M4Z3"
					/>
				</div>

				<div className="flex justify-end ">
					<button
						className="bg-lightblue text-white font-outfit font-medium text-sm px-5 py-0.5
              rounded-md border font-sm mb-4 border-gray hover:opacity-95 place-self-center	"
					>
						Save changes
					</button>
				</div>

				<hr className="mb-4"></hr>
				<div className="pl-5 pt-5">
					<div className="mb-4 flex flex-wrap bg-lightgrey w-full md:w-2/3 rounded-md px-2 py-2 ">
						<div className="w-full">
							<div className="flex items-center justify-between mb-2">
								<p className="text-lg font-semibold font-outfit">Password</p>
								<button className="border px-8 py-0.5 hover:bg-indigo  border-gray text-sm rounded-lg bg-white font-outfit text-normal">
									Change
								</button>
							</div>
							<p className="text-sm mt-2 mb-3 font-outfit">
								change your password here
							</p>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};
export default DashboardLayout;
