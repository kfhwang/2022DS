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
var str2="jlkj"
function bracketMatch(inputString){
    var bmStack = new Stack(inputString.length);

    //first char
    var index=0;
    var symbol = inputString.charAt(index);
    while(symbol != ""){
        //3 case
        if(symbol == "{" || symbol=="(" || symbol=="["){
            bmStack.push(symbol);
        }else if(symbol == "}" || symbol==")" || symbol=="]"){
            //pop
            if(bmStack.isEmpty()){
                //unmatch
                return "Unmatch";
            }else{
                var opening = bmStack.pop();
                if((symbol == "}" && opening=="{") || (symbol == ")" && opening=="(") || (symbol == "]" && opening=="[") ){
                    //match
                    
                }else{
                    //unmatch
                    return "Unmatch";
                }
            }
        }else{
            
        }
        index++;
        symbol = inputString.charAt(index);
    }
    if(bmStack.isEmpty())
         return "Match";
    else
        return "Unmatch";
}

console.log(bracketMatch(str));
console.log(bracketMatch(str2));

