'use client';

import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import styles from './PageLoader.module.css';

export default function PageLoader() {
    return (
        <motion.div
            className={styles.splashScreen}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
                className={styles.splashLogo}
            >
                <Zap size={64} fill="currentColor" className={styles.splashIcon} />
                <div className={styles.splashText}>
                    Orisco <span>Energy</span>
                </div>
            </motion.div>
        </motion.div>
    );
}
