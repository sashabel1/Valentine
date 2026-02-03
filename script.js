const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const buttonsBox = document.querySelector(".buttons");

//index logic
if (yesBtn && noBtn) {
  yesBtn.addEventListener("click", () => {
    window.location.href = "schedule.html";
  });

  function randomPositionInsideBox() {
    const boxRect = buttonsBox.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    const pad = 4;
    const maxX = boxRect.width - btnRect.width - pad;
    const maxY = boxRect.height - btnRect.height - pad;

    const x = Math.random() * maxX + pad;
    const y = Math.random() * maxY + pad;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    noBtn.style.right = "auto";
  }

//button escape logic
  buttonsBox.addEventListener("mousemove", (e) => {
    const btnRect = noBtn.getBoundingClientRect();
    const dx = e.clientX - (btnRect.left + btnRect.width / 2);
    const dy = e.clientY - (btnRect.top + btnRect.height / 2);
    const distance = Math.sqrt(dx*dx + dy*dy);

    if (distance < 150) {
      randomPositionInsideBox();
    }
  });

  noBtn.addEventListener("mouseenter", randomPositionInsideBox);
  noBtn.addEventListener("click", () => {
    alert("WRONG ANSWER 😡 Try again.");
    randomPositionInsideBox();
  });

  randomPositionInsideBox();
}

//Logic for schedule.html notes toggling
function toggleNote(noteId) {
  const note = document.getElementById(noteId);
  if (note) {

    note.classList.toggle("show");
  }
}