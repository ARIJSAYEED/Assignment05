**What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**
Ans : getElementById is used to select only one element with unique id. getElementsByClassName is used to select multiple element with a common class name. querySelector is used to select the first match element with css selector, querySelectorAll select every element match with css selector.

**How do you create and insert a new element into the DOM?**
Ans : to create a new element i will use document.createElement(), and to insert it i will use .appendChild().

**What is Event Bubbling and how does it work?**
Ans : if we add an event in a child element, it will run first in there and then it will go to it's parent and then it will go to parent's parent and so on 

**What is Event Delegation in JavaScript? Why is it useful?**
Ans : Event Delegation is to put event on the parent and it handle all the children.

**What is the difference between preventDefault() and stopPropagation() methods?**
Ans : preventDefault() blocks default browser behavior and stopPropagation() blocks event bubbling.
