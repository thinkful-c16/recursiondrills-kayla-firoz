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