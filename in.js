var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  fruits.reverse();
  document.getElementById("demo").innerHTML = fruits;
}