// JavaScript for the people block

function handleFirstNameClick(e) {
  // This prevents the event from bubbling up, which might cause more
  // things to trigger, dependimg on layering.
  e.stopPropagation();

  // This toggles the .bit-text class (adds it if isn't there, removes it if it is)
  $( this ).toggleClass('big-text');
};

function handleInterestClick(e) {
  // Like above, we don't want clicks bubbling up unintentionally
  e.stopPropagation();

  // In this instance, the currently clicked element is a heading,
  // and we want it's sibling unordered list
  $( this )
    .find(' ~ .interests')
    .slideToggle(); // slides the list up (hiding it) or down (showing it)
};

// This is the equivalent of waiting for the document to be fully loaded
// in the plain old JS files (counter.js, working_with_moment.js)
$(document).ready(function() {

  // Grabbing the first name fields (all of them), assign a click
  // handler, and initializing the text.
  $('#people .first-name')
    .on('click', handleFirstNameClick)
    .addClass('big-text')
  ;

  // Grabbing all the interest section headings, assigning the click
  // handler, and sliding the interest lists up (hiding them).
  $('#people h3.interests-section')
    .on('click', handleInterestClick)
    .find(' ~ .interests').slideUp()
  ;
});


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
