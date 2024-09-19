const button = document.querySelector("button");

button.addEventListener("click", (event) => {
    console.log((event.target.style.backgroundColor = "red"));
});
button.addEventListener("mouseleave", (event) => {
    console.log((event.target.style.backgroundColor = ""));
});

const input = document.querySelector("input");

input.addEventListener("keydown", (event) => {
    // console.log(event.code);
    switch (event.code) {
        case "ArrowUp":
            console.log("tombol atas");
            break;
        case "ArrowDown":
            console.log("tombol bawah");
            break;
        case "ArrowLeft":
            console.log("tombol Kiri");
            break;
        case "ArrowRight":
            console.log("tombol Kanan");
            break;
        default:
            console.log("Diabaikan");
    }
});

// input.addEventListener("keyup", () => {
//     console.log("tombol dilepas");
// });
