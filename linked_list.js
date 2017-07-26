//write your code here

class makeNode {
  constructor (data) {
    this.id=data
    this.next=null
    return {id:this.id,next:this.next}
  }
}


class LinkedList {
  constructor (num) {
    this.num = num
  }

  test() {
    var current = null;
    var start = null;
    for (var i = 1; i <= this.num.length; i++) {
      if (start === null) {
        start = new makeNode(i)
        current = start
      } else {
        var newNode = new makeNode(i)
        current.next = newNode
        current = current.next
      }
      //console.log(JSON.stringify(start,null,2));
    }
    return start
  }

}

let test1 = new LinkedList([1,2,3,4,5,6,7,8,9]);
console.log(JSON.stringify(test1.test(),null,2));
