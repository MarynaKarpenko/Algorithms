class Leaf {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(value) {
    this.leaves = new Leaf(value);
  }

  addLeaf(value) {
    if (this.isLeaf(value))
      throw new Error("the current value is already here");
    let current = this.leaves;
    while (true) {
      if (value < current.value) {
        if (current.left == null) {
          current.left = new Leaf(value);
          break;
        } else current = current.left;
      } else {
        if (current.right == null) {
          current.right = new Leaf(value);
          break;
        } else current = current.right;
      }
    }
  }

  isLeaf(value) {
    let current = this.leaves;
    while (current != null) {
      if (value == current.value) return true;
      else if (value > current.value) current = current.right;
      else current = current.left;
    }

    return false;
  }

  removeLeaf(value) {
    if (!this.isLeaf(value)) throw new Error("the current value is not here");
    if (this.value == this.leaves)
      throw new Error("You can't remove the central element");
    while (true){
      if(value < current.value){
        if(value == current.left.value){
          current.leaves = null
          break
        } else {
          current = current.left;
        }
      } else {
        if (value == current.right.value) {
          current.right = null;
          break;
        } else {
          current = current.right;
        
        }
      }
    }
  }

  leafCount(current){
    if(current == null) return 0
    return 1 + this.leafCount(current.left) + this.leafCount(current.right)
  }

  treeHeight(current) {
    if (current == null) return 0;
    return (
      1 +
      Math.max(this.treeHeight(current.left), this.treeHeight(current.right))
    );
  }
  
}

let tree = new Tree(10);
tree.addLeaf(13);
tree.addLeaf(16);
tree.addLeaf(12);
tree.addLeaf(14);
tree.addLeaf(11);
