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
  delete(value, root = this.root) {
    if (root === null) return null;
    let current = root,
      previous = null,
      prevDir = null;
    while (true) {
      if (value < current.value) {
        previous = current;
        prevDir = "left";
        current = current.left;
      } else if (value > current.value) {
        previous = current;
        prevDir = "right";
        current = current.right;
      } else {
        if (!current.left && !current.right) {
          let ret = current.value;
          previous[prevDir] = null;
          return ret;
        } else if (!current.left && current.right) {
          let ret = current.value;
          previous[prevDir] = current.right;
          return ret;
        } else if (!current.right && current.left) {
          let ret = current.value;
          previous[prevDir] = current.left;
          return ret;
        } else {
          // either find the maximum of the left subtree or find the minimum of the right subtree to replace that node.
          let ret = current.value;
          let temp = this.findMin(current.right);
          current.value = temp.value;
          this.delete(temp.value, current.right);
          return ret;
        }
      }
    }
  }
  findMin(root) {
    //helper function
    while (root.left) {
      root = root.left;
    }
    return root;
  }
}

//          10
//      6        13
//    3   7   11   16
//  2  5
// 1  4
var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(13);
tree.insert(11);
tree.insert(3);
tree.insert(2);
tree.insert(1);
tree.insert(5);
tree.insert(4);
tree.insert(16);
tree.insert(7);
tree.insert(8);
tree.delete(3);
console.log(tree);
