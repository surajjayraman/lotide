const middle = require('../middle');
const assert = require('chai').assert;
describe("#middle", () => {
  it("returns [] for [22]", () => {
    assert.deepEqual(middle([22]), []);
  });

  it("returns [] for [2, 2]", () => {
    assert.deepEqual(middle([2, 2]), []);
  });
  it("returns [2] for [1, 2, 32]", () => {
    assert.deepEqual(middle([1, 2, 32]), [2]);
  });
  it("returns [3] for [1, 2, 3, 45, 52]", () => {
    assert.deepEqual(middle([1, 2, 3, 45, 52]), [3]);
  });
  it("returns [3, 45] for [1, 2, 3, 45, 52, 65]", () => {
    assert.deepEqual(middle([1, 2, 3, 45, 52, 65]), [3, 45]);
  });
  it("returns [2, 3] for [1, 2, 3, 45]", () => {
    assert.deepEqual(middle([1, 2, 3, 45]), [2, 3]);
  });
});








