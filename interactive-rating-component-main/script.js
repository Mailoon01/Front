const first = document.querySelector(".first");
const second = document.querySelector(".second");
const submit = document.getElementById("submit")
const again = document.getElementById("again")
const count_Select = document.getElementById("rate")
const rates = Array.from(document.querySelectorAll(".rates-select"));

submit.addEventListener("click", () => {
  second.classList.remove("hidden");
  first.classList.add("hidden");
});
again.addEventListener("click", () => {
  first.classList.remove("hidden");
  second.classList.add("hidden");
});
rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    count_Select.innerText = rate.innerHTML;
  });
});