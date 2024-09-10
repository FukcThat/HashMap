export class Node {
  constructor(passedValue = null, passdeNextNode = null) {
    this.value = passedValue;

    this.next = passdeNextNode;
  }
}
