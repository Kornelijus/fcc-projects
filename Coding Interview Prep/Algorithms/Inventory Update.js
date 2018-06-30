// Algorithms: Inventory Update
// Algorithm Description:
// https://learn.freecodecamp.org/coding-interview-prep/algorithms/inventory-update

const updateInventory = (arr1, arr2) => {
  let obj = {};

  [...arr1, ...arr2].map(i => {
    if (!obj[i[1]]) obj[i[1]] = 0;
    obj[i[1]] += i[0];
  });

  return Object.keys(obj)
    .map(key => [obj[key], key])
    .sort((a, b) => a[1].localeCompare(b[1]));
};

// Example:
//
// > updateInventory(
//   [
//     [21, 'Bowling Ball'],
//     [2, 'Dirty Sock'],
//     [1, 'Hair Pin'],
//     [5, 'Microphone']],
//   [
//     [2, 'Hair Pin'],
//     [3, 'Half-Eaten Apple'],
//     [67, 'Bowling Ball'],
//     [7, 'Toothpaste']
//   ]
// );
//
// [
//   [88, 'Bowling Ball'],
//   [2, 'Dirty Sock'],
//   [3, 'Hair Pin'],
//   [3, 'Half-Eaten Apple'],
//   [5, 'Microphone'],
//   [7, 'Toothpaste']
// ];
