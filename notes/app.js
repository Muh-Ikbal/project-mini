const form = document.querySelector("#form");
const formEdit = document.querySelector("#form-edit");
const inputText = document.querySelector("#inputText");
const editText = document.querySelector("#editText");
const ul = document.querySelector("ul");

const notes = [];

function renderList() {
    ul.innerHTML = "";
    notes.forEach((note, index) => {
        const li = document.createElement("li");
        li.innerText = `${note} | `;

        const hapus = createButton("hapus", () => removeNote(index));
        const edit = createButton("edit", () => editNote(index));

        li.append(hapus, edit);
        ul.append(li);
    });
}

function createButton(text, onClick) {
    const button = document.createElement("button");
    button.innerText = text;
    button.addEventListener("click", onClick);
    return button;
}

function removeNote(index) {
    notes.splice(index, 1);
    renderList();
}

function editNote(index) {
    form.style.display = "none";
    formEdit.style.display = "block";
    editText.value = notes[index];


    // Remove previous event listener, if any
    formEdit.removeEventListener("submit", handleEdit);

    // Add a new event listener
    formEdit.addEventListener("submit", handleEdit);

    function handleEdit(event) {
        event.preventDefault();
        notes[index] = editText.value;
        renderList();
        form.style.display = "block";
        formEdit.style.display = "none";

        // Remove the event listener after handling the edit
        formEdit.removeEventListener("submit", handleEdit);
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const note = inputText.value;
    notes.push(note);
    renderList();
    inputText.value = "";
});

renderList(); // Initial rendering

inputText.addEventListener("change", () => {
    console.log("berubah");
});

inputText.addEventListener("input",()=>{
    document.querySelector("h1").innerText = inputText.value
})
