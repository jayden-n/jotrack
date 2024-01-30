import { toast } from 'react-toastify';
import { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const UserViewResume: React.FC = () => {
	// PDF download function
	const [loader, setLoader] = useState(false);

	const downloadPDF = () => {
		const capture: HTMLElement | null = document.querySelector('.actualResume');

		if (capture) {
			setLoader(true);
			html2canvas(capture).then((canvas) => {
				const imgData: string = canvas.toDataURL('img/png');
				const doc = new jsPDF('p', 'mm', 'a4');
				const componentWidth: number = doc.internal.pageSize.getWidth();
				const componentHeight: number = doc.internal.pageSize.getHeight();
				doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
				setLoader(false);
				doc.save('resume.pdf');
			});
			toast.success('Uploading your resume...');
		} else {
			console.error("Couldn't find the element with the class 'actualResume'");
		}
	};

	// edit resume function
	const handleEditSubmit: React.MouseEventHandler<HTMLButtonElement> = (
		event: React.MouseEvent<HTMLButtonElement>,
	) => {
		toast.warning('Waiting for A.I to be finished :(');
	};

	// upload resume function
	const handleUploadSubmit: React.MouseEventHandler<HTMLButtonElement> = (
		event: React.MouseEvent<HTMLButtonElement>,
	) => {
		toast.warning('Waiting for A.I to be finished :(');
	};

	// max-w-[900px]
	return (
		<section className="flex flex-col items-center ">
			<div className=" bg-formGrey max-w-[900px] rounded-md shadow-[7px_7px_0px_0px_#CCCCCC] py-8 px-10 my-4 mx-auto">
				{/* IMPORTANT: names id must match with BACK-END SERVER */}

				<div className={` rounded actualResume px-10 mx-auto`}>
					{/* ===================== USER INFO ===================== */}
					<div className="flex mb-4 flex-col items-center justify-center">
						<h4 className="  text-xl font-semibold capitalize">
							[Your full name]
						</h4>
						<h4 className="  text-xl font-semibold capitalize">
							[your location]
						</h4>
						<h4 className="  text-xl font-semibold capitalize">
							[your email address]
						</h4>
						<h4 className="  text-xl font-semibold capitalize">
							[your phone number]
						</h4>
						<h4 className="  text-xl font-semibold capitalize">
							[linked profile URL]
						</h4>
					</div>

					{/* ===================== LINE BREAK ===================== */}
					<div className="relative flex py-5 items-center">
						<div className="flex-grow border-t border-gray-400"></div>
					</div>

					{/* ===================== USER CONTENT ===================== */}
					<div className="flex flex-col gap-12 mt-2">
						{/* OBJECTIVE */}
						<div>
							<p className="capitalize pb-2">objective:</p>
							<div>
								Dedicated and results-driven [Your Profession/Job Title] with [X
								years] of experience in [Your Industry]. Seeking an opportunity
								to contribute my skills and expertise to [Company Name] as a
								[Targeted Job Title].
							</div>
						</div>

						{/* PROFESSIONAL EXPERIENCE */}
						<div>
							<p className="capitalize pb-2">professional experience:</p>

							<div className="flex flex-col gap-4">
								<ol className="list-disc ml-5">
									<li>
										<p>[Job Title]</p>
										<p>[Company Name], [Location]</p>
										<p>[Dates of Employment]</p>
									</li>
								</ol>
								<ol className="list-disc ml-5">
									<li>
										<p>[Job Title]</p>
										<p>[Company Name], [Location]</p>
										<p>[Dates of Employment]</p>
									</li>
								</ol>
								<ol className="list-disc ml-5">...</ol>
							</div>
						</div>

						{/* EDUCATION */}
						<div>
							<p className="capitalize pb-2">education:</p>

							<div className="flex flex-col gap-4">
								<ol className="list-disc ml-5">
									<li>
										<p>[Degree Earned]</p>
									</li>
									<li>
										<p>[University Name], [Location]</p>
									</li>
									<li>
										<p>[Year of Graduation]</p>
									</li>
								</ol>
								<ol className="list-disc ml-5">...</ol>
							</div>
						</div>

						{/* SKILLS */}
						<div>
							<p className="capitalize pb-2">skills:</p>

							<div className="flex flex-col gap-4">
								<ol className="list-disc ml-5">
									<li>
										<p>[Skill 1]: List specific skills related to the job.</p>
									</li>
									<li>
										<p>[Skill 2]: List specific skills related to the job.</p>
									</li>
									<li>
										<p>[Skill 3]: List specific skills related to the job.</p>
									</li>
								</ol>
								<ol className="list-disc ml-5">...</ol>
							</div>
						</div>

						{/* ADDITIONAL SECTIONS */}
						<div>
							<p className="capitalize pb-2">additional Sections (optional):</p>

							<div className="flex flex-col gap-4">
								<ol className="list-disc ml-5">
									<li>
										<p>
											Projects: Highlight any relevant projects you've worked
											on.
										</p>
									</li>
									<li>
										<p>Languages: List any additional languages you speak.</p>
									</li>
									<li>
										<p>
											Volunteer Work: Include any relevant volunteer experience.
										</p>
									</li>
									<li>
										<p>
											Awards and Honors: Highlight any awards or honors you've
											received.
										</p>
									</li>
								</ol>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* BUTTONS ACTIONS */}
			<div className="grid md:grid-cols-2 lg:grid-cols-3 mt-6 w-full mb-6 max-w-[900px] items-center text-xl gap-8">
				{/* FINISHED: DOWNLOAD BUTTON */}
				<button
					type="submit"
					className="cursor-pointer w-full bg-formSky text-white rounded-md h-[50px] hover:shadow-xl transition-all duration-300 ease-in-out capitalize inline-block  shadow-[7px_7px_0px_0px_#CCCCCC] "
					onClick={downloadPDF}
					disabled={!(loader === false)}
				>
					{loader ? <span>Downloading</span> : <span>Download as PDF</span>}
				</button>

				{/* EDIT BUTTON: UN-FINISHED FOR A.I */}
				<button
					type="submit"
					className="cursor-pointer w-full bg-green text-white rounded-md h-[50px] hover:shadow-xl transition-all duration-300 ease-in-out capitalize inline-block shadow-[7px_7px_0px_0px_#CCCCCC]  "
					onClick={handleEditSubmit}
				>
					{/* {loader ? <span>Editing</span> : <span>Edit</span>} */}
					edit resume
				</button>

				{/* UPLOAD BUTTON: UN-FINISHED FOR A.I */}
				<button
					type="submit"
					className="cursor-pointer w-full bg-orange text-white rounded-md h-[50px] hover:shadow-xl transition-all duration-300 ease-in-out capitalize inline-block shadow-[7px_7px_0px_0px_#CCCCCC] "
					onClick={handleUploadSubmit}
				>
					{/* {loader ? <span>Uploading</span> : <span>Download</span>} */}
					upload resume
				</button>
			</div>
		</section>
	);
};
export default UserViewResume;
