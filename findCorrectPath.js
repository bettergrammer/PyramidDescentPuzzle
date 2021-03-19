let input = `Target: 720
2
4,3
3,2,6
2,9,5,2
10,5,2,15,5`;


function findCorrectPath(input) {
  let pyramid = input.split('\n');
  let target = Number(pyramid.shift().slice(8));
  pyramid = pyramid.map((str) => str.split(',').map((num) => Number(num)));

  function checkPaths(pyramid, target, lastProduct, lastRow = 0, lastIndex = 0, lastPath = '') {
    if (lastRow === pyramid.length - 2) {
      let row = pyramid[lastRow + 1];
      if (lastProduct * row[lastIndex] === target) {
        return lastPath + 'L';
      } else if (lastProduct * row[lastIndex + 1] === target) {
        return lastPath + 'R';
      }
      return;
    } else {
      let row = pyramid[lastRow + 1];
      return checkPaths(pyramid, target, lastProduct * row[lastIndex], lastRow + 1, lastIndex, lastPath + 'L') ||
      checkPaths(pyramid, target, lastProduct * row[lastIndex + 1], lastRow + 1, lastIndex + 1, lastPath + 'R');
    }
  };
  return checkPaths(pyramid, target, pyramid[0][0]);
};

console.log(findCorrectPath(input));