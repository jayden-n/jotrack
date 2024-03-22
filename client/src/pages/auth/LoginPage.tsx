import axios from 'axios';
import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { jwtDecode, JwtPayload } from 'jwt-decode';

const LoginPage = () => {
  const [error, setError] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      setIsLoading(true);

      const response = await axios.post(
        'http://localhost:8000/api/auth/login',
        { email, password },
      );

      const accessToken: string = response.data['access_token'];

      const decodedJwt: any = jwtDecode<JwtPayload>(accessToken);
      const role = decodedJwt['role'];

      localStorage.setItem('access_token', accessToken);

      if (role === 'user') navigate('/user/dashboard');
      else if (role === 'admin') navigate('/admin');
    } catch (error: any) {
      setError(error.response.data.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
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
          <p className="text-2xl text-gray text-center opacity-60 mb-8">
            Don't Have An Account?
          </p>
          <div className="flex justify-center items-center">
            <button
              className="text-2xl text-white bg-btnPurple py-3 px-28 hover:opacity-90"
              onClick={() => navigate('/register')}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>

      <div className="grid place-items-center p-10 md:col-span-3">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-12 md:max-w-3xl lg:max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-semibold text-center mb-4 justify-self-center md:col-span-2">
            Log into your account
          </h2>
          <input
            type="email"
            value={email}
            placeholder="email"
            className="p-4 text-2xl bg-white border border-gray-300 rounded shadow-inne w-full justify-self-center mt-4 md:col-span-2"
            onChange={handleEmailChange}
          />
          <input
            type="password"
            value={password}
            placeholder="password"
            className="p-4 text-2xl bg-white border border-gray-300 rounded shadow-inner w-full justify-self-center mb-6 mt-4 md:col-span-2"
            onChange={handlePasswordChange}
          />
          <button
            type="submit"
            className="text-2xl text-white bg-btnPurple py-3 px-72 justify-self-center mt-10 md:col-span-2 hover:opacity-90"
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign in'}{' '}
          </button>
          {error && (
            <div className="text-red-500 py-2 px-6 justify-self-center md:col-span-2">
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
