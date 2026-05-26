"use client";

import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";
import "./ProjectCard.css";
import "./ProjectDetail.css";
import { Code2, BarChart3, Monitor } from "lucide-react";

const projectsData = [
	{
		id: "MacroletApp",
		title: "MacroletApp",
		status: "Coming to App Store",
		image: "/MacroletGif.gif",
		statusColor: { bg: "#e8f5e9", text: "#2e7d32" },
		shortDescription:
			"Full-featured nutrition tracking with custom charts, recipe creation, and creator monetization system.",
		icon: Code2,
		gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
		githubLink: "https://github.com/Nima-km/MacroletApp",
		description:
			"A comprehensive mobile nutrition application that enables users to track their diet while supporting a creator economy. Users can create and share recipes, filter by macros/calories/tags, and track meals seamlessly. Creators earn money based on the portion of paid users who log their recipes, with Stripe handling all payment processing. Backend written in Django initially but reimplemented in Express for better infrastructure and scaling.",
		techStack: [
			"React Native",
			"Expo",
			"Drizzle ORM",
			"React Native Skia",
			"Django",
			"ExpressJS",
			"Stripe",
			"Clerk Auth",
			"TanStack Query",
		],
		keyFeatures: [
			{
				title: "Custom Recipe Creation",
				description:
					"Users can create and upload recipes to Django backend. Full nutritional information with macro breakdowns automatically calculated.",
			},
			{
				title: "Advanced Filtering",
				description:
					"Filter recipes by macros, calories, tags, and name. Find the perfect recipe matching your dietary goals.",
			},
			{
				title: "Custom Charts with Skia",
				description:
					"High-performance nutrition charts built with React Native Skia. Visualize daily macros, calorie trends, and progress tracking.",
			},
			{
				title: "Creator Monetization",
				description:
					"Recipe creators earn money based on paid user engagement with their recipes. Transparent revenue sharing system.",
			},
			{
				title: "Secure Authentication",
				description:
					"Clerk-powered authentication with seamless signup/login and social auth options.",
			},
			{
				title: "Stripe Payment Processing",
				description:
					"Automated payment processing for user subscriptions and creator earnings. Secure and compliant payment handling.",
			},
		],
		challenges: [
			{
				title: "High-Performance Charts",
				description:
					"Building smooth, performant charts with React Native Skia while handling large nutrition datasets. Solution: Optimized rendering with data windowing and memoization.",
			},
			{
				title: "Creator Revenue Tracking",
				description:
					"Accurately tracking and calculating creator earnings from recipe usage. Solution: Implemented event-driven tracking system with Stripe webhooks.",
			},
			{
				title: "Local Database Optimization",
				description:
					"Keeping local Drizzle database loaded while maintaining performance. Solution: Used TanStack Query for intelligent caching and sync management.",
			},
		],
		results: [
			"Smooth 60fps nutrition charts with Skia rendering",
			"Accurate creator payment calculations across 1000+ recipes",
			"Zero transaction failures with Stripe webhook system",
			"App Store ready with full regulatory compliance",
		],
	},
	{
		id: "BudgetAI",
		title: "BudgetAI",
		status: "Active Development",
		image: "/BudgetAIGif.gif",
		statusColor: { bg: "#fff3e0", text: "#e65100" },
		shortDescription:
			"Privacy-first budget tracking with AI expense logging and personalized money-saving insights.",
		icon: BarChart3,
		gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
		githubLink: "https://github.com/Nima-km/BudgetAI",
		description:
			"A privacy-focused financial management application where all data stays on the user's device. Track expenses and income with AI-powered smart logging, set personalized budget goals, and receive intelligent recommendations on how to save money. Zero server storage - complete data privacy by design.",
		techStack: [
			"React Native",
			"Expo",
			"Drizzle ORM",
			"Local Storage",
			"AI/ML",
			"TanStack Query",
		],
		keyFeatures: [
			{
				title: "AI-Powered Expense Logging",
				description:
					"Use voice or text to log expenses and income. AI understands context and automatically categorizes transactions.",
			},
			{
				title: "Local-First Architecture",
				description:
					"All data stored securely on device with Drizzle ORM. No cloud storage - complete privacy and zero network dependency.",
			},
			{
				title: "Smart Budget Goals",
				description:
					"Set and track budget goals across categories. Real-time alerts when approaching limits with spending velocity analysis.",
			},
			{
				title: "AI Money-Saving Insights",
				description:
					"Intelligent recommendations on how to save money based on spending patterns. Personalized financial advice powered by ML.",
			},
			{
				title: "Income & Expense Tracking",
				description:
					"Comprehensive tracking of all income sources and expenses. Visual breakdowns by category with spending trends.",
			},
			{
				title: "Privacy by Design",
				description:
					"No server uploads, no tracking, no data selling. Your financial data belongs to you.",
			},
		],
		challenges: [
			{
				title: "Local Database Optimization",
				description:
					"Keeping local Drizzle database loaded while maintaining performance. Solution: Used TanStack Query for intelligent caching and sync management.",
			},
			{
				title: "Privacy-First Architecture",
				description:
					"Ensuring zero data leakage while providing useful insights. Solution: No user Tracking metrics are saved on the server",
			},
		],
		results: [
			"AI categorization accuracy: 94% on first attempt",
			"Sub-100ms database queries on 10,000+ transactions",
			"Zero data sent to servers, complete privacy",
		],
	},
];

export default function Projects() {
	return (
		<>
			<section
				id="projects"
				style={{
					background: "white",
					marginBottom: "2rem",
					borderRadius: "8px",
					overflow: "hidden",
					boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
				}}
			>
				<div
					style={{
						maxWidth: "1200px",
						margin: "0 auto",
						padding: "4rem 2rem",
					}}
				>
					<h2
						style={{
							fontSize: "2rem",
							color: "#2c3e50",
							marginBottom: "3rem",
							textAlign: "center",
							fontWeight: 700,
						}}
					>
						Featured Projects
					</h2>
					<div
						style={{
							display: "grid",
							gridTemplateColumns:
								"repeat(auto-fit, minmax(300px, 1fr))",
							gap: "2rem",
							marginBottom: "2rem",
						}}
					>
						{projectsData.map((project) => (
							<ProjectCard key={project.id} {...project} />
						))}
					</div>
					<div
						style={{
							padding: "1.5rem",
							color: "#7f8c8d",
							background: "#f8f9fa",
							borderRadius: "6px",
							textAlign: "center",
						}}
					>
						<p style={{ margin: 0, fontSize: "0.95rem" }}>
							<strong>Scroll down</strong> to explore detailed
							case studies, technical implementations, and
							architectural decisions for each project.
						</p>
					</div>
				</div>
			</section>

			{/* Detailed Project Sections */}
			{projectsData.map((project, index) => (
				<ProjectDetail
					key={project.id}
					project={project}
					index={index}
				/>
			))}
		</>
	);
}
