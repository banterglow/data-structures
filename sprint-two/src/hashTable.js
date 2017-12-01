

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // if second-level array has not been created yet
  if (!this._storage.get(index)) {
    this._storage.set(index, []);
  }
  var found = this.find(index, k);
  if (found !== undefined) {
    this._storage.get(index)[found][1] = v;
  } else {
    this._storage.get(index).push([k, v]);
  }
  console.log(this._storage.get(index));
 //will need to implement override.
  // if no array in that AR1
    // use set to create AR2 = []
  // create AR3 based on k, v
  // set AR3 into AR2
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var found = this.find(index, k);
  if (found !== undefined) {
    return this._storage.get(index)[found][1];
  }
  // use find and store in variable
  // result is undefined
  // if variable is !undefined
    // result = value at that index
  // return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var found = this.find(index, k);
  if (found !== undefined) {
    this._storage.get(index).splice(found, 1);
  }
};

HashTable.prototype.find = function (index, k) {
  if (this._storage.get(index).length) {
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
        return i;
      }
    }
  }
  
  // Get AR1(index) and store that AR2 in a variable
  // Loop through AR2 for the key at AR3[0]
  // if found
    // return index
  // otherwise return undefined
};



/*
 * Complexity: What is the time complexity of the above functions?
    insert: Best case scenario, Constant O(1), worst case scenario, Linear O(n)
    retrieve: Best case scenario, Constant O(1), worst case scenario, Linear O(n)
    remove: Best case scenario, Constant O(1), worst case scenario, Linear O(n)
    find: Best case scenario, Constant O(1), worst case scenario, Linear O(n)
 */


