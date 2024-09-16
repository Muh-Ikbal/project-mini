const inputSearch = document.querySelector("#search-input");
const btnSearch = document.querySelector("#button-search");
const meals = document.querySelector(".meals");
const mealDetailContent = document.querySelector(".meal-detail-content");
const mealDetail = document.querySelector(".meal-details");
const btnClose = document.querySelector("#recipe-close-button");

async function getMealContent(e) {
    e.preventDefault();
    const keyword = inputSearch.value;
    const config = {
        params: { i: keyword },
    };

    try {
        const res = await axios.get(
            "https://www.themealdb.com/api/json/v1/1/filter.php",
            config
        );
        displayMeal(res.data);
    } catch (error) {
        console.log(error);
    }
    inputSearch.value = ''
}

function displayMeal(data) {
    meals.classList.remove("not-found");
    let html = "";
    if (data.meals) {
        data.meals.forEach((result) => {
            html += `<div class="meal-items" data-id="${result.idMeal}">
                        <div class="meal-img">
                            <img src="${result.strMealThumb}" alt="">
                        </div>
                        <div class="meal-desc">
                            <h3>${result.strMeal}</h3>
                            <a class="btn-recipe " href="#">Dapatkan Resep</a>
                        </div>
                    </div>`;
        });
    } else {
        html =
            "maaf makanan tak tersedian silahkan buat sendiri. Mandiri Dek!!!";
        meals.classList.add("not-found");
    }
    meals.innerHTML = html;
}

async function getRecipe(e) {
    e.preventDefault();
    console.dir(e.target);
    if (e.target.classList.contains("btn-recipe")) {
        mealDetail.classList.add("show-recipe");
        let mealItem = e.target.parentElement.parentElement;
        const config = { params: { i: mealItem.dataset.id } };
        const res = await axios.get(
            "https://www.themealdb.com/api/json/v1/1/lookup.php",
            config
        );
        getInfoMeals(res.data.meals);
    }
}

function getInfoMeals(data) {
    data = data[0];
    let html = `<h2 class="recipe-tittle">${data.strMeal}</h2>
                    <p class="recipe-category">${data.strCategory}</p>
                    <div class="recipe-isntruct">
                        <h3>instuction:</h3>
                        <p>${data.strInstructions}</p>
                        <div class="recipe-meal-image">
                            <img src="${data.strMealThumb}" alt="">
                        </div>
                        <div class="recipe-link">
                            <a href="${data.strYoutube}" target="_blank">Watch video</a>
                        </div>
                    </div>`;
    mealDetailContent.innerHTML = html;
}
meals.addEventListener("click", getRecipe);
btnSearch.addEventListener("click", getMealContent);
btnClose.addEventListener('click',(e)=>{
    mealDetail.classList.remove("show-recipe")
})
