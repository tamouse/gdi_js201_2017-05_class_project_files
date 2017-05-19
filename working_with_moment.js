// Working with Moment.JS
// https://momentjs.com/

// Wait until the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {

  // ------------------------------------------------------------
  // SHORTCUTS
  // ------------------------------------------------------------

  const d = document;           // another way get a short handle on a longer variable
  d.QS = d.querySelector;       // this also shortens the method name

  // I don't really recommend the above in code you share with other
  // team members, unless it's something that you all pretty much
  // agree on and understand. It can be really hard to figure out
  // what is being called with these short-hands, since they aren't
  // documented anywhere. **REALLY** do not use them outside of function
  // bodies.

  // I'm using an alternative sort of selector. The 'rel' attribute
  // on most elements isn't used for much, and so makes a pretty
  // good way to select items in JavaScript. It is a standard CSS selector,
  // so it works pretty much everywhere. It's capable of even fancier
  // tricks.

  // without intermediate variables
  d.QS('[rel=today-is]').textContent = moment().format("Do of MMMM, YYYY");

  // using intermediate varialbes
  var displayArea = d.QS('[rel=age]');

  // The 'data-dob' attribute will contain the date of birth that
  // I want to show. It's a way of creating an HTML API so you
  // can provide arguments in the HTML that can be used in JavaScript
  // without exposing them to the formatted part of the DOM. Note
  // the data will be visible in the source if you view it.
  var dateStr = displayArea.getAttribute('data-dob');
  displayArea.textContent = moment().diff(dateStr, 'years');

});
