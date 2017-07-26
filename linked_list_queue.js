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
      console.log(JSON.stringify(start,null,2));
    }
    return start
  }

}

let test1 = new LinkedList([1,2,3,4,5,6,7,8,9]);
console.log(JSON.stringify(test1.test(),null,2));

//
// class LinkedList {
//   constructor(arr) {
//     this.arr = arr
//     this.start = null
//     this.end = null
//     // var a = {x:20,y:30}
//     // var b = a;
//     // console.log(a.y);
//     // b.y=40
//     // console.log(a.y);
//     // console.log('tes');
//   }
//
//   makeNode(data) {
//     this.data=data
//     this.next=null
//   }
//
//   log() {
//     return this.arr
//   }
//
//   // getLength() {
//   //   return this.arr.length
//   // }
//   //
//   // getHead() {
//   //   return this.arr[0]
//   // }
//   //
//   // getTail() {
//   //   return this.arr[this.arr.length-1]
//   // }
//   //
//   // push(num) {
//   //   this.arr.push(num);
//   // }
//   //
//   // pop() {
//   //   return this.arr.pop();
//   // }
//
// }
//
// let list = new LinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(list.log());
// // console.log(list.getLength());
// // console.log(list.getHead());
// // console.log(list.getTail());
// //list.push(11);
// //list.pop();
