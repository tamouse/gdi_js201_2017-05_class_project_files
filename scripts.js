document.addEventListener('ready', function() {

    (function(d, bounceTime){

      function result(){
        return d.querySelector('[rel=result]');
      }

      function operate(evt) {
        var operator = this.getAttribute('data-op');
        var increment = this.getAttribute('data-inc');
        changeResult(operator, increment);
      }

      // Add the changing class, then take it away after a moment
      function bounceResult() {
        result().classList.add('changing');
        setTimeout(function(){ result().classList.remove('changing'); }, bounceTime);
      }

      // clear the result display
      function clearResults(){
        bounceResult();
        result().innerHTML = '';
      }

      // change the result by the value passed in
      function changeResult(op, inc){
        bounceResult();

        var oldResult = result().textContent*1;

        var newResult = (op === '*') ?
          oldResult * inc :
          (oldResult + parseInt(`${op}${inc}`));

        result().textContent = newResult;
      }

      // Add the operate event handler to all the buttons
      // Using querySelectorAll so we have the forEach method
      d.querySelectorAll('[data-op]')
        .forEach(function(el){
          el.addEventListener('click', operate);
        });

      return {};

    })(document, 300);

  }()
)
