var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);

  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // make babyTree with value
  var newTree = Tree(value);
  // push babyTree to children array
  this.children.push(newTree);
};

treeMethods.contains = function(target) {
  // if curNode value eql target
    // return true;
  // else if curNode has children
    // loop through all children
      // recursively call contain on child and return result
  // else
    // return false;
  if (this.value === target) {
    return true;
  } else if (this.children.length !== 0) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
    return false;
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
addChild: Constant
contains: Linear
 */
