class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    this.root = buildTree(array);
  }

  insert(value, node = this.root) {
    if (!node) {
      return new Node(value);
    }

    if (value < node.data) {
      node.left = this.insert(value, node.left);
    } else if (value > node.data) {
      node.right = this.insert(value, node.right);
    }

    return node;
  }

  remove(value, node = this.root) {
    if (!node) {
      return node;
    }

    if (value < node.data) {
      node.left = this.remove(value, node.left);
    } else if (value > node.data) {
      node.right = this.remove(value, node.right);
    } else {
      if (!node.left) return node.right;
      else if (!node.right) return node.left;

      node.data = this.minValue(node.right);

      node.right = this.remove(node.data, node.right);
    }
    return node;
  }

  minValue(node) {
    let minv = node.data;
    while (node.left !== null) {
      minv = node.left.key;
      node = node.left;
    }
    return minv;
  }

  find(value, node = this.root) {
    if (node.data === value) {
      return node;
    }

    if (value < node.data) {
      return this.find(value, node.left);
    } else if (value > node.data) {
      return this.find(value, node.right);
    }

    return node;
  }

  levelOrder(callback) {
    if (!this.root) return;

    const result = [];
    const queue = [this.root];

    while (queue.length > 0) {
      const node = queue.shift();

      if (callback) {
        callback(node.data);
      } else {
        result.push(node.data);
      }

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    if (!callback) {
      return result;
    }
  }

  preOrder(callback, node = this.root) {
    if (!node) return;

    if (callback) {
      callback(node.data);
    } else {
      console.log(node.data);
    }

    this.preOrder(callback, node.left);
    this.preOrder(callback, node.right);
  }

  inOrder(callback, node = this.root) {
    if (!node) return;

    this.inOrder(callback, node.left);

    if (callback) {
      callback(node.data);
    } else {
      console.log(node.data);
    }

    this.inOrder(callback, node.right);
  }

  postOrder(callback, node = this.root) {
    if (!node) return;

    this.inOrder(callback, node.left);
    this.inOrder(callback, node.right);

    if (callback) {
      callback(node.data);
    } else {
      console.log(node.data);
    }
  }

  height(node = this.root) {
    if (!node) {
      return -1;
    }

    let leftArr = this.height(node.left);
    // console.log(leftArr);
    let rightArr = this.height(node.right);
    // console.log(rightArr);

    return 1 + Math.max(leftArr, rightArr);
  }

  isBalanced(node = this.root) {
    if (!node) {
      return true;
    }

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    // console.log(leftHeight + " " + rightHeight);
    if (Math.abs(leftHeight - rightHeight) > 1) {
      return false;
    }
    // console.log(Math.abs(leftHeight - rightHeight));

    return this.isBalanced(node.left) && this.isBalanced(node.right);
  }

  rebalance(tree = this.root) {
    const resultArray = [];
    inOrderTraversal(resultArray, tree); // Perform in-order traversal

    // Rebuild the tree with the sorted array
    const newTree = new Tree(resultArray);

    // Set the old tree's root to the new tree's root
    tree = newTree.root;
  }
}

function inOrderTraversal(resultArray, node) {
  if (!node) {
    return;
  }

  // Recur for left child
  inOrderTraversal(resultArray, node.left);

  // Add current node's data to result array
  resultArray.push(node.data);

  // Recur for right child
  inOrderTraversal(resultArray, node.right);
}

function buildTree(array) {
  array = Array.from(new Set(array)).sort((a, b) => a - b);

  // console.log(array);
  function balancedBinaryTree(start, end) {
    if (start > end) {
      return null;
    }

    const mid = Math.floor((start + end) / 2);
    const node = new Node(array[mid]);

    node.left = balancedBinaryTree(start, mid - 1);
    node.right = balancedBinaryTree(mid + 1, end);

    return node;
  }

  return balancedBinaryTree(0, array.length - 1);
}

// Example usage:
const dataArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
// const dataArray = [];
const tree = new Tree(dataArray);
// console.log(tree.insert(52));
console.log(tree.root); // Output the root node of the constructed tree
// console.log(tree.find(4));
// console.log(tree.remove(4));

// tree.levelOrder((data) => console.log(data));
// console.log(tree.levelOrder());
// tree.preOrder();
// tree.inOrder();
// tree.postOrder();
// console.log(tree.height());
// console.log(tree.rebalance());
console.log(tree.isBalanced());
