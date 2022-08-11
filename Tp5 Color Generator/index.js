const generateColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const body = document.querySelector("body");
  const div = document.querySelector("div");
  body.style.background = `rgb(${r},${g},${b})`;
  div.textContent = `rgb(${r},${g},${b})`;
};
setInterval(generateColor, 1000);
