
(async function () {
    const module = await import("./moduleTest.mjs");
    const sum = module.add(2, 3);
    console.log(sum);
})();

///////////////////////////////////////////////////////////////

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = numbers.filter(number => number % 2 === 0);
console.log(oddNumbers)


