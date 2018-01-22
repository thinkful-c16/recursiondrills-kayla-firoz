'use strict';

//***COUNT SHEEP***//

//input == total sheep
//output == current sheep - 1 (countDown)

const countSheep = sheep => {
  if (sheep === 0) {
    return 'no sheep left';
  }

  console.log(`${sheep} - Another sheep jump over the fence`);
  return countSheep(sheep - 1);
};

console.log(countSheep(10));

//=====  DOUBLE ARRAY  =====

//let arr = [1,2,3];

function arrDbl(arr) {
  //let newArr;
  if (arr.length === 0) {
    return [];
  } else {
    //newArr = arr[0] * 2;
    return [arr[0] * 2, ...arrDbl(arr.slice(1))];
  }
}

console.log(arrDbl([1, 2, 3, 10, 20]));
