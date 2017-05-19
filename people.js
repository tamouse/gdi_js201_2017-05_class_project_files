// JavaScript for the people block

$(document).ready(
  function() {
    $('#people .first-name').on('click', function(e) {
      e.stopPropagation();
      $( this )
        .toggleClass('big-text');
    })
      .addClass('big-text')
    ;
    $('#people h3.interests-section').on('click', function(e) {
      e.stopPropagation();
      $( this )
        .find(' ~ .interests')
        .slideToggle();
    })
      .find(' ~ .interests').slideUp()
    ;
  }
);
