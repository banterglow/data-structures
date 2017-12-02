var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  index = _.indexOf(this.storage, item);
  if (index === -1) {
    this.storage.push(item);
  } else {
    this.storage[index] = item;
  }
};

setPrototype.contains = function(item) {
  if (_.indexOf(this.storage, item) > -1) {
    return true;
  }
  return false;
    
  // };
};

setPrototype.remove = function(item) {
  this.storage.splice(_.indexOf(this.storage, item), 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
