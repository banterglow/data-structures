var Queue = function() {
  var someInstance = {
    top: -1,
    bottom: 0
  };

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    someInstance.top += 1;
    storage[someInstance.top] = value;
  };

  someInstance.dequeue = function() {
    var result;
    
    if (someInstance.top >= someInstance.bottom) {
      result = storage[someInstance.bottom];
      storage[someInstance.bottom] = undefined;
      someInstance.bottom += 1;
    }

    return result;
  };

  someInstance.size = function() {
    return someInstance.top < someInstance.bottom ? 0 : someInstance.top - someInstance.bottom + 1;
  };

  return someInstance;
};


