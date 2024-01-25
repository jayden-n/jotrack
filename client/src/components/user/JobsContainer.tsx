import SingleJob from './SingleJob';

const JobsContainer: React.FC = () => {
	// ================== check if there's a job from server first ==================
	// if (jobs.length === 0) {
	// 		return (
	// 			<>
	// 				<h2>No jobs to display</h2>
	// 			</>
	// 		);
	// 	}

	return (
		<section className="mt-16 ">
			<div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-8">
				{/* NOTE: will eventually map over the jobs array from back-end */}
				<SingleJob
					jobStatus="pending"
					company="Forbes"
					position="Front-end Developer"
				/>
				<SingleJob
					jobStatus="accepted"
					company="UPS"
					position="Back-end Developer"
				/>
				<SingleJob
					jobStatus="declined"
					company="CHANEL"
					position="Full-stack Developer"
				/>
				<SingleJob jobStatus="pending" company="KFC" position="Data Analyst" />
			</div>
		</section>
	);
};
export default JobsContainer;
