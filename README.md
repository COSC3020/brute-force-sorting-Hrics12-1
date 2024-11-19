# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.


So the best case is going to be if the array is already sorted because then the function would need the first and only permutation to check that the array is sorted. This would give the best case of $O(n)$ with $n$ being the length of the array
becasue the function still needs to check if the array is sorted.

The worst case would be if the array was sorted in decending order. The sorted array would end up being the last permutation that the function checks. It would need to generate all permutations giving it a worst case of $O(n!)$ this is super ineficient if the array is large. I believe if you generated the permutatioins randomly and without storing them the average would be $O(n * n!)$ because you need to generate $n!$ permutations before finding the sorted one. The number of permutations would be different for each run
and could be greater or less then $O(n*n!)$.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice

Source:
I used ChatGPT for help on the permute function
```
function permute(arr) {
    if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : [arr];
    return arr.reduce((acc, item, i) =>
        acc.concat(permute([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [item, ...val])), []);
}
```
https://gist.github.com/md2perpe/8210411
https://forum.freecodecamp.org/t/need-help-with-permutations/611512
