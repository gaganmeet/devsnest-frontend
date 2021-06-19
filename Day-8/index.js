let container = document.getElementById("container");

for (let i = 0; i < 100; i++) {
  let newDiv = document.createElement("div");
  newDiv.addEventListener("click", () => {
    newDiv.classList.toggle("red");
  });
  newDiv.classList.add("white-box");
  container.appendChild(newDiv);
}
