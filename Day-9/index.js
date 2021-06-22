let container = document.getElementById("container");
let count = 25;
let head = document.getElementById("count");
head.innerHTML = `Seats Left: ${count}`;
for (let i = 0; i < count; i++) {
  let newDiv = document.createElement("div");
  newDiv.innerHTML = "Book";
  newDiv.addEventListener("click", () => {
    newDiv.classList.toggle("red");
    if (newDiv.classList.contains("red")) {
      newDiv.innerHTML = "Booked";
    } else {
      newDiv.innerHTML = "Book";
    }
    let booked = count;
    booked -= document.getElementsByClassName("red").length;
    let head = document.getElementById("count");
    head.innerHTML = `Seats Left: ${booked}`;
  });
  newDiv.classList.add("white-box");
  container.appendChild(newDiv);
}
