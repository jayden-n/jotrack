import { AnimatePresence, motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const SpringModal = ({
	isOpen,
	setIsOpen,
}: {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
	return (
		<AnimatePresence>
			{/* displaying modal */}
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={() => setIsOpen(false)}
					className="bg-slate900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
				>
					<motion.div
						initial={{ scale: 0, rotate: '12.5deg' }}
						animate={{ scale: 1, rotate: '0deg' }}
						exit={{ scale: 0, rotate: '0deg' }}
						onClick={(e) => e.stopPropagation()}
						className="bg-gradient-to-br from-violet600 to-violet text-white p-6 rounded-lg w-full max-w-lg shadow-md cursor-default relative overflow-hidden"
					>
						{/* adjust to the corner for better UI */}
						<FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 left-1" />

						{/* ================== content ================== */}
						<div className="relative z-10">
							<div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo600 grid place-items-center mx-auto">
								<FiAlertCircle />
							</div>
							<h3 className="text-3xl font-bold text-center mb-2">
								Wish to continue?
							</h3>
							<p className="text-center mb-6">
								We will navigate you to a new page to update your current
								password.
							</p>
							<div className="flex gap-2">
								{/* go back */}
								<button
									onClick={() => setIsOpen(false)}
									className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
								>
									Nah, go back
								</button>

								{/* continue */}
								<Link
									// testing purpose:
									// NOTE: id will be replaced by actual user is from back-end
									to={`update-password/123456789`}
									className="bg-white hover:opacity-90 transition-opacity text-violet600 flex items-center justify-center font-semibold w-full py-2 rounded"
								>
									<button>Understood!</button>
								</Link>
							</div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default SpringModal;
