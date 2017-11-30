var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // Create a new node instance
    // if first node (head and tail null)
      // set head and tail to new node obj
    // else
      // use LL to traverse to current tail
      // set current tail next to eql new node obj
      // go to next
      // LL tail updates to new node obj
  };

  list.removeHead = function() {
    // 
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
