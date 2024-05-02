//Get the element that has an id of banner 
const gretting = document.getElementById("banner");

//Function to update gretting when clicked
function updateGretting () {
    gretting.innerHTML = "Hello world!";
}

gretting.addEventListener("mouseover", updateGretting);