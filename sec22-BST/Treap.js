class Node {
  constructor(
    _key,
    _size = 1,
    _left = null,
    _right = null,
    _priority = getRandomInt(1, 100)
  ) {
    this.key = _key;
    this.size = _size;
    this.right = _right;
    this.left = _left;
    this.priority = _priority;
  }
  setChild(Node, dir) {
    if (dir === "left" || dir === "right") {
      this[dir] = Node;
      calcSize();
    } else {
      return false;
    }
  }
  calcSize() {
    if (this.left) this.size += this.left.size;
    if (this.right) this.size += this.right.size;
  }
  getRandomInt(min, max) {
    // helper function
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
  }
}
// 이후 split, insert 작업이 필요
