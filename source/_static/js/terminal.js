$(document).ready(function() {

    // the html that will be inserted to replace the shortened code
    // the terminal bar and body before the text is placed
    var termTemplate = '\
	<div class="terminal-window"> \
 	<div class="terminal-toolbar"> \
		<div class="terminal-top"> \
			<div class="terminal-title"> \
				Terminal \
			</div> \
		</div> \
	</div> \
	<div>\
	    <pre class="terminal-body"></pre> \
	</div> \
</div> \
';

    // tell jQuery to search for each instance of the shortened code
    $(".terminal").each(function() {
        var myContent = $(this).text();
        $(this).html(termTemplate);
        $(".terminal-body",this).text(myContent);
    });
});