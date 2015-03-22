//function addDraggieListener(newID){
$( document ).ready(function() {
	
	
	console.log("Add listener to ");
	var elemA = document.querySelector("#basic");
	var draggie = new Draggabilly( elemA, {
		grid: [ 10, 10 ]
	});
	// draggie.on( 'dragEnd', onDragEnd ); //add event listener
  // $.ajax({
  //     type:"GET",
  //     url:"/show",
  //     // data: {id: id, url:url, title:title, x:xx, y:yy, layer:layer, tags:tags },
  //     // dataType: "json",
  //     // datatype:"jsondata",
  //     success:function(response){
  //       $('#results').append(response)
  //     }, complete : function(){
  //       alert("finished!")
  //     }   
  //   });
});	
	
//}