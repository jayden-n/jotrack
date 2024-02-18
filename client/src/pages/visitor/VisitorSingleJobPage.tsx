import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const UserSingleJobPage: React.FC = () => {
    const navigate = useNavigate();
    const handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void = (
        event: React.FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault();
        toast.warning('Please log-in or sign-up first');

        navigate('/login');
    };

    return (
        <div className="flex justify-center">
        <section className="flex justify-center max-w-6xl w-full bg-formGrey pb-10 pt-6 text-base shadow-[7px_7px_0px_0px_#CCCCCC]">
            {/* IMPORTANT: names id must match with BACK-END SERVER */}
            <form onSubmit={handleSubmit}>
                <div className="max-w-[100vw] rounded  py-8 px-10 mx-auto">
                    <h4 className="mb-12  text-2xl font-outfit font-bold capitalize">
                        Company Name
                    </h4>

                    <div className="flex text-xl font-outfit flex-col gap-12">
                        {/* company info */}
                        <div>
                            <p className="capitalize">position: front-end developer</p>
                            <p className="capitalize">company name: apple</p>
                        </div>
                        <div>
                            <p className="capitalize font-bold">job description:</p>
                            <div>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
                                officia labore, voluptatibus harum consectetur asperiores ut et
                                exercitationem velit repellendus officiis, in voluptas adipisci
                                hic numquam! Quo ipsum omnis in iusto sit molestias odio
                                laboriosam!
                            </div>
                        </div>
                        <div>
                            <p className="font-bold">Requirements:</p>
                            <div className="text">
                                <ol className="list-disc ml-5">
                                    <li>React</li>
                                    <li>TypeScript</li>
                                    <li>TailwindCSS</li>
                                    <li>A car to commute</li>
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
