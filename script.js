const slider = document.querySelector(".slider");
const picturesContainer = document.querySelector(".pictures-container");
const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");

const 사진배열 = [
  "https://st.mngbcn.com/rcs/pics/static/T2/fotos/S20/27009002_43.jpg?ts=1647874231280&imwidth=337&imdensity=2&impolicy=featured",
  "https://st.mngbcn.com/rcs/pics/static/T2/fotos/outfit/S20/27009002_43-99999999_01.jpg?ts=1647874231280&imwidth=337&imdensity=2&impolicy=featured",
  "https://st.mngbcn.com/rcs/pics/static/T2/fotos/S20/27009002_43_D1.jpg?ts=1647874231280&imwidth=337&imdensity=2&impolicy=featured",
  "https://st.mngbcn.com/rcs/pics/static/T2/fotos/S20/27009002_43_D2.jpg?ts=1647874231280&imwidth=337&imdensity=2&impolicy=featured",
  "https://st.mngbcn.com/rcs/pics/static/T2/fotos/S20/27009002_43_D6.jpg?ts=1647874231280&imwidth=337&imdensity=2&impolicy=featured",
];

let 보이는사진번호 = 0;
let pictureWidth = 200;

for (let i = 0; i < 사진배열.length; i++) {
  const image = document.createElement("img");
  image.src = 사진배열[i];
  picturesContainer.appendChild(image);
  image.style.position = "absolute";
  image.style.transition = "left 0.1s";
  image.style.width = `${pictureWidth}px`;
}
leftButton.addEventListener("click", onClickLeftButton);
function onClickLeftButton(event) {
  // const lastChild = picturesContainer.lastChild;
  // picturesContainer.removeChild(lastChild);
  // picturesContainer.prepend(lastChild);
  showingPictureIndex = (showingPictureIndex - 1) % 사진배열.length;
}
rightButton.addEventListener("click", onClickRightButton);
function onClickRightButton(event) {
  // const firstChild = picturesContainer.firstChild;
  // picturesContainer.removeChild(firstChild);
  // picturesContainer.append(firstChild);
  보이는사진번호 = (보이는사진번호 + 1) % 사진배열.length;

  for (let i = 0; i < 사진배열.length; i++) {
    let left = i * pictureWidth;
    let 현재자리번호에들어갈사진번호 = (보이는사진번호 + i) % 사진배열.length; //이해 안 감
    console.log(
      "현재자리번호에들어갈사진번호",
      현재자리번호에들어갈사진번호,
      "left",
      left
    );

    let picture = picturesContainer.children[현재자리번호에들어갈사진번호];
    picture.style.left = `${left}px`;
  }
}
