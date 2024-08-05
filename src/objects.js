let createProject = function(name) {
  let project = {};
  project.name = name;
  project.tasks = [];
  return project;
}

let createTask = function(title, description, dueDate, notes, checklist) {
  let task = {};
  task.title = title;
  task.description = description;
  task.dueDate = dueDate;
  task.notes = notes;
  task.checklist = checklist;
  return task;
}

export { createProject, createTask };