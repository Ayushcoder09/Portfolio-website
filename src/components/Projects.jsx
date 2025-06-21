import React from "react";
import {
	Box,
	Typography,
	Grid,
	Paper,
	Chip,
	Button,
	Link,
	Stack,
} from "@mui/material";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";

const purple = "#a259ff";
const purpleDark = "#2d1a3a";

const projects = [
	{
		title: "TaskMinder (Spring Boot & React)",
		description:
			"Enhanced frontend efficiency by implementing modular UI with React components, hooks, and props achieving a 20% reduction in load times. Implemented RESTful APIs in Spring Boot to handle CRUD operations for managing todo items. Integrated JWT with Spring Security for stateless authentication. Deployed on AWS Elastic Beanstalk and S3 for 99.9% uptime.",
		link: "https://github.com/Ayushcoder09/TaskMinderApp",
		stack: ["React", "Spring Boot", "AWS", "JWT", "REST API"],
	},
	{
		title: "Analog Clock",
		description:
			"Created a visually engaging experience by utilizing CSS transforms to animate clock hands smoothly, achieving over 100 views on Github. Enhanced real-time functionality by implementing JavaScript event handling, enabling accurate and continuous time updates, leading to 80+ user interactions.",
		link: "https://github.com/Ayushcoder09/AnalogClock",
		stack: ["JavaScript", "CSS", "HTML"],
	},
];

export default function Projects() {
	return (
		<Box
			id="projects"
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
				Projects
			</Typography>
			<Grid container spacing={4}>
				{projects.map((project, idx) => (
					<Grid item xs={12} md={6} key={idx}>
						<Paper
							elevation={4}
							sx={{
								p: 3,
								borderRadius: 3,
								minHeight: 320,
								bgcolor: purpleDark,
								border: `2px solid ${purple}`,
								display: "flex",
								flexDirection: "column",
								fontFamily: "Fira Mono, monospace",
								transition: "transform 0.2s",
								"&:hover": {
									transform: "scale(1.03)",
									boxShadow: `0 0 32px ${purple}`,
									borderColor: "#fff",
								},
							}}
						>
							<Stack
								direction="row"
								alignItems="center"
								spacing={1}
								mb={2}
							>
								<FolderOpenIcon sx={{ color: purple }} />
								<Typography
									variant="h5"
									fontWeight={700}
									sx={{
										color: purple,
										fontFamily: "Fira Mono, monospace",
									}}
								>
									{project.title}
								</Typography>
							</Stack>
							<Typography
								variant="body1"
								color="#fff"
								mb={2}
								sx={{
									fontFamily: "Fira Mono, monospace",
									fontSize: "1.05rem",
								}}
							>
								{project.description}
							</Typography>
							<Stack
								direction="row"
								spacing={1}
								flexWrap="wrap"
								mb={2}
							>
								{project.stack.map((tech, i) => (
									<Chip
										key={i}
										label={tech}
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
												boxShadow: `0 0 12px ${purple}`,
											},
											"&:active": {
												transform: "scale(0.98)",
											},
										}}
									/>
								))}
							</Stack>
							<Button
								variant="outlined"
								color="success"
								component={Link}
								href={project.link}
								sx={{
									mt: "auto",
									borderRadius: 2,
									borderColor: purple,
									color: purple,
									fontWeight: 700,
									fontFamily: "Fira Mono, monospace",
									"&:hover": {
										bgcolor: purple,
										color: "#fff",
										borderColor: "#fff",
										transform: "scale(1.05)",
									},
								}}
								target="_blank"
							>
								View Project
							</Button>
						</Paper>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
