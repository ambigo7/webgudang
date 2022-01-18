var $inputs = $(".delivery-order");
var intRegex = /^\d+$/;
var valueLen = 20;
var inputLen = 4;

// Autotab replaces all the old code below
// https://github.com/Mathachew/jquery-autotab
$inputs.autotab({ format: 'alphanumeric', uppercase: true });

// Parses the individual digits into the individual boxes.
function pasteValues(element) {
// we split the original value in parts of inputLen length
  var re = new RegExp('.{1,'+inputLen+'}','g');
  var values = element.match(re);

    $(values).each(function(index) {
      var $inputBox = $('.delivery-order[name="do[' + (index + 1) + ']"]');
      $inputBox.val(values[index])
    });
};