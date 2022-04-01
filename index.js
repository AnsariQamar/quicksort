// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function sort(arr) {
  let left = [];
  let right = [];
  let temp = [];
  let pivotIdx = 0;
  let pivotValue = arr.shift();
  temp[pivotIdx] = pivotValue;
  if (arr.length == 0) {
    return temp;
  }
  for (let i = 0; i < arr.length; i++) {
    if (parseInt(arr[i]) < pivotValue) {
      left.push(arr[i]);
    } else if (parseInt(arr[i]) >= pivotValue) {
      right.push(arr[i]);
    }
  }
  const ans = sort(left).concat(temp, sort(right));
  if (ans[0] == undefined) {
    ans.shift();
  }
  if (ans[ans.length - 1] == undefined) {
    ans.pop();
  }
  return ans;
}

const a = sort([1, 8, 5, 7, 2, -1, 0]);
console.log(a);
