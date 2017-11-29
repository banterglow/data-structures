var Stack = function() {
  var someInstance = {
    top: -1
  };

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance.top += 1;
    storage[someInstance.top] = value;
  };

  someInstance.pop = function() {
    var result;
    if (someInstance.top >= 0) {
      result = storage[someInstance.top];
      storage[someInstance.top] = undefined;
      someInstance.top -= 1;
    }
    return result;
  };

  someInstance.size = function() {
    return someInstance.top + 1;
  };

  return someInstance;
};
