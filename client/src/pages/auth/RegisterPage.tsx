import { useState, FormEvent, ChangeEvent, FC, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const RegisterPage: FC = () => {
  const [error, setError] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [street, setStreet] = useState<string>('');
  const [postalCode, setPostalCode] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [province, setProvince] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const navigate = useNavigate();

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);
  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) =>
    setFirstName(event.target.value);
  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) =>
    setLastName(event.target.value);
  const handleStreetChange = (event: ChangeEvent<HTMLInputElement>) =>
    setStreet(event.target.value);
  const handlePostalCodeChange = (event: ChangeEvent<HTMLInputElement>) =>
    setPostalCode(event.target.value);
  const handleCityChange = (event: ChangeEvent<HTMLInputElement>) =>
    setCity(event.target.value);
  const handleCountryChange = (event: ChangeEvent<HTMLInputElement>) =>
    setCountry(event.target.value);
  const handleProvinceChange = (event: ChangeEvent<HTMLInputElement>) =>
    setProvince(event.target.value);
  const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) =>
    setPhoneNumber(event.target.value);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !street ||
      !postalCode ||
      !city ||
      !country ||
      !province ||
      !phoneNumber
    ) {
      setError('Please fill in all fields.');
      return;
    }

    axios
      .post('http://localhost:8000/api/auth/signup', {
        firstName,
        lastName,
        email,
        password,
        street,
        postalCode,
        city,
        country,
        province,
        phoneNumber: Number(phoneNumber),
      })
      .then((response) => {
        navigate('/login');
      })
      .catch(async (error) => {
        setError(
          await error.response.data.message[0]
        );
      });
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
          <h2 className="text-3xl font-semibold text-center mb-32">Sign up</h2>
          <p className="text-2xl text-gray text-center opacity-60 mb-8">
            Already an Member?
          </p>
          <div className="flex justify-center items-center">
            <button
              className="text-2xl text-white bg-btnPurple py-3 px-28 hover:opacity-90"
              onClick={() => navigate('/login')}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
      <div className="grid place-items-center p-20 md:col-span-3">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:max-w-3xl w-full lg:max-w-5xl mx-auto mt-10"
        >
          <input
            type="text"
            value={firstName}
            placeholder="first name"
            className="p-3 text-2xl bg-white border border-gray-300 shadow-inner w-full"
            onChange={handleFirstNameChange}
          />
          <input
            type="text"
            value={lastName}
            placeholder="last name"
            className="p-3 text-2xl bg-white border border-gray-300 shadow-inner w-full"
            onChange={handleLastNameChange}
          />
          <input
            type="email"
            value={email}
            placeholder="email"
            className="p-3 text-2xl bg-white border border-gray-300 shadow-inne w-fullr"
            onChange={handleEmailChange}
          />
          <input
            type="password"
            value={password}
            placeholder="password"
            className="p-3 text-2xl bg-white border border-gray-300 shadow-inner w-full"
            onChange={handlePasswordChange}
          />
          <input
            type="text"
            value={street}
            placeholder="address"
            className="p-3 text-2xl bg-white border border-gray-300 shadow-inner w-full"
            onChange={handleStreetChange}
          />
          <input
            type="text"
            value={postalCode}
            placeholder="postal code"
            className="p-3 text-2xl bg-white border border-gray-300 shadow-inner w-full"
            onChange={handlePostalCodeChange}
          />
          <input
            type="text"
            value={city}
            placeholder="city"
            className="p-3 text-2xl bg-white border border-gray-300 shadow-inner w-full "
            onChange={handleCityChange}
          />
          <input
            type="text"
            value={country}
            placeholder="country"
            className="p-3 text-2xl bg-white border border-gray-300 shadow-inner w-full"
            onChange={handleCountryChange}
          />
          <input
            type="text"
            value={province}
            placeholder="province"
            className="p-3 text-2xl bg-white border border-gray-300 shadow-inner w-full"
            onChange={handleProvinceChange}
          />
          <input
            type="number"
            inputMode="text"
            value={phoneNumber?.toString()}
            placeholder="phone number"
            className="p-3 text-2xl bg-white border border-gray-300 shadow-inner w-full"
            onChange={handlePhoneNumberChange}
          />
          <button
            type="submit"
            className="text-2xl text-white bg-btnPurple py-3 px-72 justify-self-center mt-20 md:col-span-2 hover:opacity-90"
          >
            Sign up
          </button>
          {error && (
            <div className="text-red-500 py-2 px-6 justify-self-center md:col-span-2 text-red">
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
