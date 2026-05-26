"use client";

import React, { useState, useEffect, useRef, memo } from "react";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import styles from "./Contact.module.css";

interface ProjectData {
	id: string;
	title: string;
	status: string;
	statusColor: { bg: string; text: string };
	icon: React.ComponentType<{ size: number; strokeWidth: number }>;
	image?: string;
	gradient: string;
	description: string;
	githubLink: string;
	techStack: string[];
	keyFeatures: Array<{
		title: string;
		description: string;
	}>;
	challenges: Array<{
		title: string;
		description: string;
	}>;
	results: string[];
}

interface ProjectDetailProps {
	project: ProjectData;
	index: number;
}

const ProjectDetail = memo(function ProjectDetail({
	project,
	index,
}: ProjectDetailProps) {
	const sectionRef = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.1 },
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, []);

	const ProjectIcon = project.icon;
	const bgColor = index % 2 === 0 ? "white" : "#f8f9fa";

	return (
		<div
			ref={sectionRef}
			className={`animated-project-section ${isVisible ? "visible" : ""}`}
			style={{ background: bgColor }}
			id={project.id}
		>
			<div
				style={{
					maxWidth: "1200px",
					margin: "0 auto",
					padding: "6rem 2rem",
				}}
			>
				{/* Hero Section */}
				<div className="project-hero">
					<div>
						<div
							className="project-status-badge"
							style={{
								background: project.statusColor.bg,
								color: project.statusColor.text,
							}}
						>
							{project.status}
						</div>

						<h2 className="project-title">{project.title}</h2>

						<p className="project-description">
							{project.description}
						</p>
						<a
							key={project.githubLink}
							href={project.githubLink}
							target={
								project.githubLink.startsWith("http")
									? "_blank"
									: undefined
							}
							rel={
								project.githubLink.startsWith("http")
									? "noopener noreferrer"
									: undefined
							}
							className={styles.link}
						>
							GitHub Link
						</a>
					</div>

					<div
						className="project-hero-image"
						style={{ background: project.gradient }}
					>
						{!project.image ? (
							<ProjectIcon size={120} strokeWidth={1.2} />
						) : (
							<Image
								src={project.image}
								alt={""}
								fill
								unoptimized
							/>
						)}
					</div>
				</div>

				{/* Tech Stack */}
				<div className="project-section">
					<h3 className="project-section-title">Tech Stack</h3>
					<div className="tech-stack-grid">
						{project.techStack.map((tech) => (
							<div key={tech} className="tech-item">
								{tech}
							</div>
						))}
					</div>
				</div>

				{/* Key Features */}
				<div className="project-section">
					<h3 className="project-section-title">Key Features</h3>
					<div className="features-grid">
						{project.keyFeatures.map((feature, idx) => (
							<div key={idx} className="feature-card">
								<h4 className="feature-title">
									{feature.title}
								</h4>
								<p className="feature-description">
									{feature.description}
								</p>
							</div>
						))}
					</div>
				</div>

				{/* Challenges */}
				<div className="project-section">
					<h3 className="project-section-title">
						Technical Challenges
					</h3>
					<div className="challenges-grid">
						{project.challenges.map((challenge, idx) => (
							<div key={idx} className="challenge-card">
								<h4 className="challenge-title">
									{challenge.title}
								</h4>
								<p className="challenge-description">
									{challenge.description}
								</p>
							</div>
						))}
					</div>
				</div>

				{/* Results */}
				<div className="project-section">
					<h3 className="project-section-title">Results & Impact</h3>
					<div className="results-grid">
						{project.results.map((result, idx) => (
							<div key={idx} className="result-item">
								<CheckCircle2 size={24} color="#27ae60" />
								<p>{result}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
});

export default ProjectDetail;
