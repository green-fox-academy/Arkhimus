// Given a string, compute recursively a new string where all the 'x' chars have been removed.

'use strict'

function removeX(remove: string): string{
  if (remove.indexOf('x')=== -1){
    return remove;
  } else{
    return remove = removeX(remove.replace('x',''));
  }
}
console.log(removeX('xxxyyyxyxyxxxxyyyyyxyxyxyyy'));