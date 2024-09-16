// import {getSurah} from 'app.js'
const listAyat = document.querySelector("#list-ayat");
const head = document.querySelector(".heading-ayat");
function getUrl(params) {
    const pageUrl = window.location.search.substring(1);
    const urlVar = pageUrl.split("&");
    console.log(urlVar)
    for (let i = 0; i < urlVar.length; i++) {
        const param = urlVar[i].split("=");
        if (param[0] === params) {
            return param[1];
        }
    }
    return null;
}
const idSurat = getUrl("id");

// head

async function getSurah() {
    try {
        const res = await fetch(
            "https://api.npoint.io/99c279bb173a6e28359c/data"
        );
        const data = res.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
}

getSurah().then((res) => {
    let html = "";
    for (let data of res) {
        if (data.nomor === idSurat) {
            html += `<a href="list-sruat.html">
                        <img src="img/back (3).png" class="btn-back" alt="">
                    </a>
                    <p class="jenis-surah">${data.type}</p>
                    <h3>${data.nama}</h3>
                    <p>${data.ayat} ayat</p>`;
        }
    }
    head.innerHTML = html;
});

// get ayat
async function getaAyat() {
    try {
        const res = await fetch(
            `https://api.npoint.io/99c279bb173a6e28359c/surat/${idSurat}`
        );
        const data = res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

getaAyat().then((res) => {
    let html = "";
    for (let data of res) {
        html += `<div class="ayat">
                    <div class="number-ayat">
                        <img src="img/number-frame.png" alt="" class="border-number">
                        <p>${data.nomor}</p>
                    </div>
                    <div class="desc-ayat">
                        <div class="name-surah">
                            <h3 class="ayat-quran">${data.ar}</h3>
                            <p class="bcan-abjd">${data.tr}</p>
                            <p class="arti">${data.id}</p>
                        </div>
                    </div>
                </div>`;
    }
    listAyat.innerHTML = html;
});
