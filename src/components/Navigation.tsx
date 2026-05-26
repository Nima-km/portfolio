"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Navigation.module.css";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "#projects", label: "Projects" },
        { href: "#skills", label: "Skills" },
        { href: "#about", label: "About" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>Nima Karimi</div>

                <button
                    className={styles.menuBtn}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
                </button>

                <ul
                    className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}
                >
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
