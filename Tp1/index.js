// window.addEventListener("mousemove", (e) => {
//   cursor.style.left = e.x + "px";
//   cursor.style.top = e.y + "px";

//   mouse1.style.left = e.x + "px";
//   mouse1.style.top = e.y + "px";

//   mouse2.style.left = e.x + "px";
//   mouse2.style.top = e.y + "px";
// });

const mouses = document.querySelectorAll(".mouse");

window.addEventListener("mousemove", (e) => {
  mouses.forEach((mouse) => {
    mouse.style.left = e.x + "px";
    mouse.style.top = e.y + "px";
  });
});
