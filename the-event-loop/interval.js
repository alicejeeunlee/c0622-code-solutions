let count = 3;
const countdown = setInterval(() => {
  console.log(count);
  count--;
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(countdown);
  }
}, 1000);
