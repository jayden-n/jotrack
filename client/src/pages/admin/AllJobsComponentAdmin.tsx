import { Link } from 'react-router-dom';
import Job from './Job'
import { useEffect, useState } from 'react';
import axios from 'axios';

interface AllJobs {
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

const AllJobs: React.FC<AllJobs> = ({ searchText }) => {
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

   if (jobs.length === 0) {  
        return(
            <div
            className={` col-start-2 col-end-5`}>
                <p>No jobs to display</p>
            </div>
        ) 
   }

   const filteredJobs = jobs.filter((job) =>
      `${job.companyName} ${job.position}`
         .toLowerCase()
         .includes(searchText.toLowerCase()),
   );

   return (
      <>
            {filteredJobs.map((job, index) => (
               <Link to={job.id.toString()}>
                  <Job
                     key={index}
                     company={job.companyName}
                     position={job.position}
                  />
               </Link>
            ))}
        
      </>
   );
};

export default AllJobs;
