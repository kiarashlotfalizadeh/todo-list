import { createTask } from "./objects";

function addProjectToArray(project, projectArray) {
  projectArray.push(project);
  return projectArray;
}

function addTaskToProject(newTask, projectArray) {
  for (let project of projectArray) {
    if (project.name === newTask.projectName) {
      project.tasks.push(newTask);
      return projectArray;
    }
  }
}

let currentProject;
let currentProjectObject;

function displayProjects(projects) {
  let projectsContainer = document.querySelector(".projects-container");
  projectsContainer.innerHTML = "";

  for (let project of projects) {
    let projectButton = document.createElement("button");
    projectButton.textContent = project.name;
    projectButton.className = "project-button";

    projectButton.addEventListener("click", function() {
      currentProject = project.name;
      currentProjectObject = project;
      displayTasks(project);
    })

    projectsContainer.appendChild(projectButton);
  }
}

function displayTasks(project, projectArray) {
  let tasksContainer = document.querySelector(".tasks-container");
  tasksContainer.innerHTML = "";

  for (let task of project.tasks) {
    let taskContainer = document.createElement("div");
    taskContainer.className = "task-container";

    let taskTitle = document.createElement("div");
    taskTitle.className = "task-title";
    taskTitle.textContent = `${task.title}`;

    let taskDescription = document.createElement("div");
    taskDescription.className = "task-description";
    taskDescription.textContent = `${task.description}`;

    let taskDeadline = document.createElement("div");
    taskDeadline.className = "task-deadline";
    taskDeadline.textContent = `${task.dueDate};`

    let taskChecklist = document.createElement("input");
    taskChecklist.id = "task-checklist";
    taskChecklist.type = "checkbox";

    let taskDelete = document.createElement("button");
    taskDelete.className = "task-delete";
    taskDelete.textContent = "Delete";


    taskDelete.addEventListener("click", function() {
      project.tasks.splice(project.tasks.indexOf(task, 1));
      displayTasks(project);

      let projectStorage = JSON.stringify(projectArray);
      localStorage.setItem('projects', projectStorage);

      if (!(localStorage.getItem('projects'))) {
        localStorage.removeItem('projects');
      }
    })

    taskContainer.append(taskTitle, taskDescription, taskDeadline, taskChecklist, taskDelete);

    tasksContainer.appendChild(taskContainer);
  }
}

function getTaskInfo() {
  let title = document.querySelector("#task-title").value;
  let description = document.querySelector("#task-description").value;
  let deadline = document.querySelector("#task-deadline").value;
  let notes = document.querySelector("#task-notes").value;
  let projectName = currentProject;
  return createTask(title, description, deadline, notes, projectName);
}

function clearTaskForm() {
  document.querySelector("#task-title").value = "";
  document.querySelector("#task-description").value = "";
  document.querySelector("#task-deadline").value = "";
  document.querySelector("#task-notes").value = "";
}

function checkIfProjectsExist() {
  if (localStorage.getItem('projects')) {
    return JSON.parse(localStorage.getItem('projects'));
  } else {
    return [];
  }
}

export { addProjectToArray, displayProjects, getTaskInfo, addTaskToProject, displayTasks, clearTaskForm, checkIfProjectsExist, currentProjectObject };



