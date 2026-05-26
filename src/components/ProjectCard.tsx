"use client";

import React, { memo } from "react";

interface ProjectCardProps {
	title: string;
	status: string;
	statusColor: { bg: string; text: string };
	shortDescription: string;
	icon: React.ComponentType<{ size: number; strokeWidth: number }>;
	gradient: string;
}

const ProjectCard = memo(function ProjectCard({
	title,
	status,
	statusColor,
	shortDescription,
	icon: IconComponent,
	gradient,
}: ProjectCardProps) {
	return (
		<div className="project-card">
			<a href={`#${title}`}>
				<div
					className="project-card-image"
					style={{ background: gradient }}
				>
					<IconComponent size={60} strokeWidth={1.5} />
				</div>

				<div className="project-card-content">
					<div
						className="project-card-status"
						style={{
							background: statusColor.bg,
							color: statusColor.text,
						}}
					>
						{status}
					</div>

					<h3 className="project-card-title">{title}</h3>

					<p className="project-card-description">
						{shortDescription}
					</p>
				</div>
			</a>
		</div>
	);
});

export default ProjectCard;
