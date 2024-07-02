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
    this.fillRatio = 0.75; // Ratio to determine when to _resize the hash table
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
      this._resize();
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
        let tempNodeHolder = [];
        tempNodeHolder.push(currentNode.key);
        tempNodeHolder.push(currentNode.value);
        holder.push(tempNodeHolder);

        currentNode = currentNode.next;
      }

      if (holder.length > 0) key_value.push(holder);
    }
    return key_value;
  }

  clear() {
    const newHashMap = new HashTable();
    this.buckets = newHashMap.buckets;
  }
  _resize() {
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
hashTable.set("name", "Alice");
hashTable.set("age", "30");
hashTable.set("city", "New York");
hashTable.set("occupation", "Engineer");
hashTable.set("company", "TechCorp");
hashTable.set("hobby", "Photography");
hashTable.set("favoriteColor", "Blue");
hashTable.set("language", "English");
hashTable.set("country", "USA");
hashTable.set("email", "alice@example.com");
hashTable.set("email", "umar234@example.com");

hashTable.set("username", "alice123");
hashTable.set("password", "password123");
hashTable.set("phoneNumber", "555-1234");
hashTable.set("address", "123 Main St");
hashTable.set("zipCode", "10001");
hashTable.set("state", "NY");
hashTable.set("gender", "Female");
hashTable.set("maritalStatus", "Single");
hashTable.set("pet", "Dog");
hashTable.set("car", "Tesla");

hashTable.remove("maritalStatus");
// console.log(hashTable.has("state"));
// console.log(hashTable.get("email"));
// console.log(hashTable.length());
// console.log(hashTable.keys());
// console.log(hashTable.values());
// console.log(hashTable.entries());
// hashTable.clear()

// console.log(hashTable);
