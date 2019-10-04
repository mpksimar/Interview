 Complete the reverseArray function below.
function reverseArray(a) {
     var i= 0;
        while(i<a.length-1){
            a.splice(i,0, a.pop());
            i++;
        }
        return a;
    


}
