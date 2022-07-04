// Given a list of integers, determine whether the sum of its elements is odd or even.

function oddOrEven(array) {
    const sum = array.reduce((partialSum, a) => partialSum + a, 0);
    if(sum %2 == 0){
      return 'even'
    }else{
      return 'odd'
    }
  }

//   function oddOrEven(arr) {
//     return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
//   }