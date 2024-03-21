import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

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

const UserSingleJobPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [singleJob, setSingleJob] = useState<Job | null>(null)
    const [error, setError] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get<Job | null>(`http://localhost:8000/api/jobs/${id}`)
        .then((response) => {
           setSingleJob(response.data)
        })
        .catch((error): void => {
            toast.error('User not found')
            setError(error);
         })
         .finally(() => {
            setIsLoading(false);
         });
    },[id])

   

    const handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void = (
        event: React.FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault();
        toast.warning('Please log-in or sign-up first');
    };

    return (
        <div className="flex justify-center">
        <section className="flex justify-center max-w-6xl w-full bg-formGrey pb-10 pt-6 text-base shadow-[7px_7px_0px_0px_#CCCCCC]">
            {/* IMPORTANT: names id must match with BACK-END SERVER */}
            <form onSubmit={handleSubmit}>
                <div className="max-w-[100vw] rounded  py-8 px-10 mx-auto">
                    <h4 className="mb-12  text-2xl font-outfit font-bold capitalize">
                    {singleJob?.companyName}
                    </h4>

                    <div className="flex text-xl font-outfit flex-col gap-12">
                        {/* company info */}
                        <div>
                            <p className="capitalize">position: {singleJob?.position}</p>
                            <p className="capitalize">location: {singleJob?.street}, {singleJob?.city} {singleJob?.province} {singleJob?.postalCode}, {singleJob?.country}</p>
                        </div>
                        <div>
                            <p className="capitalize font-bold">job description:</p>
                            <div>
                               {singleJob?.description}
                            </div>
                        </div>
                        <div>
                            <p className="font-bold">Requirements:</p>
                            <div className="text">
                                <ol className="list-disc ml-5">
                                    {singleJob?.requirements.map((requirement, index) => (
                                        <li key={index}>{requirement}</li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div className="flex justify-end">
                        <button
                            type="submit"
                            className="font-outfit cursor-pointer bg-formSky text-white  h-[50px] hover:shadow-xl transition-all duration-300 ease-in-out capitalize inline-block w-1/6 mt-6 md:mt-0 shadow-lg"
                        >
                            apply
                        </button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
        </div>
    );
};
export default UserSingleJobPage;


