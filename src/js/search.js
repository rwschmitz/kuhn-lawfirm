$(function() {
    var $context = $(".context");
    var $form = $("#dog");
    var $button = $form.find("button[name='search']");
    var $input = $form.find("input[name='keyword']");
  
    $button.on("click.search", function() {
  
      // Determine search term
      var searchTerm = $input.val();
  
      // Remove old highlights and highlight
      // new search term afterwards
      $context.removeHighlight();
      $context.highlight(searchTerm);
  
    });
    $button.trigger("click.search");
  });