import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import SingleJobInfo from './SingleJobInfo';

interface SingleJobProps {
	company: string;
	position: string;
}

const SingleJobSearch: React.FC<SingleJobProps> = ({ company, position }) => {
	// const getStatusColor: () => void = () => {
	// 	switch (jobStatus) {
	// 		case 'pending':
	// 			return 'bg-orange';
	// 		case 'declined':
	// 			return 'bg-red';
	// 		case 'accepted':
	// 			return 'bg-green';
	// 		default:
	// 			return 'bg-gray'; // default color for unknown statuses
	// 	}
	// };

	// company first letter
	const initials: string = company
		.split(/\s|-/)
		.map((word) => word.charAt(0).toUpperCase())
		.join('');

	return (
		<article
			className={`bg-formGrey rounded-md grid grid-rows-[1fr_auto] shadow-[7px_7px_0px_0px_#CCCCCC]`}
		>
			<header className="pt-8 pb-6 px-6 border-b-[1px] grid grid-cols-[auto_1fr] items-center">
				<div className="w-[60px] h-[60px] grid place-items-center bg-violet text-white capitalize font-bold text-2xl mr-8 rounded-md shadow-lg">
					{initials}
				</div>
				<div>
					<h5 className="text-xl w-max drop-shadow-lg">{position}</h5>
					<p className="m-0 capitalize leading-6 text-gray">{company}</p>
				</div>
			</header>

			<div className="p-6">
				<div className="grid mt-4 mb-2 grid-cols-1 gap-y-6 items-center md:grid-cols-2">
					<SingleJobInfo icon={<FaLocationArrow />} text="Toronto, ON" />

					<SingleJobInfo icon={<FaBriefcase />} text="full-time" />
				</div>
			</div>
		</article>
	);
};

export default SingleJobSearch;
