let toDo = document.querySelector("#create-todo");
let itemsLeft = document.querySelector("#items-left");
let all = document.querySelector("#all");
let active = document.querySelector("#active");
let completed = document.querySelector("#completed");
let clearComp = document.querySelector("#clearComp");
let flex2 = document.querySelector(".flex-two");
const lastItem = document.querySelector(".flex-item-last");
const container = document.querySelector(".todo-container");
let count;

let completedEl = [];

let activities = [];
let counter = 1;

toDo.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && toDo.value != "") {
    const activity = toDo.value;
    let length = activities.length;
    activities.push(toDo.value);

    const element = document.createElement("div");
    const random = Math.floor(Math.random() * 5000);

    /*element.innerHTML = `<div class="flex-item one">
    <input type="checkbox" class="todo-one" id="zero" />
    <div class="activity">${activity}</div>
    </div>`;*/

    element.insertAdjacentHTML(
      "afterbegin",
      `<div class="flex-item one" id="${random}">
    <input type="checkbox" class="todo-one"  />
    <div class="activity">${activity}</div>
    </div>`
    );

    completedEl.push(element);

    if (activities.length === 1) {
      lastItem.insertAdjacentHTML(
        "afterbegin",
        `<p ${"id=count"}>${length + 1}</p>`
      );
    }
    if (activities.length > 1) {
      count = document.querySelector("#count");
      counter++;
      count.textContent = counter;
    }

    flex2.insertBefore(element, flex2.children[0]);
    toDo.value = "";
  }
});

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("todo-one") &&
    e.target.parentNode.classList.value === "flex-item one"
  ) {
    if (e.target.checked) {
      e.target.nextElementSibling.style.textDecoration = "line-through";
      e.target.nextElementSibling.style.color = "red";
      e.target.classList.add("completed");
      counter--;
      count = document.querySelector("#count");
      console.log(count);
      count.textContent = counter;
      //completedEl.push(e.target);
    } else {
      e.target.nextElementSibling.style.color = "white";
      e.target.nextElementSibling.style.textDecoration = "none";
      e.target.classList.remove("completed");
      counter++;
      console.log(count);
      count.textContent = counter;
    }
  }
});

all.addEventListener("click", (e) => {
  completedEl.forEach((el, i) => {
    el.classList.remove("hide");
  });
});

active.addEventListener("click", (e) => {
  console.log(e);
  completedEl.forEach((el, i) => {
    if (!el.childNodes[0].childNodes[1].classList.contains("completed")) {
      el.classList.remove("hide");
    }
    if (el.childNodes[0].childNodes[1].classList.contains("completed")) {
      el.classList.add("hide");
    }
  });
});

completed.addEventListener("click", (e) => {
  completedEl.forEach((el, i) => {
    if (!el.childNodes[0].childNodes[1].classList.contains("completed")) {
      el.classList.add("hide");
    } else {
      el.classList.remove("hide");
    }
  });
});

clearComp.addEventListener("click", (e) => {
  completedEl.forEach((el) => {
    if (el.childNodes[0].childNodes[1].classList.contains("completed")) {
      el.remove();
    }
  });
});

itemsLeft.addEventListener("click", (e) => {
  console.log(completedEl);
});
