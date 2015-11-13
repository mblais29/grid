$(document).on('change', '.btn-file :file', function() {
  var input = $(this),
      numFiles = input.get(0).files ? input.get(0).files.length : 1,
      label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
  input.trigger('fileselect', [numFiles, label]);
});

$(document).ready( function() {

    $('.btn-file :file').on('fileselect', function(event, numFiles, label) {
        
        var input = $(this).parents('.input-group').find(':text'),
            log = numFiles > 1 ? numFiles + ' files selected' : label;
        
        if( input.length ) {
            input.val(log);
        } else {
            if( log ) alert(log);
        }
        
    });
    $( "#submit" ).on('click', function(){
    	$("form").trigger("reset");
    });
    
    $("#make").change(function() {
    	localStorage.setItem('type', $('#make').val());
    	//console.log(localStorage.getItem ('type'));
    });
    
  // Add the new image path
   
	$("#files").change(function() {
	    // will log a FileList object, view gifs below
	    //console.log(this.files);
	    // grab the first image in the FileList object and pass it to the function
    	renderImage(this.files[0]);
	});
	
	// render the image in our view
	function renderImage(file) {
	  // generate a new FileReader object
	  var reader = new FileReader();
	  // inject an image with the src url
	  reader.onload = function(event) {
	    the_url = event.target.result;
	    localStorage.setItem ('pic', the_url);
	  };
	  // when the file is read it triggers the onload event above.

	  	reader.readAsDataURL(file);

	  
	};

});



