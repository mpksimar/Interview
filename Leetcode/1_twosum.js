var twoSum = function(nums, target) {
   var sum= [];
   for(let i=0; i<nums.length; i++){
       for(var j=i+1; j<nums.length; j++){
           if(nums[i]+ nums[j]== target){
               sum.push(i);
               sum.push(j);
           }
       }
   } 
    return sum;
};
