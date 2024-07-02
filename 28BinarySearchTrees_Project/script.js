class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  buildTree(array) {
    array = Array.from(new Set(array)).sort((a, b) => a - b);

    const balancedBinaryTree = (start, end) => {
      if (start > end) {
        return null;
      }

      const mid = Math.floor((start + end) / 2);
      const node = new Node(array[mid]);

      node.left = balancedBinaryTree(start, mid - 1);
      node.right = balancedBinaryTree(mid + 1, end);

      return node;
    };

    return balancedBinaryTree(0, array.length - 1);
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
      if (!node.right) return node.left;

      node.data = this.minValue(node.right);
      node.right = this.remove(node.data, node.right);
    }
    return node;
  }

  minValue(node) {
    let minValue = node.data;
    while (node.left !== null) {
      minValue = node.left.data;
      node = node.left;
    }
    return minValue;
  }

  find(value, node = this.root) {
    if (!node || node.data === value) {
      return node;
    }

    if (value < node.data) {
      return this.find(value, node.left);
    } else {
      return this.find(value, node.right);
    }
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

    this.postOrder(callback, node.left);
    this.postOrder(callback, node.right);

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

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    return 1 + Math.max(leftHeight, rightHeight);
  }

  isBalanced(node = this.root) {
    if (!node) {
      return true;
    }

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    if (Math.abs(leftHeight - rightHeight) > 1) {
      return false;
    }

    return this.isBalanced(node.left) && this.isBalanced(node.right);
  }

  rebalance() {
    const resultArray = this.inOrderTraversal();
    this.root = this.buildTree(resultArray);
  }

  inOrderTraversal(node = this.root, resultArray = []) {
    if (!node) return resultArray;

    this.inOrderTraversal(node.left, resultArray);
    resultArray.push(node.data);
    this.inOrderTraversal(node.right, resultArray);

    return resultArray;
  }
}

// Example usage:
const dataArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(dataArray);

console.log(tree.root); // Output the root node of the constructed tree
// console.log(tree.isBalanced());
// const dataArray = [];
// console.log(tree.insert(52));
// console.log(tree.find(4));
// console.log(tree.remove(4));

// tree.levelOrder((data) => console.log(data));
// console.log(tree.levelOrder());
// tree.preOrder();
// tree.inOrder();
// tree.postOrder();
// console.log(tree.height());
// console.log(tree.rebalance());