import React, { useState } from 'react';

const RegisterPage: React.FC = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		address: '',
		postalCode: '',
		city: '',
		country: '',
		province: '',
		phoneNumber: ''
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSignup = (e: React.FormEvent) => {
		e.preventDefault();
		// Placeholder for backend integration
		console.log(formData);
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-jotrack-gray">
			<div className="w-full max-w-lg p-8 space-y-6 bg-white rounded-xl shadow-lg">
				<h1 className="text-2xl font-extrabold text-center cursor-pointer hover:text-jotrack-purple" onClick={() => window.location.href = '/'}>JoTrack</h1>
				<form className="grid grid-cols-2 gap-4" onSubmit={handleSignup}>
					{Object.keys(formData).map((key) => (
						<input
							key={key}
							type={key === 'email' ? 'email' : key === 'password' ? 'password' : 'text'}
							name={key}
							placeholder={key.replace(/([A-Z])/g, ' $1').trim()}
							className="p-2 border rounded-md col-span-1"
							onChange={handleChange}
							required
						/>
					))}
					<button type="submit" className="col-span-2 py-2 mt-4 font-semibold text-white bg-jotrack-purple rounded-md hover:bg-purple-700">Sign up</button>
				</form>
				<p className="text-sm text-center text-gray-600">Already a member? <button className="font-semibold text-jotrack-purple hover:underline" onClick={() => window.location.href = '/login'}>Sign in</button></p>
			</div>
		</div>
	);
};

export default RegisterPage;
