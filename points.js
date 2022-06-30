function points(games) {
    // your code here
  let total=0;
  games.forEach(item => {
  
    console.log(item[0])
           if (item[0]>item[2]){
         total +=3
      }else if(item[0]==item[2]){
          total += 1
      }
     console.log(total)
    })
    return total
  }