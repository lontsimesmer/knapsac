const items = [
  { name: "book", weight: 8, value: 1 },
  { name: "pen", weight: 2, value: 2 },
  { name: "ruler", weight: 4, value: 3 },
  { name: "pencil", weight: 3, value: 4 },
  { name: "calculator", weight: 5, value: 5 },
  { name: "sweet", weight: 1, value: 6 },
  { name: "biscuit", weight: 3, value: 7 },
  { name: "bread", weight: 6, value: 8 },
  { name: "doughnut", weight: 7, value: 9 },
  { name: "cake", weight: 5, value: 1 },
  { name: "shoe", weight: 12, value: 5 },
  { name: "balloon", weight: 5, value: 3 },
  { name: "computer", weight: 50, value: 7 },
  { name: "iPhone", weight: 15, value: 1 },
  { name: "stopwatch", weight: 2, value: 10 },
  { name: "t-shirt", weight: 4, value: 6 },
  { name: "coat", weight: 8, value: 8 },
  { name: "handkerchief", weight: 2, value: 1 },
  { name: "USB-key", weight: 3, value: 6 },
  { name: "smartphone", weight: 2, value: 3 },
];

const options = document.getElementById("select");
const maxCapacity = document.querySelector(".capacity");
const knapsackStatus = document.querySelector(".knapsack-status");
const results = document.querySelector(".final-state");
const done = document.querySelector(".btn1");
const add = document.querySelector(".btn2");
const restart = document.querySelector(".btn3");
let sumWeight = 0;
let sumValue = 0;

done.onclick = function getOption() {
  const inputVal = maxCapacity.value;

  add.addEventListener("click", () => {
    for (let i = 0; i < items.length; i++) {
      if (options.value === items[i].name) {
        sumWeight += items[i].weight;
        sumValue += items[i].value;
        console.log(sumWeight);
        console.log(sumValue);
        if (sumWeight <= inputVal) {
          knapsackStatus.innerHTML +=
            `${options.value}` +
            ":" +
            " " +
            `weight= ${items[i].weight}` +
            "," +
            " " +
            `value= ${items[i].value}` +
            "<br>";
          results.innerHTML = `weight: ${sumWeight}; value: ${sumValue}`;
        } else {
          window.alert(`Exceeded maximum weight of ${inputVal}kg`);
        }
      }
    }
  });
};

restart.onclick = function reset() {
  window.location.reload();
};
