export default function addTodo(
  projectName,
  todoTitle,
  todoDescription,
  todoDate,
  todoPriority,
  todoFavorite,
  todoChecked
) {
  if (localStorage[`${projectName}`] === undefined) {
    localStorage[`${projectName}`] = "[]";
  }
  const temp = JSON.parse(localStorage[`${projectName}`]); // current value of the project's todo list array
  temp.push({
    title: todoTitle,
    description: todoDescription,
    date: todoDate,
    priority: todoPriority,
    favorite: todoFavorite,
    checked: todoChecked,
  });
  localStorage[`${projectName}`] = JSON.stringify(temp);
}
