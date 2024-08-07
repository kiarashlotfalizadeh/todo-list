import "./styles.css";
import { createProject, createTask } from "./objects";
import { addProjectToArray, displayProjects, getTaskInfo, addTaskToProject, displayTasks, currentProjectObject, clearTaskForm, checkIfProjectsExist } from "./misc-functions";

let addProjectButton = document.querySelector(".add-project");
let projects = checkIfProjectsExist();
displayProjects(projects);

let projectModal = document.querySelector(".project-modal");
let projectNameInput = document.querySelector("#project-name");
let taskModal = document.querySelector(".task-modal");

addProjectButton.addEventListener("click", function() {
  projectModal.showModal(); 
})

document.querySelector(".close-modal1").addEventListener("click", function() { 
  projectModal.close(); 
  projectNameInput.value = ""; 
});

document.querySelector("#submit-button1").addEventListener("click", function() {
  let newProject = createProject(projectNameInput.value);
  projects = addProjectToArray(newProject, projects);
  
  let projectStorage = JSON.stringify(projects);
  localStorage.setItem('projects', projectStorage);

  projectModal.close();
  projectNameInput.value = "";
  displayProjects(projects);
})

let addTaskButton = document.querySelector(".add-task");

addTaskButton.addEventListener("click", function() {
  if (!currentProjectObject) {
    alert("Please select a project first.");
    return;
  }  
  
  taskModal.showModal();
})

document.querySelector(".close-modal2").addEventListener("click", function() {
  clearTaskForm();
  taskModal.close();
})

document.querySelector("#submit-button2").addEventListener("click", function() {
  let newTask = getTaskInfo();
  projects = addTaskToProject(newTask, projects);

  let projectStorage = JSON.stringify(projects);
  localStorage.setItem('projects', projectStorage);

  displayTasks(currentProjectObject, projects);
  clearTaskForm();
  taskModal.close();
})
