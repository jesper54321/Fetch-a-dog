//initialising variables for html elemenents
let api_base = document.getElementById("dogApiFrame");
let img = document.querySelector("#dogApiFrame img");
let leftarrow = document.querySelector("#dogApiFrame .arrow_left");
let rightarrow = document.querySelector("#dogApiFrame .arrow_right");

//initialising variables for controlling and manipulating images
let images = [];
let currentimg = 0;

//fetching json from the dog api
fetch("https://dog.ceo/api/breeds/image/random/50")
	//converting the fetched data to json
	.then((response) => response.json())
	//placing data from the json file into an array to keep track og images. adding an img and showing the app
	.then((data) => {
		for (const image of data.message) {
			images.push(image);
		}
		img.setAttribute("src", images[currentimg]);
		api_base.classList.add("active");
	})
	//setting up a try catch functionality to catch errors in the fetch.
	.catch((err) => console.error(err));

//function to change the img
function swapImage(direction) {
	//if direction is true we go backwards else we go forward resetting if first or last image
	if (direction) {
		if (currentimg == images.length - 1) {
			currentimg = 0;
		} else {
			currentimg++;
		}
	} else {
		if (currentimg == 0) {
			currentimg = images.length - 1;
		} else {
			currentimg--;
		}
	}
	img.setAttribute("src", images[currentimg]);
}

//adding event listeners for the arrows
leftarrow.addEventListener("click", (e) => {
	swapImage(0);
});
rightarrow.addEventListener("click", (e) => {
	swapImage(1);
});
