'use strict';

function convertStringToMatrix(matrixString: string[]) {
  let matrixNumber = [];
  let matrixRows = matrixString.split('\n');
  matrixRows.forEach(row =>
    matrixNumber.push(row.split(' '))
  );
  return matrixNumber;
}