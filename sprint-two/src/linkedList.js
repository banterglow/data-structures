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
    // define result variable

    // if head and tail are !null
      // go to head
      // store head node's value into variable
      // set LL's head prop to curNode's next prop
      // delete curNode

    // return variable containing value

  };

  list.contains = function(target) {
    // go to head
    // if (check value) is true
      // return true
    // else
      // if next is !null
        // return list.contains(*next node*);
      // else false
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
