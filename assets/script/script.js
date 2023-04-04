// eslint-disable-next-line
const weight = 0
// eslint-disable-next-line
const value = 0
// eslint-disable-next-line
const capacity = 0
const items = [
  { name: 'book', weight: 8, value: 1 },
  { name: 'pen', weight: 2, value: 2 },
  { name: 'ruler', weight: 4, value: 3 },
  { name: 'pencil', weight: 3, value: 4 },
  { name: 'calculator', weight: 5, value: 5 },
  { name: 'sweet', weight: 1, value: 6 },
  { name: 'biscuit', weight: 3, value: 7 },
  { name: 'bread', weight: 6, value: 8 },
  { name: 'doughnut', weight: 7, value: 9 },
  { name: 'cake', weight: 5, value: 1 },
  { name: 'shoe', weight: 12, value: 5 },
  { name: 'balloon', weight: 5, value: 3 },
  { name: 'computer', weight: 50, value: 7 },
  { name: 'iPhone', weight: 15, value: 1 },
  { name: 'stopwatch', weight: 2, value: 10 },
  { name: 't-shirt', weight: 4, value: 6 },
  { name: 'coat', weight: 8, value: 8 },
  { name: 'handkerchief', weight: 2, value: 1 },
  { name: 'USB-key', weight: 3, value: 6 },
  { name: 'smartphone', weight: 2, value: 3 }
]

const mySelect = document.getElementById('my-Select')
const myCapacity = document.querySelector('.my-Capacity')
const knapsackStatus = document.querySelector('.knapsack-Status')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')

let sum = 0
btn1.onclick = function getOption () {
  for (let i = 0; i < items.length; i++) {
    if (mySelect.value === items[i].name) {
      sum += items[i].weight
      console.log(sum)
      if (sum <= myCapacity.value) {
        knapsackStatus.innerHTML +=
          `${mySelect.value}` +
          ':' +
          ' ' +
          `W= ${items[i].weight}` +
          ',' +
          ' ' +
          `V= ${items[i].value}` +
          '<br>'
      } else {
        window.alert('Exceeded maximum capicity')
      }
    }
  }
}

btn2.onclick = function disableBtn () {
  const unable = (document.getElementById().disabled = true)
  console.log(unable)
}
