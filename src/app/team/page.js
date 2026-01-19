'use client';
import { useState } from 'react';
import styles from './page.module.css';
import SkillsModal from '@/components/SkillsModal';
import { ceo, teamMembers } from '@/data/team';

// Metadata cannot be exported from a client component, moving to layout or separate file if critical, 
// for now removing to fix build error as client components can't export metadata
// export const metadata = { ... } 

export default function TeamPage() {
    const [selectedMember, setSelectedMember] = useState(null);

    return (
        <div className={styles.container}>
            <header className={styles.heroHeader}>
                <div style={{ position: 'relative', zIndex: 10 }}>
                    <h1>Leadership & Team</h1>
                    <p>
                        Meet the professionals delivering reliable, safe, and efficient energy services.
                    </p>
                </div>
            </header>

            <section className={styles.ceoSection}>
                <div className={styles.ceoImageWrapper}>
                    <div className={styles.ceoImage} aria-label="CEO Placeholder Image" />
                    {/* <img src="/path-to-ceo-image.jpg" alt="CEO Name" className={styles.ceoImage} /> */}
                </div>
                <div className={styles.ceoContent}>
                    <h2>James Oritse</h2>
                    <span className={styles.role}>Chief Executive Officer (CEO)</span>
                    <p className={styles.bio}>
                        Our CEO brings over 30 years of multinational oil and gas industry experience. He leads Orisco Energy with a focus on technical excellence and operational discipline.
                    </p>
                    <p className={styles.bio}>
                        His leadership extends beyond operations to organizational development and public service, ensuring Orisco Energy delivers total client satisfaction while maintaining the highest safety standards.
                    </p>
                    <blockquote className={styles.quote}>
                        "Orisco Energy is committed to conducting all activities in a manner that ensures the health and safety of employees, assets, the public, and the environment."
                    </blockquote>
                    <button
                        className={styles.viewSkillsBtn}
                        onClick={() => setSelectedMember(ceo)}
                        style={{ marginTop: '1rem' }}
                    >
                        View Details
                    </button>
                </div>
            </section>

            <section>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.expertsHeader}>Our Experts</h2>
                </div>
                <div className={styles.teamGrid}>
                    {teamMembers.map((member, index) => (
                        <div key={index} className={styles.teamCard}>
                            <div className={styles.memberImage} />
                            {/* <img src={member.image} alt={member.name} className={styles.memberImage} /> */}
                            <div className={styles.memberInfo}>
                                <h3>{member.name}</h3>
                                <div className={styles.memberRole}>{member.role}</div>
                                <p className={styles.memberBio}>{member.bio}</p>
                                <button
                                    className={styles.viewSkillsBtn}
                                    onClick={() => setSelectedMember(member)}
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <SkillsModal
                isOpen={!!selectedMember}
                onClose={() => setSelectedMember(null)}
                member={selectedMember}
            />
        </div>
    );
}
