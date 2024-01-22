import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
	const [error, setError] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [firstname, setFirstname] = useState<string>('');
	const [lastname, setLastname] = useState<string>('');
	const [address, setAddress] = useState<string>('');
	const [postal, setPostal] = useState<string>('');
	const [city, setCity] = useState<string>('');
	const [country, setCountry] = useState<string>('');
	const [province, setProvince] = useState<string>('');
	const [phone, setPhone] = useState<string>('');
	const navigate = useNavigate();

	// Ensure these handlers are used in the input fields
	const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	const handleFirstnameChange = (event: ChangeEvent<HTMLInputElement>) => {
		setFirstname(event.target.value);
	};

	const handleLastnameChange = (event: ChangeEvent<HTMLInputElement>) => {
		setLastname(event.target.value);
	};

	const handleAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
		setAddress(event.target.value);
	};

	const handlePostalChange = (event: ChangeEvent<HTMLInputElement>) => {
		setPostal(event.target.value);
	};

	const handleCityChange = (event: ChangeEvent<HTMLInputElement>) => {
		setCity(event.target.value);
	};

	const handleCountryChange = (event: ChangeEvent<HTMLInputElement>) => {
		setCountry(event.target.value);
	};

	const handleProvinceChange = (event: ChangeEvent<HTMLInputElement>) => {
		setProvince(event.target.value);
	};

	const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
		setPhone(event.target.value);
	};



	// Corrected type for the submit event
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setError(''); // Clear any existing errors
		// Handle the form submission here, using email and password states
		console.log({ email, password, firstname, lastname, address, postal, city, country, province, phone });

		// Check for empty fields and set the error state if any are found
		if (!firstname) {
			setError("First name field cannot be blank.");
			return;
		} else if (!lastname) {
			setError("Last name field cannot be blank.");
			return;
		} else if (!email) {
			setError("Email field cannot be blank.");
			return;
		} else if (!password) {
			setError("Password field cannot be blank.");
			return;
		} else if (!address) {
			setError("Address field cannot be blank.");
			return;
		} else if (!postal) {
			setError("Postal code field cannot be blank.");
			return;
		} else if (!city) {
			setError("City field cannot be blank.");
			return;
		} else if (!country) {
			setError("Country field cannot be blank.");
			return;
		} else if (!province) {
			setError("Province field cannot be blank.");
			return;
		} else if (!phone) {
			setError("Phone field cannot be blank.");
			return;
		}

		// If all fields are valid, navigate to the dashboard
		navigate('user/dashboard');
	};


	return (
		<div className="flex h-screen bg-e6e0e0">
			<form onSubmit={handleSubmit} className="w-full flex flex-col md:flex-row">

				<div className="flex flex-col justify-between p-10 bg-white w-full md:w-1/2" style={{ maxWidth: '500px' }}>
					<div>
						<div className="flex justify-center">
							<button
								className="text-5xl font-extrabold text-purple justify-center items-center my-20"
								onClick={() => navigate('/')}
							>
								<h1> JoTrack</h1>
							</button>
						</div>
						<hr className="border-t border-gray-300 my-8" style={{ width: '402px' }} />
						<h2 className="text-4xl font-semibold text-center my-12">Sign up</h2>
						<p className="text-2xl font-orienta text-gray opacity-32 text-center mt-20">Already Have An Account?</p>
						<div className="flex justify-center">
							<button
								className="text-4xl font-regular text-white bg-btnPurple my-10 mx-auto w-full px-6 py-3"
								onClick={() => navigate('/login')}
								style={{ width: '382px', height: '87px' }}
							>
								Sign in
							</button>
						</div>
					</div>

				</div>
				<div className="flex flex-col justify-center items-center w-full md:w-1/2 flex-1 p-10 content-center">
					<div className="mb-6 flex justify-center">
						<div className="mr-8 flex justify-center">
						<input
							type="text"
							value={firstname}
							placeholder="first name"
							className="mb-6 p-4 text-3xl bg-white border-none rounded shadow-inner w-full md:w-auto"
							onChange={handleFirstnameChange}
							style={{ width: '621px', height: '95px' }}
						/>
						</div>
						<input
							type="text"
							value={lastname}
							placeholder="last name"
							className="mb-6 p-4 text-3xl bg-white border-none rounded shadow-inner w-full md:w-auto"
							onChange={handleLastnameChange}
							style={{ width: '621px', height: '95px' }}
						/>
					</div>

					<div className="mb-6 flex justify-center">
						<div className="mr-8 flex justify-center">
						<input
							type="email"
							value={email}
							placeholder="email"
							className="mb-6 p-4 text-3xl bg-white border-none rounded shadow-inner w-full md:w-auto"
							onChange={handleEmailChange}
							style={{ width: '621px', height: '95px' }}
						/>
						</div>
						<input
							type="password"
							value={password}
							placeholder="password"
							className="mb-6 p-4 text-3xl bg-white border-none rounded shadow-inner w-full md:w-auto"
							onChange={handlePasswordChange}
							style={{ width: '621px', height: '95px' }}
						/>
					</div>

					<div className="mb-6 flex justify-center">
						<div className="mr-8 flex justify-center">
						<input
							type="text"
							value={address}
							placeholder="address"
							className="mb-6 p-4 text-3xl bg-white border-none rounded shadow-inner w-full md:w-auto"
							onChange={handleAddressChange}
							style={{ width: '621px', height: '95px' }}
						/>
						</div>
						<input
							type="text"
							value={postal}
							placeholder="postal code"
							className="mb-6 p-4 text-3xl bg-white border-none rounded shadow-inner w-full md:w-auto"
							onChange={handlePostalChange}
							style={{ width: '621px', height: '95px' }}
						/>
					</div>

					<div className="mb-6 flex justify-center">
						<div className="mr-8 flex justify-center">
						<input
							type="text"
							value={city}
							placeholder="city"
							className="mb-6 p-4 text-3xl bg-white border-none rounded shadow-inner w-full md:w-auto"
							onChange={handleCityChange}
							style={{ width: '621px', height: '95px' }}
						/>
						</div>
						<input
							type="text"
							value={country}
							placeholder="country"
							className="mb-6 p-4 text-3xl bg-white border-none rounded shadow-inner w-full md:w-auto"
							onChange={handleCountryChange}
							style={{ width: '621px', height: '95px' }}
						/>
					</div>

					<div className="mb-6 flex justify-center">
						<div className="mr-8 flex justify-center">
						<input
							type="text"
							value={province}
							placeholder="province"
							className="mb-6 p-4 text-3xl bg-white border-none rounded shadow-inner w-full md:w-auto"
							onChange={handleProvinceChange}
							style={{ width: '621px', height: '95px' }}
						/>
						</div>
						<input
							type="text"
							value={phone}
							placeholder="phone number"
							className="mb-6 p-4 text-3xl bg-white border-none rounded shadow-inner w-full md:w-auto"
							onChange={handlePhoneChange}
							style={{ width: '621px', height: '95px' }}
						/>
					</div>

					<div className="flex justify-center w-full md:w-auto">
						<button
							type="submit"
							className="w-full md:w-auto px-6 py-2 text-5xl font-regular text-white bg-btnPurple"
							style={{ height: '87px', width: '999px', maxWidth: '999px'}}
						>
							Sign up
						</button>
					</div>
					<div className="flex justify-center w-full md:w-auto">
						{/* Error message display */}
						{error && <div className="text-red-500 text-center mt-2">{error}</div>}
					</div>
				</div>
			</form>
		</div>
	);
};

export default RegisterPage;
