'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
        $('#testjs').text("I'm a button!");
        $('.jumbotron p').addClass("active");
	});

    $("#submitBtn").click(function(e) {
        var width = $("#width").val();
        var description = $("#description").val();
        var project = $("#project").val();
        $(project).animate( {
            width: width
        }, 1000);
        
        var old_description = $(project).find(".project-description");
        if (old_description.length > 0) {
            //old_description.html("<p>" + description + "</p>");
            old_description.text(description);
        }
    });

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
    $("a.thumbnail").click(projectClick);
}

function projectClick(e) { 
    //console.log("Project clicked");
    // prevent the page from reloading      
    e.preventDefault();

    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);

    var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
        $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    } else { 
        //description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
        $(".project-description").fadeOut();
    }
}