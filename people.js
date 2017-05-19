// JavaScript for the people block

// This is the equivalent of waiting for the document to be fully loaded
// in the plain old JS files (counter.js, working_with_moment.js)
$(document).ready(
  function() {

    // Grabbing the first name fields (all of them), and assign a click handler
    // The click handler will toggle the .big-text class on the element.
    $('#people .first-name').on('click', function(e) {
      // This prevents the event from bubbling up, which might cause more
      // things to trigger, dependimg on layering.
      e.stopPropagation();

      // This toggles the .bit-text class (adds it if isn't there, removes it if it is)
      $( this )
        .toggleClass('big-text');
    })
      .addClass('big-text'); // Initialize the element with the .big-text class.
                             // This is known as "chaining"



    // Add a click handler to the interests heading
    $('#people h3.interests-section').on('click', function(e) {

      // Like above, we don't want clicks bubbling up unintentionally
      e.stopPropagation();

      // In this instance, the currently clicked element is a heading,
      // and we want it's sibling unordered list
      $( this )
        .find(' ~ .interests')
        .slideToggle(); // slides the list up (hiding it) or down (showing it)
    })
      .find(' ~ .interests').slideUp() // Initialize the list as slid up (hidden)
    ;
  }
);
