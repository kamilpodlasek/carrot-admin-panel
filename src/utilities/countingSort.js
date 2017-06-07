export default function countingSort(array, key, order = 'DESC') {
  //const t0 = performance.now();

  const max = Math.max(...array.map(obj => obj[key]));
  if(max < 0) {
    return [];
  }

  let count;
  (count = []).length = max + 1;
  count.fill(0);

  for(let i = 0; i < array.length; i++) {
    count[array[i][key]] = count[array[i][key]] + 1;
  }

  let countSum = 0;
  for(let i = 0; i < count.length; i++) {
    countSum = countSum + count[i];
    count[i] = countSum;
  }

  let output = [];
  for(let i = 0; i < array.length; i++) {
    const outputPos = count[array[i][key]];
    const outputPosUpdated = (order === 'DESC') ? array.length - outputPos : outputPos - 1;
    output[outputPosUpdated] = array[i];
    count[array[i][key]] = outputPos - 1;
  }

  //const t1 = performance.now();
  //console.log('Sorting took', (t1 - t0).toFixed(4), 'milliseconds');

  return output;
};