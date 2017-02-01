class SuperArray extends Array {
  constructor() {
    super();
  }
  pop() {
    console.log('aw snap, crackle');
    super.pop();
  }
  push() {

  }
}


const list = new SuperArray();
list.push(1);
list.push(1)
console.log(list);
