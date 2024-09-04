let cookieImg = document.getElementById("cookie");
let clickCount = 0;
let startTime = Date.now() / 1000;
function changeSizes() {
  let newTime = Date.now() / 1000;
  clickCount += 1;
  let clickVelocity = clickCount / (newTime - startTime);
  if (clickCount % 2) {
    cookieImg.width = 220;
  } else {
    cookieImg.width = 200;
  }
  document.getElementById("clicker__counter").textContent = clickCount;
  document.getElementById("clicker__velocity").textContent =
    clickVelocity.toFixed(2);
}

cookieImg.onclick = changeSizes;

/*
!версия без скорости
let cookieImg = document.getElementById("cookie");
let clickCount = 0;
function changeSizes() {
  clickCount += 1;
  if (clickCount % 2) {
    cookieImg.width = 180;
  } else {
    cookieImg.width = 200;
  }
  document.getElementById("clicker__counter").textContent = clickCount;
}

cookieImg.onclick = changeSizes;
*/
