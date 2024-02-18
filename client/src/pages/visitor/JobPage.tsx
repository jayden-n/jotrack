import React, { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import AllJobsComponent from '../../components/user/AllJobsComponent';
import { CiSearch } from 'react-icons/ci';
import { debounce } from 'lodash';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const JobPage: React.FC = () => {
    const [searchText, setSearchText] = useState<string>('');

    // NOTE: remember to debounce this
    const handleSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputText = e.target.value.trim();
        setSearchText(inputText);
    };

    return (
        <div>
            <div>
                <div className="flex flex-col items-center justify-center">
                    <form className="w-full max-w-4xl">
                        <div className="flex items-center w-full max-w-4xl border border-slate400 shadow-lg bg-white">
                            <input
                                onChange={handleSearchText}
                                className="w-full text-lg text-slate500 pl-4 py-3 placeholder:italic placeholder:text-slate300 focus:outline-none focus:ring-1"
                                placeholder="job title or location"
                                type="text"
                                name="search"
                            />
                            <div className="flex items-center justify-center bg-purple p-4">
                                <CiSearch className="text-white h-7 w-7" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div >
                <AllJobsComponent searchText={searchText} />
            </div>
        </div>
    );
};
export default JobPage;
