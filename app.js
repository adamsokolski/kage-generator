const paragraph = document.querySelector(".main-box > .kage-text");
const button = document.querySelector(".main-box > .random-button");

function getKrysianRym() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      let response = JSON.parse(xhttp.responseText);
      let resNum = Math.floor(Math.random() * response.length) + 1;
      let rymText = response[resNum];
      rymText = rymText.charAt(0).toUpperCase() + rymText.slice(1);
      paragraph.innerText = `Krystian ${rymText}`;
      document.createTextNode(`Krystian ${rymText}`);
    }
  };
  xhttp.open("GET", "krystian.json", true);
  xhttp.send();
}

button.addEventListener("click", function() {
  getKrysianRym();
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
