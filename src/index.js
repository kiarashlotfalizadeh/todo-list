import "./styles.css";
import { createProject, createTask } from "./objects";
import { addProjectToArray, displayProjects, getTaskInfo } from "./misc-functions";

let addProjectButton = document.querySelector(".add-project");
let projects = [];

addProjectButton.addEventListener("click", function() {
  let projectModal = document.querySelector(".project-modal");
  let projectNameInput = document.querySelector("#project-name");
  // open modal
  projectModal.showModal(); 
  // close modal
  document.querySelector(".close-modal1").addEventListener("click", function() { 
    projectModal.close(); 
    projectNameInput.value = ""; 
  })
  // submit modal
  document.querySelector("#submit-button1").addEventListener("click", function() {
    let newProject = createProject(projectNameInput.value);
    projects = addProjectToArray(newProject, projects);
    projectModal.close();
    projectNameInput.value = "";
    displayProjects(projects);
  })
})

let addTaskButton = document.querySelector(".add-task");

addTaskButton.addEventListener("click", function() {
  let taskModal = document.querySelector(".task-modal");
  taskModal.showModal();

  document.querySelector(".close-modal2").addEventListener("click", function() {
    taskModal.close();
  })

  document.querySelector("#submit-button2").addEventListener("click", function() {
    let newTask = getTaskInfo();
    
  })
})