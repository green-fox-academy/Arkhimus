// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0


function divideNumber(element: number) {
  if (element === 0){
    return console.log('fail');
  }
  console.log(10/element);
}

divideNumber(0);