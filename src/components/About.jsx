import React from "react";
import { Box, Typography, Chip, Stack, Paper } from "@mui/material";

const purple = "#a259ff";
const purpleDark = "#2d1a3a";

const techStacks = [
	{ name: "Java" },
	{ name: "SQL" },
	{ name: "JavaScript" },
	{ name: "TypeScript" },
	{ name: "AngularJS" },
	{ name: "ReactJS" },
	{ name: "HTML" },
	{ name: "CSS" },
	{ name: "JQuery" },
	{ name: "Spring Boot" },
	{ name: "Spring MVC" },
	{ name: "Node.js" },
	{ name: "Git" },
	{ name: "GitHub" },
	{ name: "Jenkins" },
	{ name: "Swagger" },
	{ name: "Jira" },
	{ name: "Docker" },
	{ name: "AWS" },
	{ name: "Azure DevOps" },
	{ name: "Veracode" },
	{ name: "Sonar" },
	{ name: "Chrome Devtools" },
	{ name: "Postman" },
];

export default function About() {
	return (
		<Box
			id="about"
			sx={{
				py: 8,
				px: { xs: 2, sm: 4, md: 6 },
				maxWidth: 1100,
				mx: "auto",
				fontFamily: "Fira Mono, monospace",
				scrollMarginTop: { xs: 70, md: 90 },
			}}
		>
			<Typography
				variant="h3"
				component="h2"
				gutterBottom
				fontWeight={700}
				color={purple}
				mb={4}
				sx={{
					fontFamily: "Fira Mono, monospace",
					letterSpacing: 2,
				}}
			>
				About Me
			</Typography>
			<Paper
				elevation={4}
				sx={{
					p: 4,
					borderRadius: 4,
					bgcolor: purpleDark,
					border: `2px solid ${purple}`,
					fontFamily: "Fira Mono, monospace",
					color: "#fff",
					mb: 2,
				}}
			>
				<Typography
					variant="body1"
					sx={{ mb: 3, color: "#fff", fontFamily: "Fira Mono, monospace" }}
				>
					With 2.9 years of experience, I specialize in backend systems using Java
					Spring Boot, microservices, and front-end applications with Angular.
					Proficient in Agile methodologies and SDLC, I ensure efficient project
					management. My expertise includes GitHub for code management and Jenkins
					for CI/CD automation.
				</Typography>
				<Typography
					variant="body2"
					sx={{ mb: 2, color: purple, fontFamily: "Fira Mono, monospace" }}
				>
					<b>Skills/Tools:</b> Java, SQL, JavaScript, TypeScript, HTML, CSS,
					Angular, Spring Boot, JQuery, React, Maven, Node.js, Git, GitHub,
					MySQL, Jenkins, Swagger, Github Copilot, AWS, Azure Devops, Jira
				</Typography>
				<Stack direction="row" spacing={1} flexWrap="wrap">
					{techStacks.map((stack) => (
						<Chip
							key={stack.name}
							label={stack.name}
							sx={{
								bgcolor: "#20132b",
								color: purple,
								border: `1px solid ${purple}`,
								fontFamily: "Fira Mono, monospace",
								mb: 1,
								mx: 0.5,
								fontWeight: 700,
								fontSize: "1.05rem",
								letterSpacing: 1,
								transition: "all 0.2s",
								cursor: "pointer",
								"&:hover": {
									bgcolor: purple,
									color: "#fff",
									borderColor: "#fff",
									transform: "scale(1.08) rotate(-2deg)",
								},
								"&:active": { transform: "scale(0.98)" },
							}}
						/>
					))}
				</Stack>
			</Paper>
		</Box>
	);
}