import FormRow from '../../components/user/FormRow';
import { toast } from 'react-toastify';
import AnimatedEncryptButton from '../../components/user/AnimatedEncryptButton';
import { Navigation, useNavigation } from 'react-router-dom';
import PopUpModal from '../../components/user/PopUpModal';

const UserInfoPage: React.FC = () => {
	const navigation: Navigation = useNavigation();
	const isSubmitting: boolean = navigation.state === 'submitting';

	const handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void = (
		event: React.FormEvent<HTMLFormElement>,
	) => {
		event.preventDefault();
		toast.success('Profile updated successfully!');
	};

	return (
		<section className="rounded-lg w-full bg-formGrey pb-16 pt-6 text-base shadow-[7px_7px_0px_0px_#CCCCCC]">
			{/* IMPORTANT: names id must match with BACK-END SERVER */}
			<form
				onSubmit={handleSubmit}
				className="max-w-[100vw] rounded  py-8 px-10 mx-auto"
			>
				<h4 className="mb-8 capitalize text-2xl  font-medium">
					Username's profile
				</h4>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 md:items-end md:gap-x-8 md:gap-y-10 gap-y-8">
					<FormRow type="text" name="name" defaultValue="john" />
					<FormRow
						type="text"
						name="lastName"
						labelText="last name"
						defaultValue="doe"
					/>

					<FormRow
						type="text"
						name="phoneNumber"
						labelText="phone number"
						defaultValue="5555555555"
					/>
					<FormRow type="email" name="email" defaultValue="example@gmail.com" />

					<FormRow
						type="text"
						name="address"
						defaultValue="Toronto, ON, Earth"
					/>

					<button
						type="submit"
						disabled={isSubmitting}
						className="cursor-pointer bg-formSky text-white rounded-md h-[50px] hover:shadow-xl transition-all duration-300 ease-in-out capitalize inline-block w-full mt-6 md:mt-0 shadow-lg"
					>
						{isSubmitting ? 'updating...' : 'save changes'}
					</button>

					{/* <AnimatedEncryptButton /> */}
				</div>
			</form>

			{/* password settings */}
			<div>
				<div className="pt-2">
					<div className="max-w-[100vw]  py-8 px-10 mx-auto">
						<div className="bg-passwordGrey shadow-[5px_5px_0px_0px_#CCCCCC] rounded-md py-8 px-4  flex items-center justify-center">
							<div>
								<h4 className=" capitalize  text-2xl  font-medium mb-4">
									update password?
								</h4>
								<div className="flex items-center justify-center">
									<PopUpModal />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default UserInfoPage;
