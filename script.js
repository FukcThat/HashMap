import { LinkedList } from "./LinkedList/linkedList.js";
import { Node } from "./LinkedList/node.js";

// Create hashmap Class
class HashMap {
  constructor(capacity) {
    this.buckets = Array(capacity);
    this.elementCount = 0;
  }

  // Create hash(key) function (has function with key as input)
  hash(key) {
    let hash = 0;
    const prime = 7;

    key = key.toString();

    for (let i = 0; i < key.length; i++) {
      hash = prime * hash + key.charCodeAt(i);
    }

    hash = hash % this.buckets.length;
    return hash;
  }

  // Create set(key, value) function
  set(key, value) {
    // get index
    let index = this.hash(key);

    // check if theres is nothing at that index
    if (this.buckets[index] === undefined) {
      // -> make a linkedList, set it to be at that index
      const newList = new LinkedList();
      this.buckets[index] = newList;
    }
    // loop through all nodes in index's linkedList, check if key is passed-key
    for (
      let node = this.buckets[index].head();
      node !== null;
      node = node.next
    ) {
      // -> update Value and return
      if (node.value.key === key) {
        node.value.value = value;
        return;
      }
    }
    // -> append key-value to linked list of that index
    this.buckets[index].append({ key, value });

    // iterate element count
    this.elementCount++;
  }

  // Create get(key) that returns the value assigned to that key, otherwise null
  get(key) {
    // get index
    let index = this.hash(key);

    // check if theres nothing at that index
    if (this.buckets[index] === undefined) return null;

    // else loop through nodes in that buckets (index's) LinkedList, check if the key matches
    for (let node = this.buckets[index].head(); node !== null; node.next) {
      if (node.value.key === key) {
        return node.value.value;
      }
      return null;
    }
  }

  // Create has(key) returns true if key is in hashmap. otherwise false
  has(key) {
    // get index
    let index = this.hash(key);

    // check if theres nothing at that index
    if (this.buckets[index] === undefined) return false;

    for (let node = this.buckets[index].head(); node !== null; node.next) {
      if (node.value.key === key) {
        return true;
      }
      return false;
    }
  }
}

// Testing
const test = new HashMap(10);
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
console.log(test.has("apple"));

// Create has(key) returns true if key is in hashmap. otherwise false
// remove(key), if key exists in hashmap, remove entry and return true, if key doesnt exist return false
// length() returns number of stored keys
// clear() removes all entries in hashmap
// keys() returns array containing all keys
// values() returns array containing all the values
// entries() returns array that contains each key-value pair
