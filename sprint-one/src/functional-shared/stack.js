var Stack = function() {
  var instance = {
    top: -1,
    storage: {}
  };

  _.extend(instance, stackMethods);

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
      delete this.storage[this.top];
      this.top -= 1;
    }
    return result;
  },

  size: function() {
    return this.top + 1;
  }
};