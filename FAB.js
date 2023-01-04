function F(n){
    if(n<=0) return 0;
    if(n==1) return 1;
    return F(n-1)+F(n-2);
}

var f=[0,1];//only two elements: => [1,1] => [1,2] => [2,3] => [3,5]

function Fab(n){
   for(var i=2; i<=n; i++){
       f.push(f[i-1]+f[i-2]);
   }
   return f[n];
}


console.log(Fab(100));
console(JSON.stringify(f));