var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // Create a new node instance
    var newNode = Node(value);
    // if first node (head and tail null)
    // set head and tail to new node obj
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    // else
      // use LL to traverse to current tail
      // set current tail next to eql new node obj
      // go to next
      // LL tail updates to new node obj
  };

  list.removeHead = function() {
    // define result variable
    var result, curNode;

    // if head and tail are !null
      // go to head
      // store head node's value into variable
      // set LL's head prop to curNode's next prop
      // delete curNode
    if (this.head !== null) {
      result = this.head.value;
      curNode = this.head;
      if (this.head.next === null) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
      }
      delete curNode;
    }
    // return variable containing value
    // if becomes empty, set head and tail to null
    return result;
  };

  list.contains = function(target, curNode) {
    // go to head
    // if (check value) is true
      // return true
    curNode = curNode || this.head;
    if (curNode.value === target) {
      return true;
    } else {
      if (curNode.next === null) {
        return false;
      }
      return this.contains(target, curNode.next);
    }
    // else
    //   if next is !null
    //     return list.contains(*next node*);
    //   else false
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
addToTail: constant
removeHead: constant
contains: linear
 */
