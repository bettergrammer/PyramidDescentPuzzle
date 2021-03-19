const assert = require('chai').assert;
let findCorrectPath = require('../findCorrectPath');

describe('Tests for findCorrectPath', function() {

  it('findCorrectPath should return correct path', function() {
    let input = `Target: 720
    2
    4,3
    3,2,6
    2,9,5,2
    10,5,2,15,5`;
    assert.equal(findCorrectPath(input), 'LRLL');
  });

  it('findCorrectPath should return correct path', function() {
    let input = `Target: 24
    1
    9,3
    9,0,2
    2,1,4,3`;
    assert.equal(findCorrectPath(input), 'RRL');
  });

  it('findCorrectPath should return correct path', function() {
    let input = `Target: 570240
    9
    1,2
    2,18,6
    7,7,11,2
    3,8,6,16,12
    2,5,7,3,10`;
    assert.equal(findCorrectPath(input), 'RLRRR');
  });

  it('findCorrectPath should return correct path when target is negative', function() {
    let input = `Target: -20736
    4
    -12,3
    3,6,16
    2,6,10,1
    8,24,3,15,6`;
    assert.equal(findCorrectPath(input), 'LLRL');
  });

  it('findCorrectPath should return undefined when target is not found', function() {
    let input = `Target: 9999999
    9
    1,2
    2,18,6
    7,7,11,2
    3,8,6,16,12`;
    assert.isUndefined(findCorrectPath(input));
  });

  it('findCorrectPath should return null when input is not a string', function() {
    let input = ['Target: 9999999',
    '9',
    '1','2',
    '2','18','6',
    '7','7','11','2',
    '3','8','6','16','12'];
    assert.isNull(findCorrectPath(input));
  });

});