"use client";

import React, { useState } from 'react';
import styles from './header.module.css';
import Link from 'next/link';

const caseStudiesLinks = [
	{ name: 'Footwear', icon: <path d="M4 16l4-4h4l4 4m-12 0v4h12v-4" /> },
	{ name: 'Furniture', icon: <path d="M6 14h12m-12 0v6m12-6v6m-9-6v-4a2 2 0 012-2h4a2 2 0 012 2v4M6 14l-2-2v-4" /> },
	{ name: 'Apparel', icon: <path d="M6 6l4-2 4 2v12H6V6zm0 0l-4 4v4m12-8l4 4v4" /> },
	{ name: 'Transportation', icon: <path d="M4 16h16M6 16v-6l2-4h8l2 4v6M8 12h8" /> },
	{ name: 'Accessories', icon: <path d="M6 8h12v10H6V8zm3 0V6a3 3 0 016 0v2" /> },
	{ name: 'Medical', icon: <path d="M10 6v12m4-12v12m-6-6h8" /> },
	{ name: 'Home decor', icon: <path d="M12 4v2m-6 8l2-6h8l2 6H6zm6 0v6m-2 0h4" /> },
];

export default function Header() {
	const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isMobileSubMenuOpen, setIsMobileSubMenuOpen] = useState(false);

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
		setIsMobileSubMenuOpen(false);
	};

	return (
		<header className={styles.headerWrapper}>
			<div className='theme-container'>
				<div className={styles.desktopNav}>
					<div className={styles.glassPill}>
						<div className={styles.topRow}>
							<div className={styles.logo}>
								<Link href="/">DevCritters</Link>
							</div>
							<nav className={styles.navLinks}>
								<a href="#" className={styles.navLink}>Services</a>
								<div className={styles.dropdownTrigger}>
									<button className={styles.navLinkButton} onClick={() => setIsDesktopDropdownOpen(!isDesktopDropdownOpen)}>
										Case Studies
										<span className={`${styles.chevron} ${isDesktopDropdownOpen ? styles.chevronOpen : ''}`}>
											<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
												<path d="M6 9l6 6 6-6" />
											</svg>
										</span>
									</button>
								</div>
								<a href="#" className={styles.navLink}>About</a>
							</nav>
						</div>
						{isDesktopDropdownOpen && (
							<div className={styles.desktopDropdown}>
								<div className={styles.dropdownGrid}>
									{caseStudiesLinks.map((link) => (
										<a href="#" key={link.name} className={styles.dropdownItem}>
											<svg className={styles.itemIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
												{link.icon}
											</svg>
											<span>{link.name}</span>
										</a>
									))}
								</div>
							</div>
						)}
					</div>
					<button className={styles.ctaButton}>Get Qoute</button>
					<button className={styles.hamburger} onClick={() => setIsMobileMenuOpen(true)}>
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
							<path d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
				</div>
				{isMobileMenuOpen && (
					<div className={styles.mobileMenuOverlay}>
						<div className={styles.mobileMenuContent}>
							<div className={styles.mobileHeaderBar}>
								{!isMobileSubMenuOpen ? (
									<div className={styles.logo}>
										<svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
											<path d="M6 4h4l2 6 2-6h4l-4 10v6h-4v-6L6 4z" />
										</svg>
									</div>
								) : (
									<button className={styles.backButton} onClick={() => setIsMobileSubMenuOpen(false)}>
										<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
											<path d="M19 12H5M12 19l-7-7 7-7" />
										</svg>
									</button>
								)}
								<button className={styles.closeButton} onClick={closeMobileMenu}>
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
										<path d="M18 6L6 18M6 6l12 12" />
									</svg>
								</button>
							</div>
							{!isMobileSubMenuOpen && (
								<nav className={styles.mobileNavLinks}>
									<a href="#" className={styles.mobileNavLink}>LOOP™</a>
									<div className={styles.mobileNavDivider}></div>
									<button className={styles.mobileNavLink} onClick={() => setIsMobileSubMenuOpen(true)}>
										CASE STUDIES
										<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
											<path d="M9 18l6-6-6-6" />
										</svg>
									</button>
									<div className={styles.mobileNavDivider}></div>
									<a href="#" className={styles.mobileNavLink}>ABOUT</a>
									<div className={styles.mobileNavDivider}></div>
								</nav>
							)}
							{isMobileSubMenuOpen && (
								<div className={styles.mobileSubMenu}>
									{caseStudiesLinks.map((link) => (
										<a href="#" key={link.name} className={styles.mobileSubMenuItem}>
											<svg className={styles.itemIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
												{link.icon}
											</svg>
											<span>{link.name}</span>
										</a>
									))}
								</div>
							)}
							{!isMobileSubMenuOpen && (
								<div className={styles.mobileCtaWrapper}>
									<button className={styles.mobileCtaButton}>Get Qoute Book Appointment</button>
								</div>
							)}
						</div>
					</div>
				)}
			</div>
		</header>
	);
}