const div = document.querySelector("div");
const changeColor = document.querySelector("#color-change");

changeColor.addEventListener("change", (event) => {
    div.style.backgroundColor = event.target.value;
    // document.body.style.backgroundColor = event.target.value;
    console.log(event.target.value);
});
