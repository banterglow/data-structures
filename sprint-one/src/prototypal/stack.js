var Stack = function() {
  var instance = Object.create(stackMethods);
  instance.top = -1;
  instance.storage = {};

  return instance;
};

var stackMethods = {
  push: function(value) {
    this.top += 1;
    this.storage[this.top] = value;
  },

  pop: function() {
    var result;
    if (this.top >= 0) {
      result = this.storage[this.top];
      this.storage[this.top] = undefined;
      this.top -= 1;
    }
    return result;
  },

  size: function() {
    return this.top + 1;
  }
};