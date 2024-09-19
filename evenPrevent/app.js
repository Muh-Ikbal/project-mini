const form = document.querySelector("form");
const inputText = document.querySelector("#inputText");
const ul = document.querySelector("ul");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const li = document.createElement("li");
    const note = inputText.value;
    li.textContent = note;
    ul.append(li);
    inputText.value = "";
});

ul.addEventListener("click", (e) => {
    e.target.nodeName === "LI" && e.target.remove()
});
