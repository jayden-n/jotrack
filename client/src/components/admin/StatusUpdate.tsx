import axios from 'axios';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

type StatusUpdateProps = {
    onClose: () => void;
  };

const StatusUpdate: React.FC<StatusUpdateProps> = ({onClose}) => {

    const [mobile, setMobile] = useState<boolean>(false);
    const controls = useAnimation();

    useEffect(() => {
        const mobileScreen = window.innerWidth <= 768; 
        setMobile(mobileScreen);

        controls.start({ 
            scale: mobileScreen ? [0, 1.5] : [0, 1.2] ,
            y: mobileScreen ? -50 : 50,
            x: mobileScreen ? 50: 110,
        });

    }, [controls]);

    const onNotify = () => { 
        toast.success('User notified!')
        setTimeout(() => {onClose()}, 2000)      
    };

    const onUpdate = async ( status: string) => { 
        if(status == 'Declined'){
            try {
                const response = await axios.put(`http://localhost:8000/api/job-applications/reject`);
                if (response.status === 200) {
                    toast.success(`User status updated to ${status}`)  
                }
            } catch (error) {
                console.error(error);
                toast.error('Error updating job.');
            }
        }

        if(status == 'Accepted'){
            try {
                const response = await axios.put(`http://localhost:8000/api/job-applications/accept`);
                if (response.status === 200) {
                    toast.success(`User status updated to ${status}`)  
                }
            } catch (error) {
                console.error(error);
                toast.error('Error updating job.');
            }
        }
                     
    };


    const statusBtnStyle = 
    'font-outfit text-white text-center md:text-sm text-xs w-[55%] py-1  mb-1 rounded-md  hover:opacity-90 shadow-xl ring-1'
    const otherBtnStyle = 
    'font-outfit text-white text-center md:text-sm text-xs md:w-[70%] w-[70%] py-1 rounded-md  hover:opacity-90 shadow-xl ring-1'

    return(
        <motion.div className="bg-snow md:w-[45%] md:h-[290px] w-[35%] h-[250px] md:col-span-2 shadow-md border border-slate400 relative"
        animate={controls}
            transition={{ duration: 0.5}}
            layout style={{ borderRadius: 20 }} 
        >
            <div className='grid grid-cols-1 place-items-center md:mt-6 mt-5 absolute inset-0'>
                <button className={`bg-orange ${statusBtnStyle}`} onClick={() => onUpdate('Pending')}>Pending</button>
                <button className={`bg-green ${statusBtnStyle}`} onClick={() => onUpdate('Accepted')}>Accepted</button>
                <button className= {`bg-red ${statusBtnStyle} `} onClick={() => onUpdate('Declined')}>Declined</button>

                <button className= {`bg-lightblue ${otherBtnStyle} mt-5 `} onClick={onNotify}>Notify User</button>
                <button className= {`bg-cancelRed ${otherBtnStyle}  mb-5`} onClick={onClose}>Cancel</button>
            </div>
        </motion.div>
    )
}



export default StatusUpdate;