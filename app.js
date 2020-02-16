const paragraph = document.querySelector(".main-box > .kage-text");
const button = document.querySelector(".main-box > .random-button");
const list = document.querySelector(".main-box > .kage-list");
const number = document.querySelector(".main-box > .number-input");

function getKrysianRym() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      let response = JSON.parse(xhttp.responseText);
      let randomIndexNumber = Math.floor(Math.random() * response.length) + 1;
      let oneOrTwo = Math.floor(Math.random() * 2) + 1;
      if (oneOrTwo === 1) {
        let resNum = Math.floor(Math.random() * response.krystian.length) + 1;
        let rymText = response.krystian[resNum];
        rymText = rymText.charAt(0).toUpperCase() + rymText.slice(1);
        paragraph.innerText = `Krystian ${rymText}`;
        list.innerHTML += `Krystian ${rymText},   `;
      } else {
        let resNum = Math.floor(Math.random() * response.krystek.length) + 1;
        let rymText = response.krystek[resNum];
        rymText = rymText.charAt(0).toUpperCase() + rymText.slice(1);
        paragraph.innerText = `Krystek ${rymText}`;
        list.innerHTML += `Krystek ${rymText},   `;
      }
    }
  };
  xhttp.open("GET", "krystian.json", true);
  xhttp.send();
}

button.addEventListener("click", function() {
  if (number.value <= 1000) {
    for (let i = 0; i < number.value; i++) {
      getKrysianRym();
    }
  } else {
    paragraph.innerText = `Podaj liczbę poniżej 1000, bo ci komputer wybuchnie`;
  }
});

/*
 * W sumie tego na dole nie używam ale niech będzie peepoGlad
 */
function randomWord(length) {
  let resultWord = "";
  let characters = "abcdefghijklmnopqrstuvwxyz";
  var charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    resultWord += characters.charAt(
      Math.floor(Math.random() * charactersLength)
    );
  }
  return resultWord;
}
