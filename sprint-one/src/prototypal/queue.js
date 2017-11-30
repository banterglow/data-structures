var Queue = function() {
  var instance = Object.create(queueMethods);
  instance.top = -1;
  instance.bottom = 0;
  instance.storage = {};

  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.top += 1;
  this.storage[this.top] = value;
};

queueMethods.dequeue = function() {
  var result;
  
  if (this.top >= this.bottom) {
    result = this.storage[this.bottom];
    this.storage[this.bottom] = undefined;
    this.bottom += 1;
  }

  return result;
};

queueMethods.size = function() {
  return this.top < this.bottom ? 0 : this.top - this.bottom + 1;
};