import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import SingleJobInfo from '../user/SingleJobInfo';
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Modal from './Modal';
import { useState } from 'react';

interface SingleJobProps {
	company: string;
	position: string;
	id: number;
}

const Job: React.FC<SingleJobProps> = ({ company, position, id }) => {
	const [deleteBtn, setDeleteBtn] = useState<boolean>(false)
	const navigation = useNavigate();
	
    const btnStyle = 'font-outfit text-white text-normal text-center md:text-md  md:w-2/4 md:py-1 rounded-lg p-1  hover:opacity-90 shadow-xl ring-1'

	const handleDelete = () => {
		setDeleteBtn(true)
	}
	// company first letter
	const initials: string = company
		.split(/\s|-/)
		.map((word) => word.charAt(0).toUpperCase())
		.join('');

	return (
		<article
			className={`bg-formGrey rounded-md grid grid-rows-[1fr_auto] col-start-2 col-end-5
             md:mt-12 mt-4 shadow-[7px_7px_0px_0px_#CCCCCC]`}
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
				<div className="grid mt-4 mb-2 grid-cols-1 gap-y-6 items-center md:grid-cols-3">
					<SingleJobInfo icon={<FaLocationArrow />} text="Toronto, ON" />

					<SingleJobInfo icon={<FaBriefcase />} text="full-time" />
                    <div  className='gap-x-5 flex float-end'>
						
                        <button onClick={() => {navigation(`../edit/${id}`)}} 
						className={`${btnStyle} bg-updateBtnColor px-6 md:px-0`}>Edit</button>

                        <button onClick={handleDelete}
						className={`${btnStyle} bg-cancelRed px-4 md:px-0`}>Delete</button>
						

                    </div>
				</div>
			</div>
				<Modal isOpen={deleteBtn} onClose={() => setDeleteBtn(false)} id={id} />
		</article>
	);
};

export default Job;
