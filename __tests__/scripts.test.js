import { coinCounter } from '../src/js/CoinCounter.js';


describe("coinCounter", () => {
  test("it takes in a dollar amount and returns a string stating the amound broken up into change", () => {
    const changeResult = coinCounter(107);
    expect(changeResult).toEqual("Your change is 4 quarters, 0 dimes, 1 nickels, 2 pennies")
  });
});
