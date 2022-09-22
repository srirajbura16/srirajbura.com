import projects_data from "./projects";

export function getProject(slug) {
  return projects_data.find((project) => {
    return project.slug == slug;
  });
}
