// JavaScript for the people block

// This is the equivalent of waiting for the document to be fully loaded
// in the plain old JS files (counter.js, working_with_moment.js)
$(document).ready(
  function() {

    // Grabbing the first name fields (all of them), and assign a click handler
    // The click handler will toggle the .big-text class on the element.
    $('#people .first-name')
      .addClass('big-text') // Initialize the element with the .big-text class.
      // chain the next function on the selected element
      .on('click', function(e) {
      // This prevents the event from bubbling up, which might cause more
      // things to trigger, dependimg on layering.
      e.stopPropagation();

      // This toggles the .bit-text class (adds it if isn't there, removes it if it is)
      $( this )
        .toggleClass('big-text');
      })
    ;



    // Add a click handler to the interests heading
    $('#people h3.interests-section')
      .find(' ~ .interests').slideUp() // Initialize the list as slid up (hidden)
      // chain the next function on the selected element
      .on('click', function(e) {
      // Like above, we don't want clicks bubbling up unintentionally
      e.stopPropagation();

      // In this instance, the currently clicked element is a heading,
      // and we want it's sibling unordered list
      $( this )
        .find(' ~ .interests')
        .slideToggle(); // slides the list up (hiding it) or down (showing it)
      })
    ;

  }
);


/*
 * Chaining is a nice feature of jQuery that allows you to put a bunch
 * of jQuery calls one after each other on the same selected element.
 * This works because jQuery is retuning the selected object from each
 * method.
 *
 *   $('#some-id').addClass('blue').on('click', handleClick);
 *
 * is the same as writing:
 *
 *   $('#some-id).addClass('blue);
 *   $('#some-id).on('click', handleClick);
 *
 * The indentation style is common, where the methods are chained
 * one line at a time with the dot ('.') on the start of the new line.
 *
 *   $('#some-id').addClass('blue').on('click', handleClick);
 *
 * is the same as:
 *
 *   $('#some-id')
 *     .addClass('blue')
 *     .on('click', handleClick);
 *
 * It's best to keep these short. Long chains easily become a "train
 * wreck".
 *
 */
