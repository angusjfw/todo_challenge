exports.getInputValue = function(input) {
  return input.getAttribute('value')
    .then(function(value) {
      return value
    });
};
