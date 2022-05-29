const slider = document.querySelector(".slider");
const picturesContainer = document.querySelector(".pictures-container");
const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");

const pictures = ["0", "1", "2", "3", "4"];

let showingPictureIndex = 0;
let pictureWidth = 200;

for (let i = 0; i < pictures.length; i++) {
  const image = document.createElement("div");
  image.innerText = pictures[i];
  picturesContainer.appendChild(image);
  image.style.position = "absolute";
  image.style.transition = "left 0.5s ease-in-out";
  image.style.width = `${pictureWidth}px`;
  image.style.height = `280px`;
  image.style.border = "1px solid black";
  image.style.textAlign = "center";
}
leftButton.addEventListener("click", onClickLeftButton);
function onClickLeftButton(event) {
  showingPictureIndex =
    (pictures.length + showingPictureIndex - 1) % pictures.length;

  for (let i = 0; i < pictures.length; i++) {
    const left = i * pictureWidth;
    const leftTargetIndex = (showingPictureIndex + i) % pictures.length;
    let picture = picturesContainer.children[leftTargetIndex];
    picture.style.left = `${left}px`;
  }
}

// const lastChild = picturesContainer.lastChild;
// picturesContainer.removeChild(lastChild);
// picturesContainer.prepend(lastChild);

rightButton.addEventListener("click", onClickRightButton);
function onClickRightButton(event) {
  showingPictureIndex = (showingPictureIndex + 1) % pictures.length;

  for (let i = 0; i < pictures.length; i++) {
    let left = i * pictureWidth;
    let pictureIndex = (showingPictureIndex + i) % pictures.length;

    let picture = picturesContainer.children[pictureIndex];
    picture.style.left = `${left}px`;
  }
}

const showingPictureIndexElement = document.createElement("div");
showingPictureIndexElement.innerText = "↑showing pciture index";
document.body.appendChild(showingPictureIndexElement);
