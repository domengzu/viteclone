let btn = document.getElementById("btn");
let count = document.getElementById("count");

btn.addEventListener("click", function () {
   count.innerHTML = parseInt(count.innerHTML) + 1;
});