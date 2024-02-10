let length = 35;
let space = (count) => "_".repeat(count);
const get = (i) => `|${space(length - i - 1)}🚗${space(i)}|`;
//---------------------------------------------->
//SECTION: annimation
let i = 0;
setInterval(() => {
  document.querySelector("title").innerText = get(i);
  i = (i + 1) % length;
}, 1);
//---------------------------------------------->
