"use client";

import styles from "./Skills.module.css";
import {
    Code2,
    Zap,
    Database,
    Shield,
    Terminal,
    BarChart3,
    Sparkles,
    Cpu,
    Smartphone,
    Monitor,
    GitBranch,
    Gauge,
    Lock,
    TestTube2,
    Cloud,
    Package,
    Server,
    HardDrive,
} from "lucide-react";

const skillCategories = [
    {
        name: "Mobile Development",
        skills: [
            { name: "React Native", icon: Smartphone },
            { name: "Expo", icon: Package },
            { name: "iOS/Android", icon: Smartphone },
            { name: "TypeScript", icon: Code2 },
        ],
    },
    {
        name: "Web Development",
        skills: [
            { name: "Next.js", icon: Monitor },
            { name: "React", icon: Sparkles },
            { name: "Django", icon: Server },
            { name: "Express", icon: Cloud },
        ],
    },
    {
        name: "State Management & Data",
        skills: [
            { name: "Redux/Tanstack", icon: GitBranch },
            { name: "WatermelonDB", icon: Database },
            { name: "PostgreSQL", icon: HardDrive },
            { name: "SQLite", icon: Database },
        ],
    },
    {
        name: "Architecture & Performance",
        skills: [
            { name: "System Design", icon: Cpu },
            { name: "Performance Optimization", icon: Zap },
            { name: "Offline-First Design", icon: Cloud },
            { name: "Security Best Practices", icon: Shield },
        ],
    },
    {
        name: "Tools & Practices",
        skills: [
            { name: "Git/GitHub", icon: GitBranch },
            { name: "Testing", icon: TestTube2 },
            { name: "CLI Tools", icon: Terminal },
            { name: "Analytics", icon: BarChart3 },
        ],
    },
];

const stats = [
    { number: "2", label: "Production Apps" },
    { number: "3+", label: "Years Experience" },
    { number: "15+", label: "Tech Skills" },
    { number: "100%", label: "Committed" },
];

export default function Skills() {
    return (
        <section id="skills" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Technical Skills</h2>

                <div className={styles.categories}>
                    {skillCategories.map((category) => (
                        <div key={category.name} className={styles.category}>
                            <h3 className={styles.categoryTitle}>
                                {category.name}
                            </h3>
                            <div className={styles.skillsGrid}>
                                {category.skills.map((skill) => {
                                    const IconComponent = skill.icon;
                                    return (
                                        <div
                                            key={skill.name}
                                            className={styles.skillItem}
                                        >
                                            <IconComponent
                                                size={60}
                                                strokeWidth={1.5}
                                            />
                                            <div className={styles.skillName}>
                                                {skill.name}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.statsGrid}>
                    {stats.map((stat) => (
                        <div key={stat.label} className={styles.statCard}>
                            <div className={styles.statNumber}>
                                {stat.number}
                            </div>
                            <div className={styles.statLabel}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
