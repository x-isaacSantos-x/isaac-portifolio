import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "Project Exemple",
            subtitle: "23-11-2025",
            srcImg: "/src/assets/images/logo-netflix.png",
            description: "Project for analyzing the Netflix catalog, focusing on efficient queries and data visualization in a large-scale database.",
            technologies: "Technologies: Sql",
            websiteURL: "https://www.netflix.com/br/",
            codeURL: "https://github.com/x-isaacSantos-x/netflix_sql_projeto/tree/main",
        },

    ]
    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projects</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid item md={6} key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection
