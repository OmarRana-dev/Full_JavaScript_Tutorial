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

  postOrderTraversal(node) {
    if (node === null) return;

    this.postOrderTraversal(node.left);
    this.postOrderTraversal(node.right);
    console.log(node.value);
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
tree.postOrderTraversal(tree.root);
