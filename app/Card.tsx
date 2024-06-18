import React from 'react';
import { CardProps } from './model';

const Card = ({ period, title, desc, technologies }: CardProps) => {
    return (
        <article className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
            <div className='absolute -inset-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
            <p
                className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'
                aria-label={period}>
                {period}
            </p>
            <div className='z-10 sm:col-span-6'>
                <h3 className='font-medium leading-snug text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-base'>
                    <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                    {title}
                </h3>
                <p className='mt-2 leading-normal text-sm'>{desc}</p>
                <ul className='mt-2 flex flex-wrap' arial-label='Technologies used'>
                    {technologies.map((tech) => (
                        <li key={tech} className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>
                                {tech}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
};

export default Card;
