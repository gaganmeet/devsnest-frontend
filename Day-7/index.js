const student = { name: "David Rayy", sclass: "VI", rollno: 12 };
let arr = [];
for (let st in student) {
  arr.push(st);
}
console.log(arr.join(","));

/----------------------------------------------------------------/;

const student2 = { name: "David Rayy", sclass: "VI", rollno: 12 };
delete student2.rollno;
console.log(student2);

/----------------------------------------------------------------/;

let count = 0;
for (let i in student) count++;
console.log(count);

/-----------------------------------------------------------------/;

const library = [
  { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
  { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

for (book of library) {
  console.log("book -", book.title, "reading status -", book.readingStatus);
}

/-----------------------------------------------------------------/;

const cylinder = {
  rad: 0,
  height: 0,
  volume() {
    return ((22 / 7) * this.rad * this.rad * this.height).toFixed(4);
  },
};

cylinder.rad = 5;
cylinder.height = 25;

console.log(cylinder.volume());

/------------------------------------------------------------------/;

const library2 = [
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
  { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 9999,
  },
];

library2.sort((a, b) => b.libraryID - a.libraryID);
console.log(library2);
