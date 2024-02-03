const linkedList = require('./linked-lists');

const ll = new linkedList();
ll.append(10)
ll.append(20)
ll.append(30)
ll.append(40)
ll.append(50)
ll.append(60)
ll.insertAt(70, 3)

// ll.removeHead()

ll.removeAt(5);

ll.toString()


// let value = ll.find(70)

// console.log(value)