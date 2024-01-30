import { ReactNode } from 'react';

interface SingleJobInfoProps {
	icon: ReactNode;
	text: string;
}

const SingleJobInfo: React.FC<SingleJobInfoProps> = ({ icon, text }) => {
	return (
		<section className="flex items-center">
			<span className="text-xl mr-4 grid place-items-center text-violet">
				{icon}
			</span>
			<span className="capitalize grid place-items-center">{text}</span>
		</section>
	);
};
export default SingleJobInfo;
