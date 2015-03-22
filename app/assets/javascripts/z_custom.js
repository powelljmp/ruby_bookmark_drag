//function addDraggieListener(newID){
console.log("Add listener to ");
	var elemA = document.querySelector("#basic");
	var draggie = new Draggabilly( elemA, {
		grid: [ 10, 10 ]
	});
	draggie.on( 'dragEnd', onDragEnd ); //add event listener
//}