const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const img = new Image();
img.src = "./media/flappy-bird-set.png";

//general settings
let gamePlaying = false;
const gravity = 0.5;
const speed = 6.2;
const size = [51, 36]; //taille oiseau
const jump = -11.5;
const cTenth = canvas.width / 10; //1/10eme

//pipe settings
const pipeWidth = 78;
const pipeGap = 270; //écart poto
const pipeLoc = () =>
  Math.random() * (canvas.height - (pipeGap + pipeWidth) - pipeWidth) +
  pipeWidth; //générer les emplacements de potos

let index = 0,
  bestScore = 0,
  currentScore = 0,
  pipes = [],
  flight,
  flyHeight; //hauteur de vol

const setup = () => {
  currentScore = 0;
  flight = jump;
  flyHeight = canvas.height / 2 - size[1] / 2;
  pipes = Array(3)
    .fill()
    .map((a, i) => [canvas.width + i * (pipeGap + pipeWidth), pipeLoc()]);
}; //fonction pour recommencer

//fonction qui va rendre toute l'animation
const render = () => {
  index++;
  //background
  ctx.drawImage(
    img,
    0,
    0,
    canvas.width,
    canvas.height,
    -((index * (speed / 2)) % canvas.width) + canvas.width,
    0,
    canvas.width,
    canvas.height
  );
  ctx.drawImage(
    img,
    0,
    0,
    canvas.width,
    canvas.height,
    -((index * (speed / 2)) % canvas.width),
    0,
    canvas.width,
    canvas.height
  );
  //bird
  if (gamePlaying) {
    //=> si gameplaying est sur true (si le joueur a cliqué sur le body)
    ctx.drawImage(
      img,
      432,
      Math.floor((index % 9) / 3) * size[1],
      ...size,
      cTenth,
      flyHeight,
      ...size
    ); //=> l'oiseau va se mettre a 1/10eme du bord
    flight += gravity;
    flyHeight = Math.min(flyHeight + flight, canvas.height - size[1]); //prendre le plus petit entre les deux totaux,permet a l'oiseau de s'arreter au limite du canvas
  } else {
    ctx.drawImage(
      img,
      432,
      Math.floor((index % 9) / 3) * size[1],
      ...size,
      canvas.width / 2 - size[0] / 2,
      flyHeight,
      ...size
    ); //méthode pour couper l'oiseau dans l'image puis le placer à un endroit précis dans  le canvas
    flyHeight = canvas.height / 2 - size[1] / 2;

    ctx.fillText(`Meilleur score: ${bestScore}`, 55, 245); //écrire dans un canvas sur l'axe des x et y
    ctx.fillText("Cliquez pour jouer", 48, 535);
    ctx.font = "bold 30px courier";
  }
  //pipes display
  if (gamePlaying) {
    pipes.map((pipe) => {
      pipe[0] -= speed;

      //top pipe
      ctx.drawImage(
        img,
        432,
        588 - pipe[1],
        pipeWidth,
        pipe[1],
        pipe[0],
        0,
        pipeWidth,
        pipe[1]
      );

      //bottom pipe
      ctx.drawImage(
        img,
        432 + pipeWidth,
        108,
        pipeWidth,
        canvas.height - pipe[1] + pipeGap,
        pipe[0],
        pipe[1] + pipeGap,
        pipeWidth,
        canvas.height - pipe[1] + pipeGap
      );

      if (pipe[0] <= -pipeWidth) {
        currentScore++;
        bestScore = Math.max(bestScore, currentScore);
        //remove pipe + create new pipe
        pipes = [
          ...pipes.slice(1),
          [pipes[pipes.length - 1][0] + pipeGap + pipeWidth, pipeLoc()],
        ];
      } //quand le pipe disparait le score augmente

      //if hit the pipe, end
      if (
        [
          pipe[0] <= cTenth + size[0],
          pipe[0] + pipeWidth >= cTenth,
          pipe[1] > flyHeight || pipe[1] + pipeGap < flyHeight + size[1],
        ].every((elem) => elem)
      ) {
        gamePlaying = false;
        setup();
      }
    });
  }
  document.getElementById("bestScore").innerHTML = `Meilleur :${bestScore}`;
  document.getElementById("currentScore").innerHTML = `Actuel :${currentScore}`;
  window.requestAnimationFrame(render); //a la fin de render il rappelle render donc la fonction tourne en boucle
};

setup();
img.onload = render;
document.addEventListener("click", () => (gamePlaying = true));
window.onclick = () => (flight = jump);
