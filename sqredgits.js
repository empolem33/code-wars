// take a number and squaer evvery digit

function squareDigits(num){
    //num is digits
    const arry=num.toString().split('')
    //split digits squers and put back return
    const sq = arry.map(x => x * x)
    return parseInt(sq.join(""))
  
  }