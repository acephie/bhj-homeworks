let moleCounter = 0;
let moleLooseCounter = 0;
for (let index = 1; index <= 9; index += 1) {
  document.getElementById(`hole${index}`).onclick = moleCounting;
}
function moleCounting() {
  if (this.className === "hole hole_has-mole") {
    moleCounter += 1;
  } else {
    moleLooseCounter += 1;
    if (moleLooseCounter === 5) {
      alert("Вы проиграли!");
      moleCounter = 0;
      moleLooseCounter = 0;
    }
  }
  document.getElementById("dead").textContent = moleCounter;
  document.getElementById("lost").textContent = moleLooseCounter;
}
