class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  contains(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  BFS() {
    var node = this.root,
      data = [],
      queue = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  DFSPreOrder() {
    var data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  DFSPostOrder() {
    var data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
  DFSInOrder() {
    var data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}

function makePostOrder(preArr, inArr, buffer) {
  let N = preArr.length;
  if (preArr.length == 0) return;
  let root = preArr[0]; // root of the (sub-)trees
  let L = inArr.findIndex((i) => i === root); // length of left side
  let R = N - L - 1; // length of right side

  let pre1 = preArr.slice(1, L + 1);
  let in1 = inArr.slice(0, L);

  let pre2 = preArr.slice(L + 1, N);
  let in2 = inArr.slice(L + 1, N);
  makePostOrder(pre1, in1, buffer);
  makePostOrder(pre2, in2, buffer);
  buffer.push(root);
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.insert(17);
tree.insert(5);
tree.insert(30);
let preO = tree.DFSPreOrder();
let postO = tree.DFSPostOrder();
let InO = tree.DFSInOrder();
console.log("pre: ", preO);
console.log("in: ", InO);
console.log("post: ", postO);
let data = [];
makePostOrder(preO, InO, data);
console.log("data: ", data);

/*

pre:  (9) [10, 6, 3, 5, 8, 15, 20, 17, 30]
in:  (9) [3, 5, 6, 8, 10, 15, 17, 20, 30]
post:  (9) [5, 3, 8, 6, 17, 30, 20, 15, 10]
data:  (9) [5, 3, 8, 6, 17, 30, 20, 15, 10]

*/
