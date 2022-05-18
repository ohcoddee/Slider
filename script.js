const slider = document.querySelector(".slider");

const pictures = [
  "https://st.mngbcn.com/rcs/pics/static/T2/fotos/S20/27009002_43.jpg?ts=1647874231280&imwidth=337&imdensity=2&impolicy=featured",
  "https://st.mngbcn.com/rcs/pics/static/T2/fotos/outfit/S20/27009002_43-99999999_01.jpg?ts=1647874231280&imwidth=337&imdensity=2&impolicy=featured",
  "https://st.mngbcn.com/rcs/pics/static/T2/fotos/S20/27009002_43_D1.jpg?ts=1647874231280&imwidth=337&imdensity=2&impolicy=featured",
  "https://st.mngbcn.com/rcs/pics/static/T2/fotos/S20/27009002_43_D2.jpg?ts=1647874231280&imwidth=337&imdensity=2&impolicy=featured",
  "https://st.mngbcn.com/rcs/pics/static/T2/fotos/S20/27009002_43_D6.jpg?ts=1647874231280&imwidth=337&imdensity=2&impolicy=featured",
];

for (let i = 0; i < pictures.length; i++) {
  const image = document.createElement("img");
  image.src = pictures[i];
  slider.appendChild(image);
  image.style.width = "200px";
}
