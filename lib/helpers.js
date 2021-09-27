import projects_data from './projects';
export function getAllProjectIds() {
  return projects_data.map((project) => {
    return {
      params: {
        projectId: project.id.toString(),
      },
    };
  });
}

export function getProject(id) {
  return projects_data.find((project) => {
    return project.id == id;
  });
}
