import { useCallback, useEffect, useState } from 'react';

const useFavicon = () => {
  const [isDark, setIsDark] = useState<boolean>();

  const getDeviceScheme = useCallback(() => {
    // Prevents SSR issues
    if (typeof window === 'undefined') return 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }, []);

  if (typeof window !== 'undefined') {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        setIsDark(event.matches);
      });
  }

  const changeFavicon = (value: string) => {
    const faviconTag = document.getElementById('faviconTag') as HTMLLinkElement;
    faviconTag?.setAttribute('href', `/favicon-${value}.ico`);
  };

  useEffect(() => {
    const value = getDeviceScheme();
    changeFavicon(value);
    if (value === 'dark') {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, [isDark]);

  return [isDark, changeFavicon];
};

export default useFavicon;
