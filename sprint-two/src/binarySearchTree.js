var BinarySearchTree = function(val) {
  this.globalDepth = 1;
  this.depthTracker = 1;
  this.treePopulation = 1;
  this.head = new BSTNode(val);
  this.counter = 0;
};

var BSTNode = function(val) {
  this.value = val;
  this.left = null;
  this.right = null;
  this.rightPop = 0;
  this.leftPop = 0;
};

// Global variables for tracking depth of the tree

BinarySearchTree.prototype.insert = function(val, node) { 
  node = node || this.head;
  this.depthTracker++;

  //// LEFT TREE ////  
  if (val < node.value) {
    node.leftPop++;

    // Empty left node case
    if (node.left === null) {
      // dTracker and gDepth updater
      if (this.depthTracker > this.globalDepth) {
        this.globalDepth = this.depthTracker;
      }      
      // Insert new node to left
      node.left = new BSTNode(val);
      //// Insert Balance Checker here? ////
      this.treePopulation++;
      this.balanceChecker(this.head);
      this.depthTracker = 1;
    // Recursion case
    } else {
      this.insert(val, node.left);
    }

  //// RIGHT TREE ////
  } else if (val > node.value) {
    node.rightPop++;

    // Empty right node case
    if (node.right === null) {
      // dTracker and gDepth updater
      if (this.depthTracker > this.globalDepth) {
        this.globalDepth = this.depthTracker;
      }

      // Insert new node to right
      node.right = new BSTNode(val);
      //// Insert Balance Checker here? ////
      this.treePopulation++;
      this.balanceChecker(this.head);
      this.depthTracker = 1;

    // Recursion case
    } else {
      this.insert(val, node.right);
    }
  }
};

BinarySearchTree.prototype.contains = function(target, node) {
  node = node || this.head;  

  //// Target Found ////
  if (node.value === target) {
    return true;
  //// Target less than current value
  } else if (target < node.value) {
    if (node.left === null) {
      return false;
    }
    // Recurse contains to the left
    return this.contains(target, node.left);

  //// Target more than current value
  } else if (target > node.value) {
    if (node.right === null) {
      return false;
    }
    // Recurse contains to the right
    return this.contains(target, node.right);
  }
};

BinarySearchTree.prototype.depthFirstLog = function(cb, node) {
  node = node || this.head;

  cb(node.value);
  if (node.left) {
    this.depthFirstLog(cb, node.left);
  }
  if (node.right) {
    this.depthFirstLog(cb, node.right);
  }
};

BinarySearchTree.prototype.balanceChecker = function(node) {
  var trigger = Math.ceil(Math.log2(this.treePopulation + 1));
  if (trigger < this.globalDepth) {
    if (this.counter > 0) {
      this.counter = 0;
    }
    this.refresh(node); // will break if not testing with test suite or if head parent 
  }
  // totalDepth
  // treePopulation
  // balanceChecker will run immediately after a node is inserted.
  


  // it will start on the top node (binarySearchTree)
  // it will take the value and follow where that would've gone down the tree
  // each node, it will check for abs(leftpop - rightpop) >= 2
  // on the first node where that condition isn'
};

BinarySearchTree.prototype.refresh = function(node) {
  var treeArray = [];
  var compileArray = function(value) { treeArray.push(value); };
  this.depthFirstLog(compileArray);
  treeArray = treeArray.sort(function(a, b) { return a - b; }); // sort only works for numbers, can fix to sort as we enter them in.
  
  this.counter++;
  this.treePopulation = 1;
  this.globalDepth = 1;
  this.depthTracker = 1;
  this.binaryRecompile(treeArray, node);
};

BinarySearchTree.prototype.binaryRecompile = function(arr, targetNode) {
  var middle = Math.floor(arr.length / 2);
  if (this.counter === 1) {
    targetNode.value = arr[middle];
    targetNode.left = null;
    targetNode.right = null;
    targetNode.rightPop = 0;
    targetNode.leftPop = 0;
  } else {
    this.insert(arr[middle]);
  }

  if (arr.length <= 1) {
    return;
  } else {
    arr.splice(middle, 1);
    this.counter++;
    this.binaryRecompile(arr.slice(0, middle), targetNode);
    if (arr.length !== 1 && arr.length !== 0) {
      this.counter++;
      this.binaryRecompile(arr.slice(middle, arr.length), targetNode);
    }
  }
  return targetNode;
};












/*
BinarySearchTree.prototype.refresh = function() {

};

// BinarySearchTree.prototype.findDepth = function() {
//   var greatest;
  

// };

*/





// Properties
// Depth Tracker: Each time the insert function recurses, increments the global tracking variable. 
  // Also a max depth global variable. Each recursion, compares global tracking to global depth, and replace depth if greater. 
// Right, left population property
  // On all nodes. Increments each time it's about to recursively insert on its left or right. 

// Functions
// Balance Checker
  // Triggered by the ceil(logbase2 (total nodes)) > total depth.
  // Checks left population vs. right population. If > 2, then candidate for rebalancing. Calls Refresh. 
// Refresh
  // Gathers depth first log into a sorted array of all nodes. 
  // Rebuilds tree using sorted array, selecting midpoints recursively. 






/*
 * Complexity: What is the time complexity of the above functions?
    Insert: best case constant, worst case log
    Contains: best case constant, worst case log
    DepthFirstLog: always linear
 */
























