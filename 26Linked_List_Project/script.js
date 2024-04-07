class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }

  at(index) {
    if (index < 0 || index >= this.size()) {
      return null;
    }
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        return current;
      }
      current = current.nextNode;
      count++;
    }
    return null;
  }

  pop() {
    if (!this.head) {
      return null;
    }
    if (!this.head.nextNode) {
      const value = this.head.value;
      this.head = null;
      this.tail = null;
      return value;
    }
    let current = this.head;
    while (current.nextNode.nextNode) {
      current = current.nextNode;
    }
    const value = current.nextNode.value;
    current.nextNode = null;
    this.tail = current;
    return value;
  }

  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    let result = "";
    let current = this.head;
    while (current) {
      result += `(${current.value}) -> `;
      current = current.nextNode;
    }
    result += "null";
    return result;
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size()) {
      return false; // Invalid index
    }
    if (index === 0) {
      this.prepend(value);
      return true;
    }
    if (index === this.size()) {
      this.append(value);
      return true;
    }
    const newNode = new Node(value);
    let current = this.head;
    let prev = null;
    let count = 0;
    while (count < index) {
      prev = current;
      current = current.nextNode;
      count++;
    }
    prev.nextNode = newNode;
    newNode.nextNode = current;
    return true;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      return null; // Invalid index
    }
    if (index === 0) {
      const value = this.head.value;
      this.head = this.head.nextNode;
      if (!this.head) {
        this.tail = null;
      }
      return value;
    }
    let current = this.head;
    let prev = null;
    let count = 0;
    while (count < index) {
      prev = current;
      current = current.nextNode;
      count++;
    }
    const value = current.value;
    prev.nextNode = current.nextNode;
    if (!prev.nextNode) {
      this.tail = prev;
    }
    return value;
  }
}

// let list = LinkedList().append(3);
// console.log(list);
console.log(LinkedList.size());
