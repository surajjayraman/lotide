//returns everything except for the first item (head) of the provided array.
const tail = (input) => {
  const tailArr = input.slice(1);
  return tailArr;
};

module.exports = tail;