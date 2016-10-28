/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

function calculatorModule () {
  var memory = 0;
  var total = 0;

  var calculator = {

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */

  load: function (x) {
    if (typeof x != "number"){
      throw new Error("Please enter a number");
    }
    total = x;
    return total;
  },

  /**
   * Return the value of `total`
   * @return { Number }
   */

  getTotal: function () {
    return total;
  },

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */

  add: function (y) {
    if (typeof y != "number"){
      throw new Error("Please enter a number");
    }
    total += y;
  },

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */

  subtract: function (q) {
    if (typeof q != "number"){
      throw new Error("Please enter a number");
    }
    total -= q;
  },

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */

  multiply: function (w) {
    if (typeof w != "number"){
      throw new Error("Please enter a number");
    }
    total *= w;
  },

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */

  divide: function (e) {
    if (typeof e != "number"){
      throw new Error("Please enter a number");
    }
    total /= e;
  },

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */

  recallMemory: function () {
    return memory;
  },

  /**
   * Stores the value of `total` to `memory`
   */

  saveMemory: function () {
    memory = total;
  },

  /**
   * Clear the value stored at `memory`
   */

  clearMemory: function () {
    memory = 0;
  }

  /**
   * Validation
   */

  };

  return calculator;

}
