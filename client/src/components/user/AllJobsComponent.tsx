import { Link } from 'react-router-dom';
import SingleJob from './SingleJob';
import SingleJobSearch from './SingleJobSearch';

interface AllJobsComponentProps {
	searchText: string;
}
interface Job {
	company: string;
	position: string;
}
const AllJobsComponent: React.FC<AllJobsComponentProps> = ({ searchText }) => {
	// NOTE: hardcoded job data (replace this with actual job data from the server)

	const allJobs: Job[] = [
		{
			company: 'Forbes',
			position: 'Front-end Developer',
		},
		{ company: 'UPS', position: 'Back-end Developer' },
		{
			company: 'CHANEL',
			position: 'Full-stack Developer',
		},
		{ company: 'KFC', position: 'Data Analyst' },
		{ company: 'Tesla', position: 'Car Breaker' },
		{ company: 'H&M', position: 'Janitor' },
		{ company: 'Intel', position: 'Front-end Developer' },
		{ company: 'Samsung', position: 'Phone Breaker' },
	];

	// ================== check if there's a job from server first ==================
	// if (jobs.length === 0) {
	// 		return (
	// 			<>
	// 				<h2>No jobs to display</h2>
	// 			</>
	// 		);
	// 	}

	// Filter jobs based on search text
	const filteredJobs = allJobs.filter((job) =>
		`${job.company} ${job.position}`
			.toLowerCase()
			.includes(searchText.toLowerCase()),
	);

	return (
		<section className="mt-16 ">
			<div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-8">
				{/* NOTE: will eventually map over the jobs array from back-end */}
				{filteredJobs.map((job, index) => (
					// NOTE: will replace id with real data
					<Link to="../job/123456789">
						<SingleJobSearch
							key={index}
							company={job.company}
							position={job.position}
						/>
					</Link>
				))}
			</div>
		</section>
	);
};
export default AllJobsComponent;
