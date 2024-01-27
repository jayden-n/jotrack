import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const UserBuildResumePage: React.FC = () => {
	const navigate = useNavigate();
	const handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void = (
		event: React.FormEvent<HTMLFormElement>,
	) => {
		event.preventDefault();
		toast.success('Please upload your resume here.');
		navigate('../view-resume');
	};

	return (
		<section className="rounded-lg w-full bg-formGrey pb-10 pt-6 text-base shadow-[7px_7px_0px_0px_#CCCCCC]">
			{/* IMPORTANT: names id must match with BACK-END SERVER */}
			<form onSubmit={handleSubmit}>
				<div className="max-w-[100vw] rounded  py-8 px-10 mx-auto">
					<h4 className="mb-12 text-3xl  font-semibold capitalize">
						build you resume with AI
					</h4>

					<div className="flex flex-col gap-12 text-lg">
						{/* company info */}
						<blockquote className="text-xl leading-8  font-medium italic text text-slate900">
							Job Description is
							<span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-formSky relative inline-block mx-2">
								<span className="relative text-white ">required</span>
							</span>
							for generating a resume.
						</blockquote>
						<div>
							<p>Optional sections to provide:</p>
							<div className="text">
								<ol className="list-disc ml-5 ">
									<li>Skills</li>
									<li>Education</li>
									<li>Experience</li>
								</ol>
							</div>
						</div>

						<button
							type="submit"
							className="cursor-pointer bg-formSky text-white rounded-md h-[50px] hover:shadow-xl transition-all duration-300 ease-in-out capitalize inline-block w-full mt-6 md:mt-0 shadow-lg"
						>
							apply
						</button>
					</div>
				</div>
			</form>
		</section>
	);
};
export default UserBuildResumePage;
