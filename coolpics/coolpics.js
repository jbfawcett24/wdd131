const menu = document.querySelector("#menu");

function hideMenu(){
    menu.classList.toggle("hide");
}

function checkWindow() {
    if(window.innerWidth >1000)
    {
        menu.classList.remove("hide");
    }
}

function viewerTemplate(path, alt) {
    return `<div class="viewer">
        <button class="close" type="button">X</button>
        <img src="${path}" alt="${alt}">
    </div>`;
}
function viewHandler(event) {
    console.log(event.target);
	// create a variable to hold the element that was clicked on from event.target
    const image = event.target;
	// get the src attribute from that element and 'split' it on the "-"
    const imgSrc = image.getAttribute("src").split("-");
    imgSrc.pop();
	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    const src = imgSrc + "-full.jpeg";
	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    const newImg = viewerTemplate(src, "image");
    document.querySelector("body").insertAdjacentHTML("afterbegin", newImg);
	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    document.querySelector(".close").addEventListener("click", closeViewer);
}

function closeViewer() {
    const viewer = document.querySelector(".viewer");
    document.body.removeChild(viewer);
}

document.querySelector(".gallery").addEventListener("click", viewHandler);
document.querySelector("#button").addEventListener("click",hideMenu);
window.addEventListener("resize", checkWindow);