const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const addJoke = async ()=>{
    const joke = await getJoke()
    const li = document.createElement('LI')
    li.textContent = joke
    jokes.append(li)
}

button.addEventListener('click',addJoke)
jokes.addEventListener('click',(e)=>{
    e.target.nodeName==='LI'&&e.target.remove()
})
const getJoke = async () => {
    try {
        const config = {
            headers:{
                Accept : 'application/json'
            }
        };
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        console.log(res.data.joke)
        return res.data.joke
    } catch (error) {
        return 'jokes tidak ada buat sendiki mko'
    }
};
