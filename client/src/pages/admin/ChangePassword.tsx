// ChangePassword.tsx
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

type StatusUpdateProps = {
  onClose: () => void;
};

const ChangePassword: React.FC<StatusUpdateProps> = ({ onClose }) => {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmedPassword] = useState('')

  const [mobile, setMobile] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const mobileScreen = window.innerWidth <= 768;
    setMobile(mobileScreen);

    controls.start({
      scale: mobileScreen ? [0, 1] : [0, 1],
      y: mobileScreen ? -100 : 100,
      x: mobileScreen ? -150 : -300,
    });
  }, [controls]);

  const onUpdate = () => {
    if(!oldPassword || !newPassword || !confirmPassword){
      toast.warning('Please fill all fields.')
    }
    else if(newPassword != confirmPassword){
      toast.error("Passwords don't match.")
    }
    else{
      toast.success('Password successfully updated.');
    setTimeout(() => {onClose()}, 2000) 
    }
    
  };

  const inputStyle =
    'w-[14rem] font-normal font-outfit border p-1.5 mt-5 rounded-md border-gray text-md shadow-md';
  const otherBtnStyle =
    'font-outfit text-white text-center text-[1rem] w-[160px] font-normal py-1 rounded-md  hover:opacity-90 shadow-xl ring-1';

  return (
    <motion.div
      className={`bg-snow w-[300px]   h-[400px] shadow-md border border-slate400 ${
        mobile ? 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' : ''
      }`}
      animate={controls}
      transition={{
        type: 'spring',
        bounce: 0,
      }}
      layout
      style={{ borderRadius: 20 }}
    >
      <div className="grid grid-cols-1 place-items-center md:mt-10 mt-5">
        <p className="font-outfit text-lg">Change your password</p>

        <hr style={{ width: '50%', border: '1px solid #ddd', margin: '15px ' }} />

        <input type="password" className={`${inputStyle}`} 
            placeholder="Old password" 
            value={oldPassword} 
            onChange={(e) => setOldPassword(e.target.value)}
            />

        <input type="password" className={`${inputStyle}`} 
              placeholder="New password" 
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              />

        <input type="password" className={`${inputStyle}`} 
              placeholder="Confirm password" 
              value={confirmPassword}
              onChange={(e) => setConfirmedPassword(e.target.value)}
             
              />

        <button className={`bg-blue ${otherBtnStyle} mt-6 mb-3 `} onClick={onUpdate}>
          Update
        </button>
        <button
          className={`bg-cancelRed ${otherBtnStyle} md:mb-0 mb-5`}
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </motion.div>
  );
};

export default ChangePassword;
