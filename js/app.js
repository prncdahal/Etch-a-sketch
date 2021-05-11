let square = document.querySelector('.square');
let box = `<div class="box"></div>`;
let InputSize = 16;
let handleSize = document.getElementById("change-size");
handleSize.addEventListener("click", function() {
	InputSize = prompt("Enter Size");
	square.innerHTML = "";
	buildGrid();
});

function buildGrid() {
	square.style.gridTemplateColumns = `repeat(${InputSize},1fr)`;
	let squareSize = InputSize * InputSize;
	for (let i = 0; i < squareSize; i++) {
		square.innerHTML += box;
	}
	const colorLetter = "012345679ABCDEFG";
	const boxElement = document.querySelector(".box");
	var boxes = document.querySelectorAll('.box');

	function changeColor() {
		let colorCode = "";
		for (i = 0; i <= 5; i++) {
			colorCode += colorLetter[Math.floor(Math.random() * 16)];
		}
		return "#" + colorCode;
	}
	boxes.forEach(function(box) {
		box.addEventListener("mouseover", () => {
			box.style.backgroundColor = changeColor();
		});
	});
}
buildGrid();