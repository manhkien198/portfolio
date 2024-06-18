'use client';
import { useEffect } from 'react';
import Header from './Header';
import MainContent from './MainContent';

export default function Portfolio() {
    useEffect(() => {
        handleFlashLight();
        const navItem = document.querySelector(`a[href="#about"]`);
        navItem?.classList.add('active');
        window.addEventListener('resize', handleFlashLight);
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const section = entry.target;
                    window.location.hash = section.id;
                }
            },
            { rootMargin: '0px', threshold: 0.5 }
        );
        sections.forEach((section) => {
            observer.observe(section);
        });
        return () => {
            window.removeEventListener('resize', handleFlashLight);
            // window.removeEventListener('scroll', throttle(handleScroll, 200));
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);
    const handleFlashLight = () => {
        const main = document.getElementsByTagName('main')[0];
        if (window.innerWidth > 1024) {
            // window.addEventListener('scroll', handleScroll);
            main.addEventListener('mousemove', function (e) {
                const clientX = e.clientX;
                const clientY = e.clientY;
                const light = document.getElementById('light');
                if (light) {
                    light.style.background = `radial-gradient(600px at ${clientX}px ${clientY}px, rgba(29, 78, 216, 0.25), transparent 100%)`;
                }
            });
        }
    };
    // const handleScroll = () => {
    //     const scrollY = window.scrollY;
    //     const sections = document.querySelectorAll('section');
    //     sections.forEach((section) => {
    //         const sectionTop = section.offsetTop;
    //         const navItem = document.querySelector(`a[href="#${section.id}"]`);
    //         if (scrollY >= sectionTop - 100 && scrollY < sectionTop + section.offsetHeight) {
    //             navItem?.classList.add('active');
    //         } else {
    //             navItem?.classList.remove('active');
    //         }
    //     });
    // };
    return (
        <main className='relative'>
            <div className='fixed inset-0 pointer-events-none transition' id='light'></div>
            <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:py-20 md:px-20 lg:px-24 lg:py-0'>
                <div className='lg:flex lg:gap-4'>
                    <Header />
                    <MainContent />
                </div>
            </div>
        </main>
    );
}
