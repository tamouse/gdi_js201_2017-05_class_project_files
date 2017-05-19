// The following waits for the document to be fully loaded
// when it fires the ready event. This ensures that all the
// targetted elements are already on the page.
document.addEventListener('DOMContentLoaded', function() {

  // Definiing all the functions and variables inside this
  // function keeps them from "polluting" the top level scope.
  (function(d){
    // d becomes a shorthand for document.


    function bounceTime() {
      // Gets the bounce time specified on the counter element,
      // and memoizes it.
      var _bounceTime;
      if (! _bounceTime) {
        _bounceTime = parseInt(d.querySelector('.counter').getAttribute('data-bounce'));
      }
      return _bounceTime;
    }


    function result(){
      return d.querySelector('[rel=result]');
    }

    // this is the only event handler in this tiny module,
    // which gets attached to all the counter buttons,
    // and deals with them when they are pressed.
    //
    // The function makes use of the data- attributes that are
    // on the <button> elements, to get what operation the button
    // will perform, and what amount should be applied to
    // the operation.
    //
    // This extends the original so there are buttons that
    // just the counter up or down by 10 (the double plus and minus)
    function operate() {
      var operator = this.getAttribute('data-op');
      var increment = this.getAttribute('data-inc');
      bounceResult();
      changeResult(operator, increment);
    }

    // Add the changing class, then take it away after a moment
    // which causes the result to "bounce"
    function bounceResult() {
      result().classList.add('changing');
      setTimeout(function(){ result().classList.remove('changing'); }, bounceTime());
    }

    // clear the result display
    function clearResults(){
      result().textContent = '';
    }

    // This is the meat of the counter. This is the function that
    // changes the result by the value passed in.
    function changeResult(op, inc){

      // I'm using the textContent instead of innerHTML because that only deals
      // with the text, where there might be some HTML in the element.
      // Also, instead of running it through parseInt(), I'm multiplying by
      // 1 (unity) to make JavaScript coerce the contents into a number. If the
      // text content is blank, coercing it to a number will yeild 0, where
      // calling parseInt on a blank will throw an exception.
      var oldResult = result().textContent*1;



      // The next statement uses a "ternary" expression.
      // It's just like saying:
      //
      //     if (op === 'R') {
      //       newResult = '';
      //     } else {
      //       newResult = parseInt(`${op}${inc}`);
      //     }
      //
      // but a lot shorter, yet harder to read, especially if
      // packed onto one line which is tytpical.
      var newResult = (op === 'R') ?
          '' :
          (oldResult + parseInt(`${op}${inc}`));
      // the expression surrounded by backticks (`) is called a String Template,
      // and is used to interpolate values into the string. In this case, it's just
      // like doing op + inc, which are strings.



      // Using textContent here, which will replace the innerText
      result().textContent = newResult;
      // The main different between using innerHTML, innerText, and textContent
      // for replacing the content of the element, is that innerText and textContent
      // will escape any HTML they encounter, protecting the contents.
      // If you want to add some HTML structure, use innerHTML.
      //
      // Example:
      //
      // Say we wrapped the result in a span:
      //
      //   newResult = "<span>" + newResult + "</span>";
      //
      // Writing:
      //   result().innerHTML = newResult
      //
      // would make the span part of the DOM, whereas writing:
      //   result().innerText = newResult
      //
      // would escape the span before it was placed in the node:
      //   &lt;span&gt;1&lt;/span&gt;
      //
      // (assuming newResult was 1).


    }

    // Initialize the counter:
    // Add the operate event handler to all the buttons
    //
    // Note: I'm using querySelectorAll so I have the forEach method
    d.querySelectorAll('[data-op]')
      .forEach(function(el){
        el.addEventListener('click', operate);
      });
    // Neither getElementsByTagName nor querySelectorAll returns a true Array.
    // They return collections that you can index like Arrays, but they
    // don't have all the Array prototype methods.



  })(document);                 // IIFE
  // IIFE is an Immediately Invoked Function Expression, and gives a handy
  // way to pass in values.

});
