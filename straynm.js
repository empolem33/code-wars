// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
    //create empty obj
    let nums = {}
   
    // loop nums and add to obj 
  for(const el of numbers){
    if(el in nums){
    nums[el]+=1
  }else{
    nums[el]=1
  }
    
    }
    //sort dictionary to find outlier
  return Number(Object.keys(nums).reduce((a, b) => nums[a] < nums[b] ? a : b))
  }
  
  
  stray([1, 1, 2])