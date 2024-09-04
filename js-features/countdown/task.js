const intervalId = setInterval(function () {
  let currentCount = document.getElementById("timer").textContent;
  if (currentCount > 0) {
    currentCount = currentCount - 1;
    document.getElementById("timer").textContent = currentCount;
  } else {
    return alert("Вы победили в конкурсе!");
  }
}, 1000);
