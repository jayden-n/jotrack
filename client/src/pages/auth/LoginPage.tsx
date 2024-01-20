import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

// Define a type for the user role
type UserRole = 'admin' | 'user' | null;

const LoginPage = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [role, setRole] = useState<UserRole>(null);
	const navigate = useNavigate();

	// Ensure these handlers are used in the input fields
	const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	// Corrected type for the submit event
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// Handle the form submission here, using email and password states
		console.log({ email, password, role });
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
					<h2 className="text-4xl font-semibold text-center my-12">Sign in</h2>
					<p className="text-2xl font-orienta text-gray opacity-32 text-center mt-20">Don't Have An Account?</p>
					<div className="flex justify-center">
					<button
						className="text-4xl font-regular text-white bg-btnPurple my-10 mx-auto w-full px-6 py-3"
						onClick={() => navigate('/register')}
						style={{ width: '382px', height: '87px' }}
					>
						Sign up
					</button>
					</div>
				</div>

			</div>
			<div className="flex flex-col justify-center items-center w-full md:w-1/2 flex-1 p-10 content-center">
				<h2 className="text-4xl font-semibold mb-20 text-center">Log into your account</h2>
				<div className="mb-14 flex justify-center">
					<input
						type="email"
						value={email}
						placeholder="Email"
						className="mb-6 p-4 text-3xl bg-white border-none rounded shadow-inner w-full md:w-auto"
						onChange={handleEmailChange}
						style={{ width: '798px', height: '107px' }}
					/>
				</div>
				<div className="flex justify-center">
					<input
						type="password"
						value={password}
						placeholder="Password"
						className="mb-6 p-4 text-3xl bg-white border-none rounded shadow-inner w-full md:w-auto"
						onChange={handlePasswordChange}
						style={{ width: '798px', height: '107px' }}
					/>
				</div>
				<hr className="border-t border-gray-300 my-8 mb-14 mx-auto w-1/3" />
				<div className="flex justify-center mb-28 space-x-14 md:w-auto">
					<button
						className={`px-12 py-4 text-3xl bg-white font-regular rounded-xl ${role === 'admin' ? 'bg-btnLightpink' : 'bg-transparent'}`}
						onClick={() => setRole('admin')}
					>
						Admin
					</button>
					<button
						className={`px-16 py-4 text-3xl bg-white font-regular rounded-xl ${role === 'user' ? 'bg-btnLightpink' : 'bg-transparent'}`}
						onClick={() => setRole('user')}
					>
						User
					</button>
				</div>
				<div className="flex justify-center w-full md:w-auto">
					<button
						type="submit"
						className="w-full md:w-auto px-6 py-2 text-5xl font-regular text-white bg-btnPurple"
						style={{ height: '87px', width: '999px', maxWidth: '999px'}}
						onClick={() => {
							if (role === 'user') { // Correctly using the state variable
								navigate('/dashboard');
							} else if (role === 'admin') {
								navigate('/admin/dashboard');
							} else{
								alert("Role was not selected");
							}
						}
					}
					>
						Sign in
					</button>
				</div>
			</div>
			</form>
		</div>
	);
};

export default LoginPage;
