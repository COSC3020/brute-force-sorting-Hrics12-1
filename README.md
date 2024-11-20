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

The runtime complexity is going to be $O(n!*n)$ because the permute function makes all possible permutations in the array. Each time permute is called there is a swap of two elements and recurses. So this is the $n!$ part. The isSorted is $O(n)$ because it just scans the array.
So the best case is going to be linear $O(n)$ for n being the size of the array. The permutationSort function uses the isSorted function and the isSorted function returns true with permutationSort returning 0. This is because there is no need to generate permutations because the array is already sorted. The worst case is going to be $O(n!)$ if the array is not sorted abd the algorithm must make every permutation of the array and check if they're sorted.

https://www.geeksforgeeks.org/count-all-the-permutation-of-an-array/
https://www.geeksforgeeks.org/time-complexity-permutations-string/
https://www.geeksforgeeks.org/write-a-c-program-to-print-all-permutations-of-a-given-string/
https://stackoverflow.com/questions/39125471/why-time-complexity-of-permutation-function-is-on


"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."
