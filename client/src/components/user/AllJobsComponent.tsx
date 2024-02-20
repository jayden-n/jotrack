import { Link } from 'react-router-dom';
import SingleJob from './SingleJob';
import SingleJobSearch from './SingleJobSearch';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface AllJobsComponentProps {
   searchText: string;
}

interface Job {
   id: number;
   title: string;
   description: string;
   position: string;
   requirements: string[];

   companyName: string;

   postalCode: string;
   street: string;
   city: string;
   province: string;
   country: string;
   dateTimePosted: Date;
}

const AllJobsComponent: React.FC<AllJobsComponentProps> = ({ searchText }) => {
   const [jobs, setJobs] = useState<Job[]>([]);
   const [error, setError] = useState<string>('');
   const [isLoading, setIsLoading] = useState<boolean>(true);

   useEffect(() => {
      axios
         .get<Job[]>(`http://localhost:8000/api/jobs`)
         .then((response): void => {
            setJobs(response.data);
         })
         .catch((error): void => {
            setError(error);
         })
         .finally(() => {
            setIsLoading(false);
         });
   }, []);

   //  NOTE: hardcoded job data (replace this with actual job data from the server)

   //  ================== check if there's a job from server first ==================
   if (jobs.length === 0) {
      return (
         <>
            <h2>No jobs to display</h2>
         </>
      );
   }

   // Filter jobs based on search text
   const filteredJobs = jobs.filter((job) =>
      `${job.companyName} ${job.position}`
         .toLowerCase()
         .includes(searchText.toLowerCase()),
   );

   return (
      <section className="mt-16 ">
         <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-8">
            {/* NOTE: will eventually map over the jobs array from back-end */}
            {filteredJobs.map((job, index) => (
               // NOTE: will replace id with real data
               <Link to={job.id.toString()}>
                  <SingleJobSearch
                     key={index}
                     company={job.companyName}
                     position={job.position}
                  />
               </Link>
            ))}
         </div>
      </section>
   );
};

export default AllJobsComponent;
