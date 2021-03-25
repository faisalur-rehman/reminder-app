const firstDay = 1;
const daysOfMonth = 31;

const starting = firstDay;
const ending = daysOfMonth + firstDay;

let total = firstDay + daysOfMonth;

while (true) {
  if (total % 7 === 0) {
    break;
  }
  total += 1;
}

const actualDays = [];

for (let i = 0; i <= total; ++i) {
    if (i >= starting && i <= ending) {
        const date = new Date(`2020 5 ${i}`);
        actualDays.push(date);
    } else {
        actualDays.push(null);
    }
}

console.log(actualDays);
