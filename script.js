function addSkill() {
  const skills = document.getElementById("skills");
  const li = document.createElement("li");
  li.contentEditable = "true";
  li.textContent = "New Skill";
  skills.appendChild(li);
}

function addProject() {
  const projects = document.getElementById("projects");
  const li = document.createElement("li");
  li.contentEditable = "true";
  li.textContent = "New Project";
  projects.appendChild(li);
}
