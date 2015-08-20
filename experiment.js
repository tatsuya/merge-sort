'use strict';

function sort(arr) {
  var len = arr.length;

  if (len < 2) {
    return arr;
  }

  var mid = parseInt(len / 2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid);

  return merge(sort(left), sort(right));
}

function merge(left, right) {
  var arr = [];

  var li = 0;
  var ri = 0;
  while (li < left.length && ri < right.length) {
    if (left[li] <= right[ri]) {
      arr.push(left[li]);
      li++;
    } else {
      arr.push(right[ri]);
      ri++;
    }
  }

  if (li < left.length) {
    arr = arr.concat(left.slice(li));
  }

  if (ri < right.length) {
    arr = arr.concat(right.slice(ri));
  }

  return arr;
}

module.exports = sort;