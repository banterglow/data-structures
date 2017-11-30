var Stack = function() {
  this.top = -1;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.top += 1;
  this.storage[this.top] = value;
};

Stack.prototype.pop = function() {
  var result;
  if (this.top >= 0) {
    result = this.storage[this.top];
    delete this.storage[this.top];
    this.top -= 1;
  }
  return result;
};

Stack.prototype.size = function() {
  return this.top + 1;
};
