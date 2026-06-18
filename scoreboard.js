const homeEl = document.getElementById("home");
const onepBtn = document.getElementById("onep");
const twopBtn = document.getElementById("twop");
const threepBtn = document.getElementById("threep");
const onepBtnG = document.getElementById("onepG");
const twopBtnG = document.getElementById("twopG");
const threepBtnG = document.getElementById("threepG");
const guestEl = document.getElementById("guest");
// let HomeScore = 0
// let GuestScore = 0

const score = [{
  home: 0,
  guest: 0
}];

onepBtn.addEventListener("click", function () {
  score[0].home += 1;
  homeEl.textContent = score[0].home
})

twopBtn.addEventListener("click", function () {
  score[0].home += 2;
  homeEl.textContent = score[0].home
})

threepBtn.addEventListener("click", function () {
  score[0].home += 3;
  homeEl.textContent = score[0].home
})

onepBtnG.addEventListener("click", function () {
  score[0].guest += 1;
  guestEl.textContent = score[0].guest
})

twopBtnG.addEventListener("click", function () {
  score[0].guest += 2;
  guestEl.textContent = score[0].guest
})

threepBtnG.addEventListener("click", function () {
  score[0].guest += 3;
  guestEl.textContent = score[0].guest
})



