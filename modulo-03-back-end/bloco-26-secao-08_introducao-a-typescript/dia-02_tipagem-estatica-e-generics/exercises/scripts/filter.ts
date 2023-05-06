type callbackFilter<T> = (value: T, index?: number, array?: T[]) => boolean;

function myFilter<T>(arr: T[], callback: callbackFilter<T>): T[] {
  const newArr: Array<T> = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

const numbersArr = [10, 5, 20];

const evenNumbersOnly = myFilter<number>(numbersArr, (element, index, array) => element % 2 === 0);
const oddNumbersOnly = myFilter<number>(numbersArr, (element, index, array) => element % 2 !== 0);

console.log(`Números pares: ${evenNumbersOnly}`);
console.log(`Números ímpares: ${oddNumbersOnly}`);