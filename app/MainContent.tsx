import React from 'react';
import Card from './Card';
import { WORK_EXPERIENCE } from './constant';

const MainContent = () => {
    return (
        <main id='content' className='pt-24 lg:w-1/2 lg:py-24'>
            <section
                id='about'
                className='mb-16 scroll-mt-16 md:mb-24 lb:mb-36 lg:scroll-mt-24'
                aria-label='About me'>
                <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
                    <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
                        About
                    </h2>
                </div>
                <p className='mb-4'>
                    Dedicated frontend developer with{' '}
                    <span className='font-bold text-white'>4 years of experience</span> specializing
                    in <span className='font-bold text-white'>React.js</span> and{' '}
                    <span className='font-bold text-white'>Angular</span>. Committed to delivering
                    quality work and continuously improving skills in web development. Enthusiastic
                    team player with a collaborative approach to problem-solving. Grateful for the
                    opportunities to contribute to meaningful projects and eager to continue
                    learning and growing in the field.
                </p>
                <p className='mb-4'>
                    I have led the development of a booking platform that improved user engagement,
                    and I contributed to redesigning an e-commerce website, significantly increasing
                    user retention. I excel at problem-solving, ensuring high performance and
                    scalability in all my projects.
                </p>
                <p>
                    I am passionate about turning complex problems into intuitive interfaces and
                    continuously learning to stay ahead in web development. Feel free to reach out
                    for collaboration or any questions about my work.
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
