class Node {
	constructor(value, next = null) {
		this.value = value
		this.next = next
	}
}

class LinkedList {
	constructor(length) {
		this.list = this.generateLinkedList(length)
	}

	generateLinkedList(length) {
		let result;
		let temp;
		for (let i = 1; i <= length; i++) {
			if (result == null) {
				result = new Node(i)
				temp = result;
			} else {
				let nextNode = new Node(i)
				temp.next = nextNode
				temp = temp.next
			console.log(temp);
			}
		}
		return result
	}
}
let list = new LinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(list.getLength());
console.log(list.getHead());
console.log(list.getTail());
