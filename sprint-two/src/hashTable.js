

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage.get(index)) {
    this._storage.set(index, []);
    var hello = this._storage.get(index);
  }
  this._storage.get(index).push([k, v]);
  // if no array in that AR1
    // use set to create AR2 = []
  // create AR3 based on k, v
  // set AR3 into AR2
};

HashTable.prototype.retrieve = function(k) {
  var result;
  var index = getIndexBelowMaxForKey(k, this._limit);
  var secondIndex = this.find(index, k);
  if (secondIndex) {
    console.log(result);
    result = this._storage.get(index)[secondIndex][1];
  }
  return result;
  // use find and store in variable
  // result is undefined
  // if variable is !undefined
    // result = value at that index
  // return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var secondIndex = this.find(index, k);
  if (secondIndex) {
    this._storage.get(index).splice(secondIndex, 1);
  }
};

HashTable.prototype.createTuple = function(k, v) {
  return [k, v];
};

HashTable.prototype.find = function (index, k) {
  var result;
  if (this._storage.get(index).length) {
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
        result = i;
      }
    }
  }
  return result;
  
  // Get AR1(index) and store that AR2 in a variable
  // Loop through AR2 for the key at AR3[0]
  // if found
    // return index
  // otherwise return undefined
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


