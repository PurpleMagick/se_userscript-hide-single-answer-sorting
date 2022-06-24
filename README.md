## StackExchange hide sorting for a single answer

A userscript that removes the sorting combobox in questions when there is only one answer available.

Before:

[![Before: with one answer to a question, the sorting dropdown is shown][1]][1]

After:

[![After: with one answer to a question, the sorting dropdown is not shown][2]][2]

For users who prefer a cleaner UI when the sorting technically does not make a difference

## Remarks

Deleted answers are not distinguished right now. If a user can see deleted answers, then the total count is taken. Deleted answers are always on the bottom, so for example, with 1 deleted 1 visible answers the total is two, which means the userscript will show the sorting menu but it will still not make sense to sort them.

## Installation
Install the userscript with: 
[direct link](https://github.com/PurpleMagick/se_userscript-hide-single-answer-sorting/raw/main/src/hide-single-answer-sorting.user.js) 

See the code on [GitHub](https://github.com/PurpleMagick/se_userscript-hide-single-answer-sorting/blob/main/src/hide-single-answer-sorting.user.js)

  [1]: https://github.com/PurpleMagick/se_userscript-hide-single-answer-sorting/raw/main/screenshot-before.png "Before: with one answer to a question, the sorting dropdown is shown"
  [2]: https://github.com/PurpleMagick/se_userscript-hide-single-answer-sorting/raw/main/screenshot-after.png "After: with one answer to a question, the sorting dropdown is not shown"
  
