'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface FocusModeContextType {
    isFocusMode: boolean;
    toggleFocusMode: () => void;
}

const FocusModeContext = createContext<FocusModeContextType>({
    isFocusMode: false,
    toggleFocusMode: () => { },
});

export function FocusModeProvider({ children }: { children: ReactNode }) {
    const [isFocusMode, setIsFocusMode] = useState(false);

    const toggleFocusMode = () => {
        setIsFocusMode(prev => !prev);
    };

    return (
        <FocusModeContext.Provider value={{ isFocusMode, toggleFocusMode }}>
            {children}
        </FocusModeContext.Provider>
    );
}

export const useFocusMode = () => useContext(FocusModeContext);
