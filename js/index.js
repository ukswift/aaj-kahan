import jagahList from "../static/jagah.json" assert { type: "json" };

const root = document.getElementById("root");

function koiJagahBataoBe(jagahList) {
  const jagahIndex = Math.floor(Math.random() * 10000) % jagahList.length;
  return jagahList[jagahIndex];
}
const { jagahKaNaam, jagahKaPhoto } = koiJagahBataoBe(jagahList);
let loc = document.createElement("div");
loc.innerText = jagahKaNaam;

root.appendChild(loc);

const img = document.createElement("img");
img.src = jagahKaPhoto;
root.appendChild(img);
