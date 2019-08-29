var anagramMappings = function(A, B) {
    var res=[];

    for(let i=0; i<A.length; i++){
        res.push(B.indexOf(A[i]));
        
    }
    return res;
};
