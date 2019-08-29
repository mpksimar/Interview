var numJewelsInStones = function(J, S) {
    var count=0;
    for(st of S){
        if(J.search(st)>=0){
            count= count +1;
        }
       
    }
     return count;
};
