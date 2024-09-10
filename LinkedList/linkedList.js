import { Node } from "./node.js";

export class LinkedList {
  constructor(passedHead = null, passedTail = null) {
    this.Head = passedHead;
    this.Tail = passedTail;
    this.Size = 0;
  }

  append = (value) => {
    const newNode = new Node(value);
    if (this.Head === null) {
      this.Head = newNode;
    } else {
      this.Tail.next = newNode;
    }
    this.Tail = newNode;
    this.Size++;
  };

  prepend = (value) => {
    const newNode = new Node(value);

    if (this.Head) {
      newNode.next = this.Head;
    } else {
      this.Tail = newNode;
    }
    this.Head = newNode;
    this.Size++;
  };

  size = () => {
    return this.Size;
  };

  head = () => {
    return this.Head;
  };

  tail = () => {
    return this.Tail;
  };

  at = (index) => {
    if (index > this.Size - 1) return "Index out of bounds";
    let currentNode = this.Head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  };

  pop = () => {
    if (!this.Head) return;
    if (this.Head === this.Tail) {
      this.Head = null;
      this.Tail = null;

      this.Size = 0;
    } else {
      let currentNode = this.Head;

      while (currentNode.next !== this.Tail) {
        currentNode = currentNode.next;
      }

      currentNode.next = null;
      this.Tail = currentNode;

      this.Size--;
    }
  };

  contains = (value) => {
    let currentNode = this.Head;

    while (currentNode !== null) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.next;
    }
    return false;
  };

  find = (value) => {
    let currentNode = this.Head;
    let currentIndex = 0;

    while (currentNode !== null) {
      if (currentNode.value === value) return currentIndex;

      currentNode = currentNode.next;
      currentIndex++;
    }
    return null;
  };

  toString = () => {
    let currentNode = this.Head;
    let string = "";

    while (currentNode !== null) {
      string = string + `( ${currentNode.value} ) -> `;
      currentNode = currentNode.next;
    }

    string = string + `null`;
    return string;
  };

  insertAt = (value, index) => {
    let currentNode = this.Head;
    let currentIndex = 0;
    let newNode = new Node(value);

    if (this.Size === 0) {
      this.append(value);
      return;
    }

    if (index === 0) {
      newNode.next = this.Head;
      this.Head = newNode;
      this.Size++;
      return;
    }

    if (index > this.Size) {
      this.append(value);
      return;
    }

    if (index === this.Size) {
      this.Tail.next = newNode;
      this.Tail = newNode;
      this.Size++;
      return;
    }

    while (currentNode !== null) {
      if (currentIndex === index - 1) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.Size++;
      }

      currentNode = currentNode.next;
      currentIndex++;
    }
  };

  removeAt = (index) => {
    let currentNode = this.Head;
    let currentIndex = 0;

    if (index === 0) {
      this.Head = this.Head.next;
      this.Size--;
      return;
    }

    if (index === this.Size - 1) {
      const newTail = this.at(index - 1);
      newTail.next = null;
      this.Tail = newTail;
      return;
    }

    while (currentNode !== null) {
      if (currentIndex === index - 1) {
        var nextNode = currentNode.next;
        currentNode.next = nextNode.next;

        this.Size--;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }
  };
}

// Remove At
