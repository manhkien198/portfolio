'use client';
import { useEffect } from 'react';
import Header from './Header';
import MainContent from './MainContent';

export default function Portfolio() {
    useEffect(() => {
        const main = document.querySelector('main');
        const light = document.getElementById('light');
        const sections = document.querySelectorAll('section');

        const setActiveHash = (hash: string) => {
            document.querySelectorAll('a[href^="#"]').forEach((link) => {
                link.classList.toggle('active', link.getAttribute('href') === hash);
            });
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!light) return;
            const { clientX, clientY } = e;
            light.style.background = `radial-gradient(600px at ${clientX}px ${clientY}px, rgba(29, 78, 216, 0.25), transparent 100%)`;
        };

        const handleResize = () => {
            if (!main) return;

            if (window.innerWidth > 1024) {
                main.addEventListener('mousemove', handleMouseMove);
                return;
            }

            main.removeEventListener('mousemove', handleMouseMove);
            if (light) {
                light.style.background = '';
            }
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const hash = `#${entry.target.id}`;
                    window.history.replaceState(null, '', hash);
                    setActiveHash(hash);
                }
            },
            { rootMargin: '0px', threshold: 0.5 }
        );

        setActiveHash(window.location.hash || '#about');
        handleResize();
        window.addEventListener('resize', handleResize);
        sections.forEach((section) => observer.observe(section));

        return () => {
            window.removeEventListener('resize', handleResize);
            if (main) {
                main.removeEventListener('mousemove', handleMouseMove);
            }
            observer.disconnect();
        };
    }, []);

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
