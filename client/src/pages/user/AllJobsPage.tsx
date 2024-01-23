import React from 'react';
import { useNavigation } from 'react-router-dom';

const AllJobsPage: React.FC = () => {
	const navigation = useNavigation();
	// displaying state when button is submitting
	const isSubmitting = navigation.state === 'submitting';

	return (
		<section>
			<h4>JobSearchPage</h4>
		</section>
	);
};
export default AllJobsPage;
