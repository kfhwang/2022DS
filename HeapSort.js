var ary=[30,48,21,5,25,17,37,6,51,28];
var ary2=[1,3.7,5,2,9];


function shiftDown(ary, current, end){
        while(current*2+1 <= end){
            var left = current*2+1;
            var right = current*2+2;
            var maxChild = left;
            if(right <= end && ary[right] > ary[left] ){
                maxChild = right;
            }

            if(ary[current] < ary[maxChild]){ 
                var temp = ary[current];
                ary[current] = ary[maxChild];
                ary[maxChild] = temp;

                current = maxChild;

            }else{
                break;
            }
        }
}

Array.prototype.shiftDown = function(current, end){
    while(current*2+1 <= end){
        var left = current*2+1;
        var right = current*2+2;
        //var maxChild = left;
        var minChild = left;
        if(right <= end && this[right] < this[left] ){
            minChild = right;
        }

        if(this[current] > this[minChild]){ 
            var temp = this[current];
            this[current] = this[minChild];
            this[minChild] = temp;

            current = minChild;

        }else{
            break;
        }
    }
}



Array.prototype.heapSort = function(){
    //construction
       //var internal = Math.floor(ary.length/2)-1;
       var internal =parseInt(this.length/2)-1;
       for (let current = internal; current >=0; current--) {
         this.shiftDown(current, this.length-1);
       }

       //sort
       for (let end = this.length-1; end >= 1; end--) {
         //exchange [0]<->[end]
          var temp = this[0];
          this[0] = this[end]
          this[end] = temp;
          this.shiftDown(0, end-1);
       }

}

function heapSort(ary){
       //construction
       //var internal = Math.floor(ary.length/2)-1;
       var internal =parseInt(ary.length/2)-1;
       for (let current = internal; current >=0; current--) {
         shiftDown(ary, current, ary.length-1);
       }

       //sort
       for (let end = ary.length-1; end >= 1; end--) {
         //exchange [0]<->[end]
          var temp = ary[0];
          ary[0] = ary[end]
          ary[end] = temp;
          shiftDown(ary, 0, end-1);
       }
}

//heapSort(ary);

ary.heapSort()