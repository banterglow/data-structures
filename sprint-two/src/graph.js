

// Instantiate a new graph
var Graph = function() {
  this.graph = {};
};


// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = {};
  newNode.val = node;
  newNode.edge = {};
  this.graph[node] = newNode;
  // Create a new node
  // Put the node into this.graph, with the key (node) and value (obj {value and edges})
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (Object.keys(this.graph).length !== 0) {
    for (var nodes in this.graph) {
      if (+nodes === node) {
        return true;
      }
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this.graph[node].edge) {
    this.removeEdge(this.graph[key].val, this.graph[node].val);
  }
  delete this.graph[node];
  // for in edge object 
    // remove edge from that node to this node
  // delete object
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.graph[fromNode].edge[toNode]) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.graph[fromNode].edge[toNode] = this.graph[toNode];
  this.graph[toNode].edge[fromNode] = this.graph[fromNode];
  // what if one of the nodes doesn't exist. 
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.graph[fromNode].edge[toNode];
  delete this.graph[toNode].edge[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.graph) {
    cb(node);
  }
  // run cb on all keys
};

/*
 * Complexity: What is the time complexity of the above functions?
    addNode: Constant O(1)
    contains: Linear O(n)
    removeNode: Linear O(n) // Worst case scenario, target node could be connected 
                               EVERY single node in graph.
    addEdge: Constant O(1)
    hasEdge: Constant O(1)
    removeEdge: Constant O(1)
    forEachNode: Linear O(n) // Depending on the cb. If cb requires ANOTHER iteration
                                of all nodes, then it can be Quadratic O(n^2).
 */


