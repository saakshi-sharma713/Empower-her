export function disPlayTodos() {
  return fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())     // return json
    .then((data) => data);         // return final data
}
