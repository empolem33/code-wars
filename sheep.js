//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(ap) {
    // TODO May the force be with you
    function wrd(val){
      return val == true
    }
    const result = ap.filter( wrd);
    return result.length
  
  }