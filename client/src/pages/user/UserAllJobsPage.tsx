import React from 'react';
import { useNavigation } from 'react-router-dom';
import JobsContainer from '../../components/user/JobsContainer';

const UserAllJobsPage: React.FC = () => {
	const navigation = useNavigation();
	// displaying state when button is submitting
	const isSubmitting = navigation.state === 'submitting';

	return (
		<>
			<h1>Jobs Search page</h1>
		</>
	);
};
export default UserAllJobsPage;
