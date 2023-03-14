import React from 'react';
import { Link } from 'react-router-dom';

export default function SideNavLink({ icon, href, active, name, ...props }) {
    return (
        <Link
            {...props}
            to={href}
            className={`${active && 'bg-primary text-black'
                } text-white dark:text-gray-100 hover:bg-slate-300                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           hover:text-white py-3 px-5 cursor-pointer transition duration-300 flex gap-x-2 mb-3 [&>svg]:w-5 [&>svg]:h-5`}
        >
            {icon}
            <span className="text-sm font-medium tracking-wider uppercase">
                {name}
            </span>
        </Link>
    );
}
