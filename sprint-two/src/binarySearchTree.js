var BinarySearchTree = function(val) {
  this.value = val;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(val) {
  if (val < this.value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(val);
    } else {
      this.left.insert(val);
    }
  } else if (val > this.value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
  }

  // if babyval smaller than current val
    // if currentBST doesn't have left child
      // set left child to new babyBST
    // else run insert on left child
  // if babyval greater than current val
    // if currentBST doesn't have a right child
      // set right child to new babyBST
    // else run insert on left child
};

BinarySearchTree.prototype.contains = function(target) {
  if (this.value === target) {
    return true;
  } else if (target < this.value) {
    if (this.left === null) {
      return false;
    }
    return this.left.contains(target);
  } else if (target > this.value) {
    if (this.right === null) {
      return false;
    }
    return this.right.contains(target);
  }

  // var node = node || this; // if below doesn't work, use this.
  // if current === target
    // return true;
  // else if current < target
    // if (this.left === null)
      // return false
    // return this.left.contains(target) // this MAY not work
  // else if current > target
    // if (this.right === null)
      // return false
    // return this.right.contains(target) // again may not work
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
  // if left child exists 
    // run depthFirstLog on the this.left
  // if right child exists
    // run depthFirstLog on this.right
};

/*
 * Complexity: What is the time complexity of the above functions?
    Insert: best case constant, worst case log
    Contains: best case constant, worst case log
    DepthFirstLog: always log
 */
























