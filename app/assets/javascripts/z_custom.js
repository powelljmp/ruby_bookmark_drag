$( document ).ready(function() {
	
	var modalAdd   = $('#addModal');

	console.log("Add listener to ");
	var elemA = document.querySelector("#basic");
	var draggie = new Draggabilly( elemA, {
		grid: [ 10, 10 ]
	});
	// draggie.on( 'dragEnd', onDragEnd ); //add event listener
  
	/*
	$.ajax({
      type:"GET",
      url:"/show",
      // data: {id: id, url:url, title:title, x:xx, y:yy, layer:layer, tags:tags },
      // dataType: "json",
      // datatype:"jsondata",
      success:function(response){
        $('#results').append(response)
      }, complete : function(){
        //alert("finished!")
      }   
    });
  */

  
	// -- Add site -- //	
	$("#addBookmark").click(function(){
		//call modal
		 $('#addModal').modal({
			keyboard: true
		 })
	});	
  
	// -- Modal Add site -- //	
	$("#addModal .btn-success").click(function(){	
	
		var title = modalAdd.find('#site-title').val()
		var url = modalAdd.find('#site-url').val()
		var layer = modalAdd.find('#site-layer').val()
		var tags = modalAdd.find('#site-tags').val()
	
		// -- get unquie key --// 
		var newID = ts();
		
		//render to browser
		//genSiteEntry(newID,title,url,0,0,layer,tags);
		
		saveItem(newID,title,url,layer,tags)
		
		//cleanEditModal();//clean modal
		
		$('#addModal').modal('hide')
	});
	
	function saveItem(id,title,url,layer,tags){
		
		//var xx = $('#'+id).offset().left;
		//var yy = $('#'+id).offset().top; 
		
		var xx = 10;
		var yy = 10;
		
	
		if(!title){
			title =  $('#'+id).find('.title').text()
		}
		if(!url){
			url =  $('#'+id).find('.url').text()
		}	
		if(!layer){
			layer =  $('#'+id).data('layer')
		}
			
		$.ajax({
			type:"POST",
			url:"/create",
			//contentType: "application/json; charset=utf-8",
			//data: {title:"test title"},
			data: {url:url, title:title, x:xx, y:yy, layer:layer, tags:tags },
			
      dataType: "json",
      success:function(response){
				alert("saved" +response);
			}		
		});
	}
	
	function ts() {
		var d = new Date();
		var h = addZero(d.getHours(), 2);
		var m = addZero(d.getMinutes(), 2);
		var s = addZero(d.getSeconds(), 2);
		var ms = addZero(d.getMilliseconds(), 3);
		
		var t = "S" + h + m + s + ms;
		return t;
	}	

	function addZero(x,n) {
		if (x.toString().length < n) {
			x = "0" + x;
		}
		return x;
	}
  
});	 
