const Node = (data) => {
  return {
    data: data,
    next: null,
  };
};

const LinkedList = (data = null) => {
  let head = data;

  const prepend = function (data) {
    let newNode = Node(data);
    let NodeElements = this.head;
    this.head = newNode;
    this.head.next = NodeElements;
  };

  const append = function (data) {
    const newNode = Node(data); // Assuming a Node constructor

    // If the list is empty, make the new node the head
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head; // Start from the head
    while (currentNode.next) {
      // Iterate until the last node
      currentNode = currentNode.next;
    }

    currentNode.next = newNode; // Append the new node at the end
  };

  const pop = function () {
    if (!this.head) {
      return `error the head is empty.`;
    }

    let node = this.head;
    if (!node.next) {
      console.log(head);
      this.head = null;
      return;
    }

    while (node.next.next) {
      node = node.next;
    }
    node.next = null;
  };

  const getSize = function () {
    let node = this.head;
    let count = 0;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  };

  const getHead = function () {
    return this.head;
  };

  const getTail = function () {
    let lastNode = this.head;
    while (lastNode.next) {
      lastNode = lastNode.next;
    }
    return lastNode;
  };

  const getAt = function (index) {
    let node = this.head;

    let count = 0;
    while (node.next) {
      if (count === index) {
        return node;
      } else {
        count++;
        node = node.next;
      }
    }
    if (index > count) {
      return `Not Avalibal. Please enter someting lower then ${
        count + 1
      }`;
    }
  };

  const isContains = function (value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.data === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  const find = function (value) {
    let currentNode = this.head;

    let count = 0;
    while (currentNode) {
      if (currentNode.data === value) {
        return `Data ${value} found at index: ${count}`;
      }
      count++;
      currentNode = currentNode.next;
    }
    return null;
  };

  const isString = function () {
    let currentNode = this.head;

    let stringValue = "";
    while (currentNode) {
      stringValue += `( ${currentNode.data} ) >> `;
      currentNode = currentNode.next;
    }
    stringValue += `null`;
    return stringValue;
  };

  const insertAt = function (value, index) {
    if (index < 0) {
      return this.head; // Invalid index: insert at the beginning
    }

    const newNode = Node(value); // Create a new node to insert

    if (index === 0) {
      let NodeElement = this.head;
      this.head = newNode;
      this.head.next = NodeElement;
      return;
    }

    let currentNode = this.head;
    let previousNode = null;
    let currentIndex = 0;

    while (currentNode && currentIndex < index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }

    if (currentIndex !== index) {
      return this.head; // Invalid index: insert at the end
    }

    previousNode.next = newNode; // Insert between previous and current nodes
    newNode.next = currentNode;
  };

  const removeAt = function (index) {
    if (index < 0) {
      return; // Invalid index: nothing to remove
    }

    if (index === 0) {
      return; // Remove the this.head
    }

    let currentNode = this.head;
    let previousNode = null;
    let currentIndex = 0;

    while (currentNode && currentIndex < index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }

    if (!currentNode) {
      return; // Invalid index: node not found
    }

    previousNode.next = currentNode.next; // Bypass the node to be removed
  };
  return {
    head,
    prepend,
    append,
    getSize,
    getHead,
    getTail,
    getAt,
    pop,
    isContains,
    find,
    isString,
    insertAt,
    removeAt,
  };
};

// Examples:

let node1 = Node(2);
let node2 = Node(3);
node1.next = node2;
let list = LinkedList(node1);

list.prepend(1);
list.prepend("hi");
list.append(4);
list.insertAt(5, 5);
list.removeAt(5);
list.pop();

console.log(list.getSize());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.getAt(4));
console.log(list.isContains(5));
console.log(list.find(4));
console.log(list.isString());

console.log(list.head);
