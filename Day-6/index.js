function is_array(item) {
  return Array.isArray(item);
}
let arr = [1, 3];
console.log(is_array("w3resource"));
console.log(is_array([1, 2, 4, 0]));
console.log(is_array(arr));

/------------------------------------------------/;

function array_Clone(arr) {
  let new_arr = [...arr];
  new_arr[0] = 5;
  return new_arr;
}
let a = [1, 2, 4, 0];
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
console.log(array_Clone(a));
console.log(a);

/--------------------------------------------------/;

function first(arr, n = 1) {
  if (n <= 0) return [];
  if (n == 1) return arr[0];
  return arr.slice(0, n);
}

console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));

/---------------------------------------------------/;

let myColor = ["Red", "Green", "White", "Black"];

console.log(myColor.join(","));
console.log(myColor.join("+"));

/----------------------------------------------------/;

function mostFrequent(arr) {
  let obj = {};
  for (let item of arr) {
    if (item in obj) {
      obj[item] = obj[item] + 1;
    } else {
      obj[item] = 1;
    }
  }
  let tup = [0, 0];
  let max = 0;
  for (let key in obj) {
    if (obj[key] > max) {
      tup[0] = key;
      tup[1] = obj[key];
      max = obj[key];
    }
  }
  return tup;
}

arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
let ans = mostFrequent(arr1);
console.log(`${ans[0]} (${ans[1]} times)`);
