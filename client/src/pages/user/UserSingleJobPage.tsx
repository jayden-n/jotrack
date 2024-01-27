import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const UserSingleJobPage: React.FC = () => {
	const navigate = useNavigate();
	const handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void = (
		event: React.FormEvent<HTMLFormElement>,
	) => {
		event.preventDefault();
		toast.warning('Please upload your resume first');

		navigate('../build-resume');
	};

	return (
		<section className="rounded-lg w-full bg-formGrey pb-10 pt-6 text-base shadow-[7px_7px_0px_0px_#CCCCCC]">
			{/* IMPORTANT: names id must match with BACK-END SERVER */}
			<form onSubmit={handleSubmit}>
				<div className="max-w-[100vw] rounded  py-8 px-10 mx-auto">
					<h4 className="mb-12  text-2xl font-semibold capitalize">
						job description
					</h4>

					<div className="flex flex-col gap-12">
						{/* company info */}
						<div>
							<p className="capitalize">position: front-end developer</p>
							<p className="capitalize">company name: apple</p>
						</div>
						<div>
							<p className="capitalize">job description:</p>
							<div>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
								officia labore, voluptatibus harum consectetur asperiores ut et
								exercitationem velit repellendus officiis, in voluptas adipisci
								hic numquam! Quo ipsum omnis in iusto sit molestias odio
								laboriosam!
							</div>
						</div>
						<div>
							<p>Requirements:</p>
							<div className="text">
								<ol className="list-disc ml-5">
									<li>React</li>
									<li>TypeScript</li>
									<li>TailwindCSS</li>
									<li>A car to commute</li>
								</ol>
							</div>
						</div>

						<button
							type="submit"
							className="cursor-pointer bg-formSky text-white rounded-md h-[50px] hover:shadow-xl transition-all duration-300 ease-in-out capitalize inline-block w-full mt-6 md:mt-0 shadow-lg"
						>
							apply now!
						</button>
					</div>
				</div>
			</form>
		</section>
	);
};
export default UserSingleJobPage;
