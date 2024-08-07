let createProject = function(name) {
  let project = {};
  project.name = name;
  project.tasks = [];
  return project;
}

let createTask = function(title, description, dueDate, notes, projectName) {
  let task = {};
  task.title = title;
  task.description = description;
  task.dueDate = dueDate;
  task.notes = notes;
  task.projectName = projectName;
  return task;
}

export { createProject, createTask };