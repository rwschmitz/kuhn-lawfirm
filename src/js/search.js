$(function() {
  var $context = $(".context");
  var $form = $("#dog");
  var $button = $form.find("button[name='search']");
  var $input = $form.find("input[name='keyword']");

// I added additional code so the search is performed asynchronous w/ the enter key

  $.ajax({
    type: "POST",
    url: "index.html",
    data: $("#keyword").serialize(),
    done: $("#keyword").keypress(function(e) {
      if (e.which == 13) {
        var searchTerm = $input.val();
        // Remove old highlights and highlight new search term afterwards
        $context.removeHighlight();
        $context.highlight(searchTerm);
        e.preventDefault();
        e.stopPropagation();
        document.getElementById("#keyword").reset();
      }
    })
  });

  $button.on("click", function() {
    // Determine search term
    var searchTerm = $input.val();

    // Remove old highlights and highlight new search term afterwards
    $context.removeHighlight();
    $context.highlight(searchTerm);
  });
  $button.trigger("click");
});
