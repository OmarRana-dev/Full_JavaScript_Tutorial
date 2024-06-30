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

  preOrderTraversal(node) {
    if (node === null) return;

    console.log(node.value);

    this.preOrderTraversal(node.left);
    this.preOrderTraversal(node.right);
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

// Performing preorder traversal
tree.preOrderTraversal(tree.root);