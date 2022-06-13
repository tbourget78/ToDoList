"use strict";

ol.innerHTML = localStorage.getItem("list");

const spanDels = document.querySelectorAll(".delete");

for (let span of spanDels) {
  span.onclick = () => del(span.parentElement);
}

noTache.style.display = ol.innerHTML == "" ? "block" : "none";

form.onsubmit = () => {
  const li = document.createElement("li");
  const spanDel = document.createElement("span");
  spanDel.classList.add("delete");
  spanDel.textContent = "(X)";
  spanDel.onclick = () => del(li);
  li.innerHTML = champ.value;

  li.appendChild(spanDel);
  ol.appendChild(li);

  champ.value = "";
  noTache.style.display = "none";

  localStorage.setItem("list", ol.innerHTML);

  return false;
};

function del(element) {
  element.remove();
  noTache.style.display = ol.innerHTML == "" ? "block" : "none";

  localStorage.setItem("list", ol.innerHTML);
}
