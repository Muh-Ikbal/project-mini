const form = document.querySelector("#search-films");

async function getMovie(e) {
    e.preventDefault();
    document.querySelectorAll('img').forEach((img)=>img.remove())
    const keyword = form.elements.search.value;
    const config = { params: { q: keyword } };
    try {
        const res = await axios.get(
            "https://api.tvma1ze.com/search/shows",
            config
        );
        console.log(res.data);
        getImg(res.data);
        form.elements.search.value = "";
    } catch (error) {
        alert(error.message)
    }
    
}

const getImg = (data)=>{
    for(let result of data){
        if(result.show.image){
            const img = document.createElement('img')
            img.src = result.show.image.medium
            document.body.append(img)
        }
    }
}
form.addEventListener("submit",getMovie);
