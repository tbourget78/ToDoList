"use strict";

ol.innerHTML = localStorage.getItem("list");

const spanDels = document.querySelectorAll(".delete");
for (let span of spanDels) {
  span.onclick = () => del(span.parentElement.parentElement);
}

const spanUrg = document.querySelectorAll(".urgent");
for (let span of spanUrg) {
  span.onclick = () => urgent(span);
}

noTache.style.display = ol.innerHTML == "" ? "block" : "none";

form.onsubmit = () => {
  const li = document.createElement("li");

  const spanDel = document.createElement("span");
  spanDel.classList.add("delete", "material-icons", "md-24");
  spanDel.textContent = "clear";

  const spanUrg = document.createElement("span");
  spanUrg.classList.add("urgent", "material-icons", "md-24");
  spanUrg.textContent = "stars";

  const texte = document.createElement("span");
  texte.classList.add("texte");
  texte.textContent = champ.value;

  spanDel.onclick = () => del(li);
  spanUrg.onclick = () => urgent(spanUrg);

  const spanOpt = document.createElement("span");
  spanOpt.classList.add("spanOpt");

  spanOpt.appendChild(spanUrg);
  spanOpt.appendChild(spanDel);

  li.appendChild(texte);
  li.appendChild(spanOpt);

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

function urgent(element) {
  element.classList.toggle("gold");
  localStorage.setItem("list", ol.innerHTML);
}

/* resizing */ /* resizing */ /* resizing */ /* resizing */ /* resizing */ /* resizing */ /* resizing */

const metas = document.getElementsByTagName("meta");
metas[1].content = `width=device-width, height= ${window.innerHeight},initial-scale=1.0`;
