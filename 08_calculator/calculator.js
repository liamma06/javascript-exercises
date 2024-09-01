const add = function(first,second) {
  return(first+second);
};

const subtract = function(first,second) {
	return(first-second);
};

const sum = function(array) {
  return array.reduce((sum,current)=> current + sum,0);
};

const multiply = function(array) {
  return array.reduce((multi,current)=> multi*current,1);
};

const power = function(first,second) {
	return Math.pow(first,second);
};

const factorial = function(num) {
	if(num == 0) return 1;
  
  let result = 1;

  for(i = num; i > 0; i --){
    result *= i
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
