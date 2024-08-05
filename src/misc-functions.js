import { createTask } from "./objects";

function addProjectToArray(project, projectArray) {
  projectArray.push(project);
  return projectArray
}

function displayProjects(projects) {
  let projectsContainer = document.querySelector(".projects-container");
  projectsContainer.innerHTML = "";

  for (let project of projects) {
    let projectButton = document.createElement("button");
    projectButton.textContent = project.name;

    projectsContainer.appendChild(projectButton);
  }
}

function getTaskInfo() {
  let title = document.querySelector("#task-title").value;
  let description = document.querySelector("#task-description").value;
  let deadline = document.querySelector("#task-deadline").value;
  let notes = document.querySelector("#task-notes").value;
  return createTask(title, description, deadline, notes, 0);
}

export { addProjectToArray, displayProjects, getTaskInfo };