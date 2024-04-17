class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null; // Reference to the next node in case of collisions
  }
}

class HashTable {
  constructor(numBuckets = 16) {
    this.buckets = new Array(numBuckets); // Create an array of buckets
    this.fillRatio = 0.75; // Ratio to determine when to resize the hash table
  }

  _hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % this.buckets.length;
  }

  set(key, value) {
    const index = this._hash(key);
    const newNode = new Node(key, value);

    // console.log(index);
    if (!this.buckets[index]) {
      this.buckets[index] = newNode;
    } else {
      let currentBucket = this.buckets[index];
      while (currentBucket.next && currentBucket.key !== key) {
        currentBucket = currentBucket.next;
      }
      if (currentBucket.key === key) {
        currentBucket.value = newNode.value;
      } else {
        currentBucket.next = newNode;
      }
    }

    if (this.getLoadFactor() > this.fillRatio) {
      this.resize();
    }
  }

  get(key) {
    const index = this._hash(key);
    let currentBucket = this.buckets[index];

    while (currentBucket) {
      if (currentBucket.key === key) {
        return currentBucket.value;
      }
      currentBucket = currentBucket.next;
    }

    return null;
  }

  has(key) {
    if (this.get(key)) {
      return true;
    } else {
      return false;
    }
  }

  remove(key) {
    const index = this._hash(key);
    let currentBucket = this.buckets[index];
    let previousNode = null;

    while (currentBucket) {
      if (currentBucket.key === key) {
        if (previousNode) {
          previousNode.next = currentBucket.next;
        } else {
          this.buckets[index] = currentBucket.next; // Remove from the head
        }
        return currentBucket.value;
      }
      previousNode = currentBucket;
      currentBucket = currentBucket.next;
    }

    return null;
  }

  length() {
    let countNode = 0;
    let bucketCount = 0;
    for (const bucket of this.buckets) {
      bucketCount++;
      let currentNode = bucket;
      while (currentNode) {
        countNode += 1;
        currentNode = currentNode.next;
      }
    }
    return `Buckets are ${bucketCount} & Nodes are ${countNode}`;
  }

  keys() {
    let keys = [];

    for (const bucket of this.buckets) {
      let holder = [];
      let currentNode = bucket;
      while (currentNode) {
        holder.push(currentNode.key);
        currentNode = currentNode.next;
      }

      if (holder.length > 0) keys.push(holder);
    }
    // console.log(keys);
    return keys;
  }

  values() {
    let values = [];

    for (const bucket of this.buckets) {
      let holder = [];
      let currentNode = bucket;
      while (currentNode) {
        holder.push(currentNode.value);
        currentNode = currentNode.next;
      }

      if (holder.length > 0) values.push(holder);
    }
    return values;
  }

  entries() {
    let key_value = [];

    for (const bucket of this.buckets) {
      let holder = [];
      let currentNode = bucket;
      while (currentNode) {
        holder.push(currentNode.key);
        holder.push(currentNode.value);
        currentNode = currentNode.next;
      }

      if (holder.length > 0) key_value.push(holder);
    }
    return key_value;
  }

  clear() {
    const newHashMap = new HashTable();
    this.buckets = newHashMap.buckets
  }
  resize() {
    const newSize = this.buckets.length * 2;
    const newHashMap = new HashTable(newSize);

    for (const bucket of this.buckets) {
      let currentNode = bucket;
      while (currentNode) {
        newHashMap.set(currentNode.key, currentNode.value);
        currentNode = currentNode.next;
      }
    }

    this.buckets = newHashMap.buckets;
  }

  getLoadFactor() {
    const filledBuckets = this.buckets.filter(
      (bucket) => bucket
    ).length;
    return filledBuckets / this.buckets.length;
  }
}

// Example usage
const hashTable = new HashTable();
hashTable.set("7nYR3", "T4dP1");
hashTable.set("4cLvK", "jI9sE");
hashTable.set("oF1UZ", "W0rPQ");
hashTable.set("8sGh6", "R2uYl");
hashTable.set("mXt3P", "nZ8eW");
hashTable.set("aJ6qN", "Y7kTm");
hashTable.set("p2rVX", "L0fHg");
hashTable.set("v9xEY", "F3jKu");
hashTable.set("cT7wR", "K5eNf");
hashTable.set("iP4dW", "B6mJq");
hashTable.set("rT2oA", "G1pCs");
// hashTable.set("q5uFJ", "X8hMb");
// hashTable.set("w7bKy", "D9oLv");
// hashTable.set("z9gZM", "I4vQr");
// hashTable.set("f8tHP", "A2sFd");
// hashTable.set("y3kDL", "C6lRo");
// hashTable.set("b6vTI", "H7eUz");
// hashTable.set("l0pBX", "U3rGa");
// hashTable.set("g1aPQ", "M5wKn");
// hashTable.set("e4oCY", "S9iLx");
// hashTable.set("t6mSQ", "E0dJy");
// hashTable.set("h9jRE", "V4bZt");
// hashTable.set("x2cLK", "O6qHi");
// hashTable.set("n5wJB", "Z1pUv");
// hashTable.set("j8lSF", "R3uGw");
// hashTable.set("u1eCN", "L5kYq");
// hashTable.set("k4iHP", "F7tNv");
// hashTable.set("s7tKU", "K2dAr");
// hashTable.set("d0uHA", "B9lYt");
// hashTable.set("q3dVN", "G4oEx");
// hashTable.set("w6rFG", "X1pJc");
// hashTable.set("r9gJB", "D7lUz");
// hashTable.set("f2qPL", "I5vRo");
// hashTable.set("v5wJL", "C9mKi");
// hashTable.set("o8yBR", "H1eDf");
// hashTable.set("x1cRF", "U7rZm");
// hashTable.set("z4oQP", "M9wHx");
// hashTable.set("a7wPE", "S2iLy");
// hashTable.set("m0nIK", "E4dJu");
// hashTable.set("b3mAK", "V9bWt");
// hashTable.set("p6lLE", "O5qHi");
// hashTable.set("c9dWF", "Z2pUv");

hashTable.clear();

hashTable.set("g2jYO", "R1uKw");
hashTable.set("h5tYU", "L4kXq");
hashTable.set("j7fSM", "F9tNv");
hashTable.set("l9uTQ", "K1dSr");
hashTable.set("n2hZP", "B7lMt");
hashTable.set("s4eMG", "G2oPx");
hashTable.set("i6kLT", "X5hNc");

// console.log(hashTable.length());
// console.log(hashTable.keys());
// console.log(hashTable.values());
// console.log(hashTable.entries());

console.log(hashTable);