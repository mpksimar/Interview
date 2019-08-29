function countApplesAndOranges(s, t, a, b, apples, oranges) {
    
    var applefalls = 0; 
    
    for (var i = 0; i < apples.length; i++){
        apples[i] = a + apples[i];
        if (apples[i] >= s && apples[i] <= t) {
            applefalls++;
        }
        
    } 
    var orangefalls = 0;
    
    for (var i = 0; i < oranges.length; i++){
        oranges[i] = b + oranges[i];
        if (oranges[i] >= s && oranges[i] <= t) {
            orangefalls++;
        } 
        
    }

    console.log(applefalls);
    console.log(orangefalls);
}
