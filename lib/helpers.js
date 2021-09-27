import projects_data from './projects';

export function getProject(url) {
  return projects_data.find((project) => {
    return project.url_name == url;
  });
}
