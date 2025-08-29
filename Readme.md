1.Ans:getElementById → Gets one element by its id.

getElementsByClassName → Gets all elements with a class (HTMLCollection).

querySelector → Gets the first element matching a CSS selector.

querySelectorAll → Gets all elements matching a CSS selector (NodeList).

2.ans:You can create a new element using document.createElement(), then add content (like textContent or innerHTML) and insert it into the DOM using methods like appendChild(), append(), prepend(), or insertBefore().

3.ans:Event Bubbling is a way events propagate in the DOM. When an event occurs on an element, it first triggers on the target element and then bubbles up to its parent elements in the hierarchy until it reaches the document root.

4.ans:Why it’s useful:

Reduces memory usage by using fewer event listeners.

Works for dynamically added elements.

Simplifies code and maintenance.

5.ans:preventDefault(): Stops the browser’s default action for an event (e.g., preventing a form from submitting or a link from opening).

stopPropagation(): Stops the event from bubbling or capturing to parent/ancestor elements.