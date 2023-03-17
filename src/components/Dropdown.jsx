import React, { useState } from 'react';
import useAppContext from '../context/AppContext';
import {
    ChevronDownIcon,
    ChevronUpIcon
} from '@heroicons/react/24/solid';
import Button from './elements/Button';

export default function DropDown({ value }) {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(!show);

    const {
        logoutHandler,
    } = useAppContext();

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="flex items-center justify-center w-full px-4 py-[6px] text-sm font-medium rounded-lg bg-slate-800 hover:bg-slate-600 text-white focus:outline-none "
                    id="options-menu"
                    onClick={() => handleShow()}
                >
                    {value}
                    {show ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}
                </button>
            </div>
            <div
                className={`${show ? 'block' : 'hidden'
                    } origin-top-right absolute right-0 mt-2 w-fit rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5`}
            >
                <Button onClick={logoutHandler} color="red" className='px-5'>
                    <span className="flex flex-col">
                        <span>Logout</span>
                    </span>
                </Button>
            </div>
        </div>
    );
}
