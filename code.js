const container = document.querySelector(".container");
const classNames = ["warlock", "titan", "hunter", "default"];
let i = 0;

const changeClass = () => {
  container.classList.remove(classNames[i]);
  i = i < classNames.length - 1 ? i + 1 : 0;
  container.classList.add(classNames[i]);
};

setInterval(changeClass, 3000);
