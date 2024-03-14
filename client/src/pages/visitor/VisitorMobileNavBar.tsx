import { Dispatch, SetStateAction, useState } from 'react';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const VisitorMobileNavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-screen h-[130px] flex justify-between   items-center">
            {!isOpen && (
                <div className="font-outfit text-3xl px-5 text-purple font-extrabold">
                    <Link to={'/'}>
                        <span className="text-5xl">J</span>oTrack
                    </Link>
                </div>
            )}

            <div>
                <motion.button
                    whileHover={{ rotate: '180deg' }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(true)}
                    className="text-3xl bg-white mr-5 text-black border-[1px] hover:text-violet600 transition-colors p-4 rounded-full"
                >
                    <FiMenu />
                </motion.button>
            </div>
            <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

const Nav = ({
                 isOpen,
                 setIsOpen,
             }: {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
    return (
        <motion.nav
            className="fixed top-0 bottom-0 w-screen bg-white z-50"
            animate={isOpen ? 'open' : 'closed'}
            variants={navVariants}
            initial="closed"
        >
            <motion.button
                className="text-3xl bg-white text-black hover:text-violet600 border-[1px] border-transparent hover:border-violet600 transition-colors p-4 rounded-full absolute top-8 right-8"
                whileHover={{ rotate: '180deg' }}
                onClick={() => setIsOpen(false)}
                whileTap={{ scale: 0.9 }}
            >
                <FiX />
            </motion.button>
            <motion.div
                variants={linkWrapperVariants}
                className="flex flex-col gap-4 absolute bottom-8 left-8"
            >
                <NavLink text="Home-page" link="/" />
                <NavLink text="Jobs" link="/jobs" />
                <NavLink text="About Us" link="/about-us" />
                <NavLink text="Log In" link="/login" />
            </motion.div>
        </motion.nav>
    );
};


const NavLink = ({ text, link }: { text: string; link: string }) => {
    return (
        <motion.a
            className="inline-block z-10 text-slate800 w-fit font-black text-7xl hover:text-violet600 transition-colors"
            variants={navLinkVariants}
            transition={{
                type: 'spring',
                damping: 3,
            }}
            whileHover={{
                y: -15,
                rotate: '-7.5deg',
            }}
            rel="nofollow"
            href={link}
        >
            <span className="drop-shadow-lg">{text}</span>
        </motion.a>
    );
};

export default VisitorMobileNavBar;

const navVariants = {
    open: {
        x: '0%',
        borderTopLeftRadius: '0vw',
        borderBottomLeftRadius: '0vw',
        opacity: 1,
    },
    closed: {
        x: '100%',
        borderTopLeftRadius: '50vw',
        borderBottomLeftRadius: '50vw',
        opacity: 0,
    },
};

const linkWrapperVariants = {
    open: {
        transition: {
            staggerChildren: 0.1,
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const navLinkVariants = {
    open: { x: 0 },
    closed: { x: 25 },
};
