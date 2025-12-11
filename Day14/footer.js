export function footer() {
  const foot = document.createElement("footer");
  foot.className = "footer";

  const text = document.createElement("p");
  text.innerText = "© 2025 My Modular JS App";
   text.style.fontSize="20px"
  foot.appendChild(text);

  return foot;
}
