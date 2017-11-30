var Queue = function() {
  this.top = -1;
  this.bottom = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.top += 1;
  this.storage[this.top] = value;
};

Queue.prototype.dequeue = function() {
  var result;
  
  if (this.top >= this.bottom) {
    result = this.storage[this.bottom];
    this.storage[this.bottom] = undefined;
    this.bottom += 1;
  }

  return result;
};

Queue.prototype.size = function() {
  return this.top < this.bottom ? 0 : this.top - this.bottom + 1;
};