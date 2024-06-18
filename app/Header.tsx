'use client';

import React, { useEffect, useState } from 'react';
import { NAV_ITEMS, SOCIAL_NETWORKS } from './constant';

const Header = () => {
    const [hash, setHash] = useState('');
    useEffect(() => {
        const handleHashChange = () => {
            setHash(window.location.hash);
        };
        window.addEventListener('hashchange', handleHashChange);
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);
    return (
        <header className='lg:sticky lg:top-0 lg:py-24 lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:flex lg:px-24'>
            <div>
                <h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl'>
                    <a href='/'>Kien Pham</a>
                </h1>
                <h2 className='mt-3 text-lg sm:text-xl font-medium tracking-tight text-slate-200'>
                    Middle Frontend Engineer
                </h2>
                <p className='leading-normal mt-4 max-w-xs'>
                    I build pixel-perfect, engaging, and accessible digital experiences.
                </p>
                <nav className='hidden lg:block nav'>
                    <ul className='mt-16 w-max'>
                        {NAV_ITEMS.map((item) => (
                            <li key={item.link}>
                                <a
                                    href={item.link}
                                    className={`group flex items-center py-3 ${
                                        hash === item.link ? 'active' : ''
                                    }`}>
                                    <span
                                        className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 motion-reduce:transition-none`}></span>
                                    <span className='nav-text font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 text-xs group-focus-visible:text-slate-200'>
                                        {item.title}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <ul className='mt-8 flex items-center'>
                {SOCIAL_NETWORKS.map((item) => (
                    <li key={item.title} className='mr-5 text-xs shrink-0'>
                        <a
                            href={item.link}
                            className='block hover:text-slate-200'
                            target='_blank'
                            title={item.title}>
                            <span className='sr-only'>{item.title}</span>
                            {item.icon}
                        </a>
                    </li>
                ))}
            </ul>
        </header>
    );
};

export default Header;
