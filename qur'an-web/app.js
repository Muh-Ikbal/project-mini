const listSurat = document.querySelector(".surat-list");
// console.log(listAyat);

// halaman surah
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
        html += `<div class="surat" onclick="location.href='ayat-surat.html?id=${data.nomor}'">
                    <div class="number-surah">
                        <img src="img/number-frame.png" alt="" class="border-number">
                        <p>${data.nomor}</p>
                    </div>
                    <div class="desc-surah">
                        <div class="name-surah">
                            <h3>${data.nama}</h3>
                            <p>${data.type} | ${data.ayat} Ayat</p>
                        </div>
                        <div class="kaligrafi">
                            <p>${data.asma}</p>
                        </div>
                    </div>

                </div>`;
    }
    listSurat.innerHTML = html;
});


// export { getSurah };