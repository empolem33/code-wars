// Given a list of integers, determine whether the sum of its elements is odd or even.

function oddOrEven(array) {
    const sum = array.reduce((partialSum, a) => partialSum + a, 0);
    if(sum %2 == 0){
      return 'even'
    }else{
      return 'odd'
    }
  }