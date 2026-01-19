'use client';
import { X } from 'lucide-react';
import styles from './SkillsModal.module.css';
import { useEffect } from 'react';

export default function SkillsModal({ isOpen, onClose, member }) {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !member) return null;

    // Helper to format text with **bold** support and newline handling
    const formatText = (text) => {
        if (!text) return null;
        return text.split('\n').map((line, i) => (
            <span key={i} style={{ display: 'block', marginBottom: '0.5em' }}>
                {line.split(/(\*\*.*?\*\*)/).map((part, j) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                        return <strong key={j}>{part.slice(2, -2)}</strong>;
                    }
                    return part;
                })}
            </span>
        ));
    };

    return (
        <div className={styles.backdrop} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

                <div className={styles.modalContent}>
                    {/* Top Header: Profile Info */}
                    <div className={styles.modalHeader}>
                        <h3 className={styles.title}>{member.name}</h3>
                        <span className={styles.subtitle}>{member.role}</span>
                    </div>

                    {/* Main Body: Details */}
                    <div className={styles.mainBody}>
                        <div className={styles.bioText}>
                            {formatText(member.details || member.bio)}
                        </div>
                    </div>
                </div>

                {/* Footer with Explicit Close Button */}
                <div className={styles.footer}>
                    <button className={styles.closeButtonFooter} onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
