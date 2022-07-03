//Write a function named setAlarm which receives two parameters. 
//The first parameter, employed, is true whenever you are employed 
//and the second parameter, vacation is true whenever you are on vacation.

function setAlarm(employed, vacation){
    if(employed && vacation || !employed && !vacation){
        return false
      }if(!employed && vacation){
          return false
        }else{
          return true
        }
      }
        
      
