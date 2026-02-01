'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { LoadingScreen } from '@/components/ui/LoadingScreen';

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const pathname = usePathname();

  // Handle initial page load
  useEffect(() => {
    // Wait for DOM to be fully loaded
    const handleLoad = () => {
      // Add a small delay for smooth transition
      setTimeout(() => {
        setIsLoading(false);
      }, 1500); // 1.5s minimum display time
    };

    if (document.readyState === 'complete') {
      handleLoad();
      return;
    }

    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  // Handle route changes (page transitions)
  useEffect(() => {
    // Skip on initial load
    if (isLoading) return;

    // Show loading screen on route change
    setIsTransitioning(true);

    // Hide after a short delay
    const timeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 800); // 800ms transition time

    return () => clearTimeout(timeout);
  }, [pathname, isLoading]);

  return (
    <>
      <LoadingScreen isLoading={isLoading || isTransitioning} />
      {children}
    </>
  );
}

