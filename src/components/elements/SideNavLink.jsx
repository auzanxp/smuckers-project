import React from 'react';
import { Link } from 'react-router-dom';

export default function SideNavLink({ icon, href, active, name, ...props }) {
    return (
        <Link
            {...props}
            to={href}
            className={`${active && 'bg-slate-800 text-black'
                } text-white hover:bg-slate-700                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           hover:text-white py-3 px-5 cursor-pointer transition duration-300 flex gap-x-2 mb-3 [&>svg]:w-5 [&>svg]:h-5`}
        >
            {icon}
            <span className="text-sm font-medium tracking-wider uppercase">
                {name}
            </span>
        </Link>
    );
}
