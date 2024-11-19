function permutationSort(a) {
  let count = 0;
  if (isSorted(a)){
   return count.value;
  }
}

function permute(a,l,r,count){
  if (l===r){
    count.value++;
    if (isSorted(a)){
      return true;
    }
    return false;
}
  for (let i = l; i<=r; i++){
  count = permute(a, l + 1, r, count);
    if (isSorted(a)){
      return count;
    }
  }


function isSorted(a){
  for (let i =0; i < a.length; i++){
    if (a[i] > a[i + 1]){
      return false;
    }
  }
  return true;
}
    return 0;

