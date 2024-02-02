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

    const onUpdate = ( status: string) => { 
        toast.success(`User status updated to ${status}`)           
    };


    const statusBtnStyle = 
    'font-outfit text-white text-center md:text-sm text-xs w-[55%] py-1  mb-3 rounded-md  hover:opacity-90 shadow-xl ring-1'
    const otherBtnStyle = 
    'font-outfit text-white text-center md:text-sm text-xs md:w-[80%] w-[70%] py-1 rounded-md  hover:opacity-90 shadow-xl ring-1'

    return(
        <motion.div className="bg-snow md:w-[50%] md:h-[70%] w-[35%] h-full md:col-span-2 shadow-md border border-slate400 "
        animate={controls}
            transition={{ duration: 0.5}}
            layout style={{ borderRadius: 20 }} 
        >
            <div className='grid grid-cols-1 place-items-center md:mt-10 mt-5'>
                <button className={`bg-orange ${statusBtnStyle}`} onClick={() => onUpdate('Pending')}>Pending</button>
                <button className={`bg-green ${statusBtnStyle}`} onClick={() => onUpdate('Accepted')}>Accepted</button>
                <button className= {`bg-red ${statusBtnStyle} `} onClick={() => onUpdate('Declined')}>Declined</button>

                <button className= {`bg-lightblue ${otherBtnStyle} mt-6 mb-3 `}onClick={onNotify}>Notify User</button>

                <button className= {`bg-cancelRed ${otherBtnStyle} md:mb-0 mb-5`} onClick={onClose}>Cancel</button>
            </div>
        </motion.div>
    )
}



export default StatusUpdate;