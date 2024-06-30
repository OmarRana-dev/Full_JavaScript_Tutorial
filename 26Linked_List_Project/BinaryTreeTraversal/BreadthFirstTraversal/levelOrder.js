class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  levelOrderTraversal() {
    if (this.root === null) return;

    const queue = [];
    queue.push(this.root);

    const values = [];

    while (queue.length > 0) {
      const currentNode = queue.shift();
      values.push(currentNode.value);

      if (currentNode.left !== null) queue.push(currentNode.left);
      if (currentNode.right !== null) queue.push(currentNode.right);
    }

    return values;
  }
}

const tree = new BinaryTree();
tree.root = new TreeNode(1);
tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(3);
tree.root.left.left = new TreeNode(4);
tree.root.left.right = new TreeNode(5);
tree.root.right.left = new TreeNode(6);
tree.root.right.right = new TreeNode(7);

// Performing Level Order Traversal
console.log(tree.levelOrderTraversal());
