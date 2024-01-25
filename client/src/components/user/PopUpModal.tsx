import { useState } from 'react';
import SpringModal from './SpringModal';

const PopUpModal = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<button
				onClick={() => setIsOpen(true)}
				className="bg-gradient-to-r from-violet600 to-violet text-white font-medium px-4 py-2 rounded hover:opacity-90 transition-opacity"
			>
				Yes, please...
			</button>
			<SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
		</div>
	);
};
export default PopUpModal;
