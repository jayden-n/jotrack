import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


// Define a type for the user role
type UserRole = 'admin' | 'user' | null;

const LoginPage = () => {
	const [error, setError] = useState<string>('');
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

	// When Admin button is clicked
	const handleAdminClick = () => {
		setRole('admin');
	};

	// When User button is clicked
	const handleUserClick = () => {
		setRole('user');
	};

	// Corrected type for the submit event
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setError('');
		if (!email || !password || !role) {
			setError("Please fill in all fields.");
			return;
		}
		if (role === 'user'){
			console.log({ email, password, role });
			navigate('/user/dashboard');
		}
		else if (role === 'admin'){
			console.log({ email, password, role });
			navigate('/admin/dashboard');
		}
	};


	return (
		<div className="grid h-screen grid-cols-1 md:grid-cols-4 bg-e6e0e0">
			<div className="flex flex-col justify-center md:col-span-1 border border-gray-300 bg-white p-10">
				<div className="mb-52">
					<div className="flex justify-center items-center mb-14">
						<ul className="text-purple text-lg ">
							<li className="font-outfit text-3xl font-extrabold pr-10">
								<Link to={'/'}>
									<span className="text-5xl ml-10">J</span>oTrack
								</Link>
							</li>
						</ul>
					</div>
					<hr className="border-t border-gray-300 mb-14 mx-auto my-4 w-3/4 h-0.5" />
					<h2 className="text-3xl font-semibold text-center mb-32">Sign in</h2>
					<p className="text-2xl text-gray text-center opacity-60 mb-8">Don't Have An Account?</p>
					<div className="flex justify-center items-center">
						<button className="text-2xl text-white bg-btnPurple py-3 px-28" onClick={() => navigate('/register')}>Sign up</button>
					</div>
				</div>
			</div>

			<div className="grid place-items-center p-10 md:col-span-3">
				<form onSubmit={handleSubmit} className="grid grid-cols-1 gap-12 md:max-w-3xl lg:max-w-5xl mx-auto">
					<h2 className="text-3xl font-semibold text-center mb-4 justify-self-center md:col-span-2">Log into your account</h2>
					<input type="email" value={email} placeholder="email" className="p-4 text-2xl bg-white border border-gray-300 rounded shadow-inne w-full justify-self-center mt-4 md:col-span-2" onChange={handleEmailChange} />
					<input type="password" value={password} placeholder="password" className="p-4 text-2xl bg-white border border-gray-300 rounded shadow-inner w-full justify-self-center mb-6 mt-4 md:col-span-2" onChange={handlePasswordChange} />
					<hr className="border-t border-gray-300 my-8 mb-4 mx-auto w-1/3 justify-self-center mt-4 md:col-span-2" />
					<div className="flex justify-center gap-12 md:col-span-2">
					<button type="button" className={`w-36 py-3 text-2xl bg-white font-regular rounded-xl ${role === 'admin' ? 'bg-gray' : 'bg-transparent'}`} onClick={handleAdminClick}>Admin</button>
					<button type="button" className={`w-36 py-3 text-2xl bg-white font-regular rounded-xl ${role === 'user' ? 'bg-gray' : 'bg-transparent'}`} onClick={handleUserClick}>User</button>
					</div>
					<button type="submit" className="text-2xl text-white bg-btnPurple py-3 px-72 justify-self-center mt-10 md:col-span-2">Sign in</button>
					{error && <div className="text-red-500 py-2 px-6 justify-self-center md:col-span-2">{error}</div>}
			</form>
			</div>
		</div>
	);
};

export default LoginPage;
