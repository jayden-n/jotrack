import { toast } from 'react-toastify';
import AnimatedEncryptButton from '../../components/user/AnimatedEncryptButton';
import FormRow from '../../components/user/FormRow';

const UserUpdatePasswordPage: React.FC = () => {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		toast.success('Password updated successfully!');
	};

	return (
		<div>
			<form
				onSubmit={handleSubmit}
				className="max-w-[700px] bg-formGrey rounded-md shadow-[7px_7px_0px_0px_#CCCCCC] py-8 px-10 my-14 mx-auto"
			>
				<h4 className="mb-8 text-2xl capitalize font-medium">
					update password
				</h4>

				<div className="flex flex-col gap-8">
					<FormRow
						type="password"
						name="oldPassword"
						labelText="old password"
						defaultValue="oldpassword123"
					/>
					<FormRow
						type="text"
						name="newPassword"
						labelText="new password"
						defaultValue="secret123"
					/>
					<FormRow
						type="text"
						name="newPassword"
						labelText="confirm password"
						defaultValue="secret123"
					/>
					<div className="mt-2">
						<AnimatedEncryptButton />
					</div>
				</div>
			</form>
		</div>
	);
};
export default UserUpdatePasswordPage;
