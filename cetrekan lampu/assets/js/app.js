const saklar = document.querySelector("#saklar");
const lampu = document.querySelector("img");

saklar.addEventListener("click", (e) => {   
    
    if (e.target.value === "menyala") {
        lampu.src = "assets/img/on.gif";
        e.target.value = "mati";
        e.target.innerHTML = 'matikan lampu'
    } else {
        lampu.src = "assets/img/off.gif";
        e.target.value = "menyala";
        e.target.innerHTML = "nyalakan lampu";
    }
});
