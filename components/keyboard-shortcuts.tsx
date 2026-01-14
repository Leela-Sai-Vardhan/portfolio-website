'use client';

import { useEffect } from 'react';
import { useTheme } from 'next-themes';
import { useFocusMode } from '@/components/focus-mode-context';

export function useKeyboardShortcuts() {
    const { setTheme, theme } = useTheme();
    const { toggleFocusMode } = useFocusMode();

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            // Ignore if user is typing in an input
            if (
                e.target instanceof HTMLInputElement ||
                e.target instanceof HTMLTextAreaElement
            ) {
                return;
            }

            // D - Toggle dark mode
            if (e.key === 'd' && !e.metaKey && !e.ctrlKey && !e.altKey) {
                setTheme(theme === 'dark' ? 'light' : 'dark');
            }

            // F - Toggle focus mode
            if (e.key === 'f' && !e.metaKey && !e.ctrlKey && !e.altKey) {
                toggleFocusMode();
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [setTheme, theme, toggleFocusMode]);
}

export function KeyboardShortcuts() {
    useKeyboardShortcuts();
    return null;
}
