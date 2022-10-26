var capacity = 10;
var stack=[];

function push(data){
    if(stack.length<capacity){
        stack.push(data);
    }else{
        return "overflow";
    }
}

function pop(){
    if(stack.length>0){
        return stack.pop();
    }else{
        return "empty";
    }
}

push("A");
push("B");
push("C");
console.log(pop());
push("D");
push("E");
console.log(pop())
console.log(pop())
console.log(pop())
console.log(pop())
console.log(pop())

