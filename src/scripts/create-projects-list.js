import favoriteCounter from "./favorite-counter";
import toggleAsideArticleClasses from "./toggle-aside-article-classes";
import updateProject from "./update-project";
import updateProjectsList from "./update-projects-list";
import validateTodos from "./validate-todo";

export default function createProjectsList() {
  const projectNames = document.querySelector("#project-names");
  favoriteCounter();

  for (const key of Object.keys(localStorage)) {
    const div = document.createElement("div");
    div.classList.add("project-name");
    const button = document.createElement("button");
    const p = document.createElement("p");
    button.class = "project";
    p.class = `tasks-count-${key}`;
    projectNames.append(div);
    div.append(button, p);
    button.textContent = key;
    p.textContent = JSON.parse(localStorage[key]).length;

    button.addEventListener("click", () => {
      updateProject(`${key}`);
      validateTodos();
      updateProjectsList();
      toggleAsideArticleClasses();
    });
  }
}
