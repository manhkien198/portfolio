import React from 'react';
import Card from './Card';
import { WORK_EXPERIENCE } from './constant';

const MainContent = () => {
    return (
        <main id='content' className='pt-24 lg:w-1/2 lg:py-24'>
            <section
                id='about'
                className='mb-20 scroll-mt-16 md:mb-28 lg:mb-40 lg:scroll-mt-24'
                aria-label='About me'>
                <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
                    <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
                        About
                    </h2>
                </div>
                <p className='mb-4'>
                    Results-oriented Frontend Developer with{' '}<span className='font-bold text-white'>6 years of experience</span>{' '}architecting and maintaining scalable web applications specializing in {' '}<span className='font-bold text-white'>React.js, Next.js, Vue.js, and Angular</span>{' '}
                </p>
                <p className='mb-4'>
                    I focus on fast, accessible interfaces, clean component structure, and smooth user interactions across desktop and mobile.
                </p>
                <p className='mb-4'>
                    I enjoy building polished product experiences, tuning performance, and keeping UI behavior predictable as the page scrolls through sections.
                </p>
                <p>
                    Outside of implementation details, I care about shipping work that stays maintainable as the codebase grows.
                </p>
            </section>
            <section
                id='experience'
                className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
                aria-label='Work experience'>
                <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
                    <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
                        Experiences
                    </h2>
                </div>
                <div>
                    <ol className='group/list'>
                        {WORK_EXPERIENCE.map((item) => (
                            <li key={item.period} className='mb-12'>
                                <Card {...item} />
                            </li>
                        ))}
                    </ol>
                </div>
            </section>
        </main>
    );
};

export default MainContent;
