const button = document.querySelector("button");
const p = document.querySelector("p");

button.addEventListener("click",()=>{
    const newColor = randomColor();
    document.body.style.backgroundColor = newColor
    p.innerHTML = newColor
})

function randomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r},${g},${b})`
}
