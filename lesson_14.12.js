class Person {
    constructor(firstName, lastName, age, profession){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.profession = profession;
        this.lifeform = "human";
    }
    email(){
        return`${this.firstName}.${this.lastName}@gmail.com`
    }
}

let person1 = new Person("Joe", "Rogan", 53, "commentator")
console.log(person1, lifeform);


class Arr {
    constructor(){
        this.array = [];
    }

    push(value) {
    this.array = [...this.array, value];
  }
//   push(value) {
//     this.array[this.array.length] = value;
//     return this.array.length;
//   }

    pop() {
    if (this.array.length == 0)
      throw new Error("You can't remove items from an empty array");
    let element = this.array[this.array.length - 1];
    this.array = this.array.slice(0, this.array.length - 1);
    return element;
  }


  max() {
    if (this.array.length == 0)
      throw new Error("You can't remove items from an empty array");
    let max = this.array[0];
    for (let i = 1; i < this.array.length; i++) {
      if (this.array[i] > max) max = this.array[i];
    }
    return max;
  }

  min() {
    if (this.array.length == 0)
      throw new Error("You can't remove items from an empty array");
    let min = this.array[0];
    for (let i = 1; i < this.array.length; i++) {
      if (this.array[i] < min) min = this.array[i];
    }
    return min;
  }

   isEmpty() {
    if (this.array.length == 0)
      throw new Error("You can't remove items from an empty array");
  }

  shift() {
    let element = this.array[0];
    this.array = this.array.slice(1);
    return element;
  }

  shift() {
    return this.array.splice(0, 1)[0];
  }
}
let array1 = new Arr()
array1.push(10)
array1.push(20)
array1.pop();
console.log(array1.array);
console.log(array1.max());
console.log(array1.min());



class Leaf {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(value) {
    this.leaves = new Leaf(value);
  }

  addleaf(value) {
    let current = this.leaves;
    while (true) {
      if (value > current.value) {
        if (current.right != null) current = current.right;
        else {
          current.right = new Leaf(value);
          break;
        }
      } else {
        if (current.left != null) current = current.left;
        else {
          current.left = new Leaf(value);
          break;
        }
      }
    }
  }
}

let tree = new Tree(10);

tree.addleaf(15);
tree.addleaf(20);
tree.addleaf(12);
tree.addleaf(13);
console.log(tree.leaves);