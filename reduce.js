// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)


function getSum( a,b )
{
 let x=[a,b]
 x.sort(function(a, b) {
  return a - b;
})
a= x[0]
b= x[1]
var list = [];
for (var i = a; i <= b; i++) {
    list.push(i);
}

const sumWithInitial = list.reduce(
  (a, b) => a + b,
 0
)
return sumWithInitial
return total
}
getSum(1,15)