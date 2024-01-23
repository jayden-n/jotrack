import { FaWpforms, FaRegEye } from 'react-icons/fa';
import { MdAdminPanelSettings, MdQueryStats } from 'react-icons/md';
import { IoBarChartSharp } from 'react-icons/io5';
import { ImProfile } from 'react-icons/im';

export const links = [
	{
		text: 'dashboard',
		path: '.',
		icon: <FaWpforms />,
	},
	{
		text: 'jobs search',
		path: 'all-jobs',
		icon: <MdQueryStats />,
	},
	{
		text: 'applications',
		path: 'applications',
		icon: <IoBarChartSharp />,
	},
	{
		text: 'build resume',
		path: 'build-resume',
		icon: <ImProfile />,
	},
	{
		text: 'view resume',
		path: 'view-resume',
		icon: <FaRegEye />,
	},
];
