const newParagraph = document.createElement("p");
const newImage = document.createElement("img");

newParagraph.innerText = "Added with JavaScript";
newImage.setAttribute("src", "https://placehold.co/200");
newImage.setAttribute("alt", "Image");

document.body.appendChild(newImage);
document.body.appendChild(newParagraph);

const newSection = document.createElement("section");
newSection.innerHTML = "<h2>Dom Basics</h2> <p>This was added through Javascript";
document.body.appendChild(newSection);

const ingredientList = ["Pinto Beans", "Corn", "Spices", "Tortillas"];
const portionData = ["1 15oz can", "1 15 oz can", "1 Tbsp", "8"];

const recipe = document.createElement("ul");
recipe.innerHTML = "<em>Ingredient List</em>";
for(let i = 0; i < ingredientList.length; i++)
{
    const newListEntry = document.createElement("li");
    newListEntry.innerText = `${portionData[i]} - ${ingredientList[i]}`;
    recipe.appendChild(newListEntry);
}
document.body.append(recipe);