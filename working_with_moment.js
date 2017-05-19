// Working with Moment.JS

var  Days = (function(d){

  var displayArea = d.querySelector('.time');
  var dateStr = displayArea.getAttribute('data-rel');
  var date = moment(dateStr);
  displayArea.textContent = moment().diff(dateStr, 'years');



})(document);
