import styles from "./Contact.module.css";

const contactLinks = [
	{
		label: "GitHub",
		icon: "fab fa-github",
		href: "https://github.com/Nima-km",
	},
	{
		label: "LinkedIn",
		icon: "fab fa-linkedin",
		href: "https://www.linkedin.com/in/nima-karimi/",
	},
	{
		label: "Email",
		icon: "fas fa-envelope",
		href: "mailto:n.karimi206@gmail.com",
	},
];

export default function Contact() {
	return (
		<>
			<section id="contact" className={styles.section}>
				<div className={styles.container}>
					<h2 className={styles.title}>Let's Work Together</h2>
					<p className={styles.subtitle}>
						Interested in my work? Let's connect and discuss how I
						can contribute to your team.
					</p>
					<div className={styles.links}>
						{contactLinks.map((link) => (
							<a
								key={link.label}
								href={link.href}
								target={
									link.href.startsWith("http")
										? "_blank"
										: undefined
								}
								rel={
									link.href.startsWith("http")
										? "noopener noreferrer"
										: undefined
								}
								className={styles.link}
							>
								<i className={link.icon}></i>
								{link.label}
							</a>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
