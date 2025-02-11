import { recipes } from "./recipes.js";
function getRand(num)
{
    return Math.floor(Math.random() * num);
}

function getIndex()
{
    const numRecipies = recipes.length;
    const randIndex = getRand(numRecipies);
    return recipes[randIndex];
}

function recipeTemplate(recipe)
{
    return `
        <article>
        <img class="recipe-image" src="${recipe.image}" alt="recipe-image">
        <div>
            <div class="tag-list">
                ${tagGenerator(recipe.tags)}
            </div>
            <h2>${recipe.name}</h2>
            ${ratingTemplate(recipe.rating)}
            <p class="description">${recipe.description}</p>
        </div>
        </article>
    `;
}

function ratingTemplate(ratingNum)
{
    let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${ratingNum} out of 5 stars"
    >`
    for (let i = 0; i < ratingNum; i++) {
        html += '<span aria-hidden="true" class="icon-star">⭐</span>'
    }
    for(let i = 1; i <= 5 - ratingNum; i++) 
    {
        html += '<span aria-hidden="true" class="icon-star-empty">☆</span>'
    }
    html += '</span>';
    return html;
}

function tagGenerator(tags)
{
    return tags.map(tag => '<p class="tag">' + tag + '</p>').join("");
}

function getRandRecipe()
{
    return recipeTemplate(getIndex());
}

function renderRecipes(recipe)
{
    const section = document.querySelector("#recipe-section");
    section.innerHTML = ``;
    section.innerHTML = recipe;
}
function init() {
    // get a random recipe
    const recipe = getRandRecipe(recipes)
    // render the recipe with renderRecipes.
    renderRecipes([recipe]);
}

function inputCheck(event)
{
    event.preventDefault();
    const goodInput = document.querySelector("#search").value.toLowerCase();
    filterRecipe(goodInput);
}
function filterRecipe(input)
{
    const filtered = recipes.filter((recipe) => recipe.tags.includes(input));
    const recipeList = filtered.map(recipeTemplate);
    renderRecipes(recipeList);
}
init();

document.querySelector("button").addEventListener("click", inputCheck)