'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import PageLoader from '@/components/PageLoader';

export default function GlobalLoader({ children }) {
    const [isLoading, setIsLoading] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        // Trigger loading on mount and on pathname change
        setIsLoading(true);

        // Simulate loading time or wait for resources
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2 second minimal load time

        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <>
            <AnimatePresence>
                {isLoading && <PageLoader />}
            </AnimatePresence>
            {/* 
                We can optionally hide children content until loaded, 
                or just show loader on top. 
                Showing loader on top (overlay) is usually better for perceived performance 
                if content is already rendering behind.
            */}
            {children}
        </>
    );
}
