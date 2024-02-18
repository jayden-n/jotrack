import React from 'react';

import { useNavigate } from 'react-router-dom';
import Job from './JobVisitor';

const Jobs: React.FC = () => {
    const navigation = useNavigate()

    return (
        <div>
            <div className="grid grid-cols-5 mt-10">
                <p className="text-purple font-outfit text-normal md:text-2xl text-2xl col-span-2 text-center ">
                    Job Listings
                </p>

                <Job
                    company={'Company Name'} position={'Front-end '} />
                <Job
                    company={'Company Name'} position={'Front-end '} />
                <Job
                    company={'Company Name'} position={'Front-end '} />
            </div>
        </div>
    );
}

export default Jobs
