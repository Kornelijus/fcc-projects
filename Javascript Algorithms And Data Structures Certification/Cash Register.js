// JavaScript Algorithms and Data Structures Projects: Cash Register
// Project Description:
// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

const checkCashRegister = (price, cash, cid) => {
  const denom = [
    [100, 'ONE HUNDRED'],
    [20, 'TWENTY'],
    [10, 'TEN'],
    [5, 'FIVE'],
    [1, 'ONE'],
    [0.25, 'QUARTER'],
    [0.1, 'DIME'],
    [0.05, 'NICKEL'],
    [0.01, 'PENNY']
  ];

  let back = cash - price;
  let funds = cid.reduce((a, b) => a + b[1], 0.0);

  if (funds < back) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  } else if (funds == back) {
    return { status: 'CLOSED', change: cid };
  } else {
    cid = cid.reverse();
    let change = cid.reduce((a, v, i) => {
      let amount = Math.round((v[1] / denom[i][0]) * 100) / 100;
      let max = 0;

      for (let j = 1; j <= amount; j++) {
        let temp = denom[i][0] * j;

        if (temp <= back) {
          max = j;
        } else {
          break;
        }
      }

      if (max != 0) {
        back -= denom[i][0] * max;
        back = Math.round(back * 100) / 100;
        a.push([v[0], denom[i][0] * max]);
      }

      return a;
    }, []);

    let validchange = change.reduce((a, b) => a + b[1], 0.0);

    if (validchange < back) {
      return { status: 'INSUFFICIENT_FUNDS', change: [] };
    } else {
      return { status: 'OPEN', change };
    }
  }
};

// Example:
// > checkCashRegister(19.5, 20, [
//   ['PENNY', 1.01],
//   ['NICKEL', 2.05],
//   ['DIME', 3.1],
//   ['QUARTER', 4.25],
//   ['ONE', 90],
//   ['FIVE', 55],
//   ['TEN', 20],
//   ['TWENTY', 60],
//   ['ONE HUNDRED', 100]
// ]);
// {status: "OPEN", change: [["QUARTER", 0.5]]}
