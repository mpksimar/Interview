function breakingRecords(scores) {
    var minVal = scores[0];
    var maxVal = scores[0];
    var countMax = 0;
    var countMin = 0;
   // var currentScore = 0;
    for (var i = 1; i < scores.length; i++){
        // var currentScore = scores[i];
        if (scores[i] > maxVal) {
            maxVal = scores[i];
            countMax++;
        } 
            //for (var i = 0; i < scores.length-1; i++){
            if (scores[i] < minVal) {
                minVal = scores[i];
                countMin++;
            }
         }
        return [countMax, countMin];
        
        
    } 
