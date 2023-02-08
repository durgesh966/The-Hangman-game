let soundbg = new Audio("./assets/bg.mp3"); soundbg.volume = 0.5;
let arr;
let word;
const load = async () => {
  let response = await fetch('https://api.api-ninjas.com/v1/randomword', {
    headers: { 'X-Api-Key': 'YOUR_API_KEY' },
    contentType: 'application/json'
  });
  arr = await response.json();
  word = arr.word.toLowerCase();
}


const game = async () => {
  
  await load();
  
    soundbg.play()
  let abc = "abcdefghijklmnopqrstuvwxyz".toUpperCase()
  let cpu = abc[Math.floor(Math.random() * abc.length)];
  let score = 100;
  let guesses = 0;
  let keyboard = document.createElement("div");
  keyboard.id = "keyboard";
  for (let key of abc) {
    let letter = document.createElement("div");
    letter.innerHTML = `<button class="Button" id="${key}"> ${key} </button>`
    keyboard.appendChild(letter);
  }
  document.body.querySelector(".container").appendChild(keyboard)
  let hangman = [base, poleH, poleV, rope, bodyH, handR, handL, legR, legL, head] = [
    document.getElementById("ground"),
    document.getElementById("poleH"),
    document.getElementById("poleV"),
    document.getElementById("rope"),
    document.getElementById("bodyH"),
    document.getElementById("handR"),
    document.getElementById("handL"),
    document.getElementById("legR"),
    document.getElementById("legL"),
    document.getElementById("head"),
  ]


  const appear = (x) => {
    if (x.style.display == "none") {
      x.style.display = ""
    } else {
      x.style.display = "none"
    }
  }


  // game
  let svg = document.querySelectorAll("#hangman2")
  let man = document.querySelector("#man")
  hangman.forEach(appear)

  let soundbg = new Audio("./assets/bg.mp3"); soundbg.volume = 0.5;
  let soundend = new Audio("./assets/over.mp3");
  let soundok = new Audio("./assets/ok.mp3");
  let sounddraw = new Audio("./assets/draw.mp3"); sounddraw.volume;
  let win = new Audio("./assets/win.mp3");
  let wordbox = document.querySelector(".word-box")
  let user = "";
  let draw = false;
  let guess = 0;
  let display = "";
  for (let i = 0; i < word.length; i++) {
    display += "_"
  }
  wordbox.innerText = display;

  const used = (e) => {
    e = e.toUpperCase()
    let btn = document.getElementById(e);
    if (draw) {
      btn.className += " wrong";
    } else {
      btn.className += " right";
    }

  }
  const check = () => {
    if (display === word) {
      win.play()
      soundbg.pause()
      wordbox.style += ".word-box{letter-spacing:0;}"
      setTimeout(() => {
        wordbox.innerHTML = `Correct!!`;
      }, 1000)
    }
  }

  const change = (event) => {
    
    soundbg.play()
    draw = true;
    let key;
    if (event.type === "keydown") {
      key = event.key
    } else {
      key = event.target.attributes.id.value; //for refrence see event object
    }
    key = key.toLowerCase()

    for (let i = 0; i < word.length; i++) {
      if (word[i] == key) {
        display = Array.from(display)
        display[i] = key;
        display = display.join("")
        user += key;
        draw = false;
      }
    }

    used(key)
    if (draw) {
      sounddraw.play()
      appear(hangman[guess]);
      guess++;
    } else {
      soundok.play()
    }
    if (guess >= 10) {
      appear(svg[0])
      display = word;
      wordbox.innerText = display;
      soundend.play();
      man.classList.toggle("hang");
      return 0;
    }
    wordbox.innerText = display;
    check()
  }
  let buttons = Array.from(document.getElementsByClassName("Button"));
  buttons.forEach((x) => { x.onclick = change })

  document.addEventListener("keydown", (event) => {
    if (event.key === " ") {
      location.reload();
    }
    change(event)
  })
}
game()