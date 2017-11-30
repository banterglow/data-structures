var Queue = function() {
  var instance = {
    top: -1,
    bottom: 0,
    storage: {}
  };
  
  // var storage = {};  
  
  _.extend(instance, queueMethods);
  
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

// var Queue = function() {
//   var this = {
//     top: -1,
//     bottom: 0
//   };

//   // Use an object with numeric keys to store values
//   var storage = {};

//   // Implement the methods below

//   this.enqueue = function(value) {
//     this.top += 1;
//     storage[this.top] = value;
//   };

//   this.dequeue = function() {
//     var result;
    
//     if (this.top >= this.bottom) {
//       result = storage[this.bottom];
//       storage[this.bottom] = undefined;
//       this.bottom += 1;
//     }

//     return result;
//   };

//   this.size = function() {
//     return this.top < this.bottom ? 0 : this.top - this.bottom + 1;
//   };

//   return this;
// };


