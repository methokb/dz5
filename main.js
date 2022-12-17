
let base = [
  {id: 1, img: "./img/image 1 (2).svg", title: "Syltherine", subtitle: "Stylish cafe chair"},
  {id: 2, img: "./img/image 2.svg", title: "Leviosa", subtitle: "Stylish cafe chair"},
  {id: 3, img: "./img/image 3.svg", title: "Lolito", subtitle: "Stylish cafe chair"},
  {id: 4, img: "./img/image 4.svg", title: "Respira", subtitle: "Stylish cafe chair"},
  {id: 5, img: "./img/image 9.svg", title: "Grifo", subtitle: "Stylish cafe chair"},
  {id: 6, img: "./img/image 6.svg", title: "Muggo", subtitle: "Stylish cafe chair"},
  {id: 7, img: "./img/image 7.svg", title: "Pingky", subtitle: "Stylish cafe chair"},
  {id: 8, img: "./img/image 8.svg", title: "Potty", subtitle: "Stylish cafe chair"},
]

let row = document.querySelector('.row');

const addCartsInRow = () => {
  base.forEach((item) =>
  row.innerHTML +=`<div class="card" id ="${item.id}">
  <img class ="card_img" src="./${item.img}" alt="${item.subtitle}">
  <h2 class="card_title">${item.title}</h2>
  <p class="card_subtitle">${item.subtitle}</p>
  <button class="del_btn">Delete</button>
  </div>` 
)
}
addCartsInRow();

const del = document.querySelectorAll('.del_btn');

function removeFun(e) {
  const remove = e.currentTarget;
  remove.parentElement.remove();
}

del.forEach((del) => del.addEventListener('click', removeFun));

