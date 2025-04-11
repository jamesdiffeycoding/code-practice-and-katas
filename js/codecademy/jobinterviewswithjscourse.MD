# [Course structure](https://www.codecademy.com/enrolled/paths/pass-the-technical-interview-with-javascript) (and cheatsheets)

1. Getting started with data structures
   1. Why data structures? Data structure APIs
   2. [Nodes](https://www.codecademy.com/learn/paths/pass-the-technical-interview-with-javascript/tracks/getting-started-with-data-structures-js/modules/nodes-js/cheatsheet)
2. JS Linear Data Structures
   1. [Singly linked lists](https://www.codecademy.com/learn/paths/pass-the-technical-interview-with-javascript/tracks/javascript-linear-data-structures/modules/singly-linked-lists-js/cheatsheet)
   2. Doubly linked lists
   3. Practice with linked lists
   4. [Queues](https://www.codecademy.com/learn/paths/pass-the-technical-interview-with-javascript/tracks/javascript-linear-data-structures/modules/queues-js/cheatsheet)
   5. [Stacks](https://www.codecademy.com/learn/paths/pass-the-technical-interview-with-javascript/tracks/javascript-linear-data-structures/modules/stacks-js/cheatsheet)
3. [HashMaps](https://www.codecademy.com/learn/paths/pass-the-technical-interview-with-javascript/tracks/hash-maps-js/modules/hash-maps-js/cheatsheet)
4. Algorithmic Concepts
   1. [Recursion](https://www.codecademy.com/learn/paths/pass-the-technical-interview-with-javascript/tracks/asymptotic-notation-and-big-o-js/modules/recursion-js/cheatsheet): rationale, comparison with traversal
   2. [Asymptotic Notation](https://www.codecademy.com/learn/paths/pass-the-technical-interview-with-javascript/tracks/asymptotic-notation-and-big-o-js/modules/asymptotic-notation-js/cheatsheet): rationale, notation
5. Nonlinear data structures
   1. [Binary Search and Search Trees](https://www.codecademy.com/learn/paths/pass-the-technical-interview-with-javascript/tracks/nonlinear-data-structures-js/modules/binary-trees-and-search-trees-js/cheatsheet)
   2. [Heaps](https://www.codecademy.com/learn/paths/pass-the-technical-interview-with-javascript/tracks/nonlinear-data-structures-js/modules/heaps-js/cheatsheet)
6. Sorting Algorithms
   1. [Bubble sort](https://www.codecademy.com/learn/paths/pass-the-technical-interview-with-javascript/tracks/sorting-algorithms-js/modules/bubble-sort-js/cheatsheet)
   2. [merge sort](https://www.codecademy.com/learn/paths/pass-the-technical-interview-with-javascript/tracks/sorting-algorithms-js/modules/merge-sort-js/cheatsheet)
   3. [quicksort](https://www.codecademy.com/learn/paths/pass-the-technical-interview-with-javascript/tracks/sorting-algorithms-js/modules/quicksort-js/cheatsheet)
7. Interview prep and algoirthm practice
   1. [Technical interview skills](https://www.codecademy.com/learn/paths/pass-the-technical-interview-with-javascript/tracks/javascript-interview-prep-and-algorithm-practice/modules/technical-interview-skills/cheatsheet)
   2. JS Algoirthm Practice

[5. non-linear data structures](https://www.notion.so/5-non-linear-data-structures-11915e2a42b4807cb9b8c03de1b0244b?pvs=21)

- If you search through data in a linear way to find a match you will have a linear big O runtime of O(n)
- If you search through with binary search, you can reduce the runtime to O(log n).
- Binary search trees are a tree data structure where each element to the left must be ‘less’ than the parent node, and each element to the right must be greater. This makes searching more efficient. An example may be looking through a dictionary.
- In a binary search structure you want to look at the mid point first for efficiency. Find this by halving the right-most index.
- While the benefits of binary search are significant compared to linear search, it’s important to remember that the function will only work on sorted lists.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/400dac7f-edd8-4a0d-8ad4-c8f2ba01e8a6/cb2c7147-b94c-48da-b536-05db5d4d09cf/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/400dac7f-edd8-4a0d-8ad4-c8f2ba01e8a6/de49703a-6091-4ed5-b4c6-d21e49f5a27a/image.png)

- Nodes in binary search trees have depth values (1 at the top), a left pointer and a right pointer. Every child node is itself a binary tree
- Traversal methods include preorder (parent, left child, right child), inorder (left child, parent, right child, and postorder (left child, right child, parent)
  - Inorder gives elements ‘in size order’
  - Pre means parent first, post means parent after
- Depth first traversal goes straight down the bottom left initially (recursively going through nodes until this.left does not exist)
- Breadth first traversal takes one row at a time
- Some parents may not have left and right children

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/400dac7f-edd8-4a0d-8ad4-c8f2ba01e8a6/9851a859-774c-43cf-83fa-ad584eb806aa/image.png)
