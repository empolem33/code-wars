// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grad

function getGrade (s1, s2, s3) {
    // Code here
    let grade = (s1+s2+s3)/3
    if (grade < 60){
      return 'F'
    }if (grade < 70){
      return 'D'
    }if (grade < 80){
      return 'C'
    }if (grade < 90){
      return 'B'
    }if (grade <= 100){
      return 'A'
    }
  }