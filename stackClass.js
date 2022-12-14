class Stack{
    constructor(_capacity){
        //check _capacity is Number
        this.capacity = _capacity;
        this.stack = [];
    }
    push = function(data){
        if(this.stack.length<this.capacity){
            this.stack.push(data);
        }else{
            return "overflow";
        }
    }
    isEmpty = function(){
        return this.stack.length<=0;
    }
    pop = function (){
        if(this.isEmpty()){
            return "empty";
        }else{
            return this.stack.pop();
        }
    }
}

var str="{a = (1 + v(b[3 + c[4]]));"


var myStack = new Stack(10);
myStack.push("A");
myStack.push("B");
myStack.push("C");
console.log(myStack.pop());
myStack.push("D");
myStack.push("E");
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.pop())