function randomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r},${g},${b})`;
}

function colorize() {
    this.style.backgroundColor = randomColor();
    this.style.color = randomColor();
}
function colorize2(element) {
    element.style.backgroundColor = randomColor();
    element.style.color = randomColor();
}

const buttons = document.querySelectorAll("button");
const headings = document.querySelectorAll("h1");

for (let button of buttons) {
    button.addEventListener("click", colorize);
}

for (let heading of headings) {
    heading.addEventListener("mouseenter",event => {
        colorize2(event.target)
        setTimeout(()=>{
            event.target.style.color = "";
        },500)
    })
}
