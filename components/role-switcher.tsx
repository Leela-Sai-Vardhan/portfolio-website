"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
    "Full-Stack Developer",
    "Application Developer",
];

export function RoleSwitcher() {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000); // Switch every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative inline-block min-h-[2.5rem] lg:min-h-[3rem]">
            <AnimatePresence mode="wait">
                <motion.span
                    key={currentRoleIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                    }}
                    className="absolute left-0 top-0 whitespace-nowrap text-2xl font-semibold text-muted-foreground lg:text-3xl"
                >
                    {roles[currentRoleIndex]} Student
                </motion.span>
            </AnimatePresence>
        </div>
    );
}
