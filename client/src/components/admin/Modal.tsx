import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "react-toastify";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    id: number
}

const Modal: React.FC<Props> = ({isOpen, onClose, id}) => {

    const handleDelete = async () => {
        try{
            const response = await axios.delete(`http://localhost:8000/api/jobs/${id}`)
            if(response.status == 200){
                toast.success('Job deleted')
                onClose()  
            }
        }catch(error) {
            toast.error('Failed deleting job!')
            // console.log(id)
            console.error(error);       
        };
    }

    const handleCancel = () => {
       onClose()
    }

    return (
        <AnimatePresence>
            {isOpen &&
            <motion.div className="h-full w-full fixed top-0 left-0 flex justify-center items-center z-50 backdrop-blur "
                   initial={{ backdropFilter: "blur(0px)" }}
                   animate={{ backdropFilter: "blur(10px)" }}
                   exit={{ backdropFilter: "blur(0px)" }}
                   transition={{ duration: 0  }}
            >
                <motion.div
                    className="bg-white p-12 rounded-md shadow-lg relative"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.3,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                            type: "spring",
                            stiffness: 100,
                            restDelta: 0.001
                        }
                    }}
                >
                    <h1 className="text-2xl font-bold mb-4 font-outfit">Are you sure you want to delete this job?</h1>
                    <div className="mt-10 flex justify-end">
                        <button onClick={handleDelete} className="bg-blue font-outfit text-xl text-white px-4 py-2 rounded-md mr-5">Yes</button>
                        <button onClick={handleCancel} className="bg-cancelRed font-outfit text-xl text-white px-4 py-2 rounded-md">Cancel</button>
                    </div>
                </motion.div>
            </motion.div>
        }
        </AnimatePresence>
    );
};

export default Modal;
