import { useEffect } from "react";

export default function useWatchRef<T extends HTMLElement>(elementRef: React.RefObject<T | null>, locales: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions) {
    useEffect(() => {
        const timer = setInterval(() => {
            if (elementRef.current) {
                elementRef.current.textContent = new Date().toLocaleString(locales, options);
            }
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    return elementRef;
}
