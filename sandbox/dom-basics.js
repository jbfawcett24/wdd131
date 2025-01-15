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