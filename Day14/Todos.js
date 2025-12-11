import { disPlayTodos } from "./displayTodos.js";

const container = document.querySelector(".container");

async function getData() {
  const data = await disPlayTodos();
  console.log(data);
  data.forEach((val) => {   // Now data is an array → this works
    const card = document.createElement("div");
    card.className = "card";
    card.style.width = "80%";
    card.style.background = "LightPink";

    const title = document.createElement("h2");
    title.innerText = val.title;

    const status = document.createElement("h3");
    status.innerText = `Status: ${val.completed}`;

    card.append(title, status);
    container.append(card);
  });
}

getData();
