const allImages = document.getElementsByTagName("img");

// for (let img of allImages) {
//     img.src =
//         "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg";
// }

// const squareImages = document.getElementsByClassName('square');
// for (let img of squareImages) {
// 	// img.scrollHeight = 900;
// 	img.src =
// 		'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg';

// }

// const links = document.querySelectorAll("p a"); //mengambil semua element pada
const links = document.querySelectorAll("a");

// for(let link of links){
// 	link.innerHTML="ini adalah link";
// }

for (let link of links) {
    link.style.color = "rgb(0,180,134)";
    link.style.textDecorationColor = "blue";
    link.style.textDecorationStyle = "wavy";
}
// const banner = document.getElementById('banner');
// console.log(banner)

const input = document.querySelector("input[type='checkbox']");
const div = document.querySelector("div[lang='en']");

// append Child
const newImg = document.createElement("img");
newImg.src =
    "https://www.purina.co.id/sites/default/files/2023-01/14%20Fakta%20Tentang%20Kucing%20yang%20Unik%20dan%20Menarik.jpg";
document.body.appendChild(newImg);
newImg.classList.add("square");

// append
const para1 = document.querySelector("p");
para1.append("hallo");

// insert adjacent Element
const h2 = document.createElement("h2");
h2.append("hallo guys");
const h1 = document.querySelector("h1");
h1.insertAdjacentElement("afterend", h2);

// remove child
const firstLi = document.querySelector("li")
// firstLi.parentElement.removeChild(firstLi);

// remove
firstLi.remove()