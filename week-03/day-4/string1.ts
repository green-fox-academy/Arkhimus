// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

'use string'

function lowerReplace(ex: string): string {
  if (ex.indexOf('x') == -1){
    return ex;
  } else {
    return ex = lowerReplace(ex.replace('x','y'));
  }
}
console.log(lowerReplace('XXxXXXxxxxxXXX'));