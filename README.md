# DOM_in_JS
from pathlib import Path

content = r'''# JavaScript DOM — Complete Learning Notes

> A beginner-friendly revision guide to the **Document Object Model (DOM)** with simple explanations, runnable examples, practice tasks, and mini-projects.

## Table of Contents

1. [What is the DOM?](#1-what-is-the-dom)
2. [Set Up Your First DOM Program](#2-set-up-your-first-dom-program)
3. [The Four Practical Pillars of DOM](#3-the-four-practical-pillars-of-dom)
4. [Selecting HTML Elements](#4-selecting-html-elements)
5. [Changing Text, HTML, Styles, and Attributes](#5-changing-text-html-styles-and-attributes)
6. [Events in JavaScript](#6-events-in-javascript)
7. [Bulb ON/OFF: One Button, Two States](#7-bulb-onoff-one-button-two-states)
8. [Selecting Multiple Elements](#8-selecting-multiple-elements)
9. [`setTimeout()`](#9-settimeout)
10. [`setInterval()`](#10-setinterval)
11. [Creating and Removing Elements](#11-creating-and-removing-elements)
12. [CSS Classes with `classList`](#12-css-classes-with-classlist)
13. [DOM Quick Revision Sheet](#13-dom-quick-revision-sheet)
14. [Practice Questions](#14-practice-questions)
15. [Mini-Projects](#15-mini-projects)
16. [Recommended Learning Order](#16-recommended-learning-order)

---

## 1. What is the DOM?

**DOM** stands for **Document Object Model**.

The browser reads HTML and creates a tree-like representation of the page. JavaScript can use this representation to find, update, add, and remove elements.

Think of a webpage like a house:

- **HTML** — the structure (rooms, doors, windows).
- **CSS** — the appearance (paint, decoration, layout).
- **JavaScript** — the behavior (what happens when someone interacts).
- **DOM** — the browser's object-based representation of the HTML page that JavaScript can work with.

For example, JavaScript can change a heading after a button click without reloading the page.

### Simple example

```html
<h1 id="title">Hello, World!</h1>
<button id="changeButton">Change Heading</button>

<script>
  const title = document.getElementById("title");
  const button = document.getElementById("changeButton");

  button.addEventListener("click", function () {
    title.textContent = "DOM is working!";
  });
</script>
```

**What happens?**

1. The browser displays the heading and button.
2. `getElementById()` finds the heading and button.
3. `addEventListener()` waits for a click.
4. `textContent` updates the heading text.

**Key idea:** The DOM connects JavaScript to the webpage.

---

## 2. Set Up Your First DOM Program

Create a file named `index.html` and paste this complete example into it. Open the file in a browser.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOM Learning</title>
</head>
<body>
  <h1 id="heading">Hello, World!</h1>
  <p id="message">I am learning JavaScript DOM.</p>
  <button id="myButton">Click Me</button>

  <script>
    const heading = document.getElementById("heading");
    const button = document.getElementById("myButton");

    button.addEventListener("click", function () {
      heading.textContent = "DOM is working!";
    });
  </script>
</body>
</html>
```

### Run it

1. Create a folder, for example `JavaScript-DOM`.
2. Create `index.html` inside that folder.
3. Paste the code and save the file.
4. Double-click `index.html` to open it in a browser.
5. Click **Click Me** and observe the heading.

### Code breakdown

| Code | Meaning |
|---|---|
| `document` | Represents the current HTML document in the browser. |
| `getElementById("heading")` | Finds the element whose ID is `heading`. |
| `addEventListener("click", ...)` | Runs a callback when the button is clicked. |
| `textContent` | Reads or changes an element's text. |

---

## 3. The Four Practical Pillars of DOM

This guide groups DOM skills into four useful pillars. This is a learning framework, not an official standardized list.

### Pillar 1 — Select elements

Find the HTML element you want to work with.

```js
const title = document.querySelector("#title");
```

### Pillar 2 — Change elements

Update text, styles, attributes, or classes.

```js
title.textContent = "Welcome!";
title.style.color = "blue";
```

### Pillar 3 — Handle events

Run code when a user clicks, types, submits a form, or performs another action.

```js
button.addEventListener("click", function () {
  console.log("Button clicked!");
});
```

### Pillar 4 — Add or remove elements

Create elements and place them in the page, or remove existing ones.

```js
const item = document.createElement("li");
item.textContent = "Learn DOM";
document.querySelector("ul").appendChild(item);
```

Most beginner DOM projects combine these four skills.

---

## 4. Selecting HTML Elements

Before changing an element, JavaScript needs to find it.

### A. `getElementById()`

Use this when you know the element's ID.

```html
<h1 id="title">My Website</h1>

<script>
  const title = document.getElementById("title");
  console.log(title);
</script>
```

### B. `querySelector()`

Returns the **first** element matching a CSS selector.

```js
const title = document.querySelector("#title");  // ID
const firstItem = document.querySelector(".item"); // Class
const firstParagraph = document.querySelector("p"); // Tag
```

### C. `querySelectorAll()`

Returns a static `NodeList` containing all elements matching a CSS selector.

```html
<p class="message">First</p>
<p class="message">Second</p>
<p class="message">Third</p>

<script>
  const messages = document.querySelectorAll(".message");

  messages.forEach(function (item) {
    console.log(item.textContent);
  });
</script>
```

### Comparison

| Method | Result |
|---|---|
| `getElementById("title")` | One element by ID |
| `querySelector(".item")` | First matching element |
| `querySelectorAll(".item")` | All matching elements in a static `NodeList` |

**Common mistake:** Use `#` for IDs and `.` for classes inside CSS selectors.

```js
document.querySelector("#title"); // ID
document.querySelector(".title"); // Class
```

---

## 5. Changing Text, HTML, Styles, and Attributes

### A. Change text with `textContent`

```html
<h2 id="heading">Old Text</h2>

<script>
  const heading = document.getElementById("heading");
  heading.textContent = "New Text";
</script>
```

### B. Read an input's value

```html
<input id="nameInput" placeholder="Enter your name">
<button id="showButton">Show Name</button>
<p id="output"></p>

<script>
  const input = document.getElementById("nameInput");
  const button = document.getElementById("showButton");
  const output = document.getElementById("output");

  button.addEventListener("click", function () {
    output.textContent = input.value;
  });
</script>
```

- `input.value` gives the value typed into an input.
- `textContent` changes the paragraph's text.

### C. Change inline CSS

```js
heading.style.color = "blue";
heading.style.backgroundColor = "lightyellow";
heading.style.fontSize = "32px";
```

In JavaScript style properties, CSS names such as `background-color` use camelCase: `backgroundColor`.

### D. Change an attribute

```html
<img id="photo" src="old.jpg" alt="Old description">

<script>
  const photo = document.getElementById("photo");

  photo.setAttribute("alt", "A landscape");
  photo.setAttribute("src", "landscape.jpg");
</script>
```

The image file must exist at the specified path for it to display.

### `textContent` vs `innerHTML`

```js
element.textContent = "<strong>Hello</strong>";
```

This displays the tags as ordinary text.

```js
element.innerHTML = "<strong>Hello</strong>";
```

This interprets the string as HTML and displays **Hello** in bold.

**Security tip:** Do not insert untrusted user input with `innerHTML`; it can create cross-site scripting (XSS) vulnerabilities. Prefer `textContent` for ordinary text.

---

## 6. Events in JavaScript

An **event** is an action or occurrence the browser can respond to.

| Event | Meaning |
|---|---|
| `click` | The user clicks an element. |
| `dblclick` | The user double-clicks an element. |
| `mouseover` | The pointer moves over an element. |
| `mouseout` | The pointer leaves an element. |
| `input` | An input's value changes as the user edits it. |
| `change` | A form control's value is committed/changed. |
| `keydown` | A keyboard key is pressed. |
| `submit` | A form is submitted. |

### Example: multiple events on the same button

```html
<h2 id="title">Learn JavaScript</h2>
<button id="btn">Interact with Me</button>

<script>
  const title = document.getElementById("title");
  const btn = document.getElementById("btn");

  btn.addEventListener("click", function () {
    title.textContent = "Button clicked!";
  });

  btn.addEventListener("mouseover", function () {
    title.style.color = "blue";
  });

  btn.addEventListener("mouseout", function () {
    title.style.color = "black";
  });
</script>
```

One element can have multiple listeners. Each listener responds to its specified event.

### Example: live input

```html
<input id="nameInput" placeholder="Type your name">
<p id="output">Your name will appear here.</p>

<script>
  const input = document.getElementById("nameInput");
  const output = document.getElementById("output");

  input.addEventListener("input", function () {
    output.textContent = input.value;
  });
</script>
```

**Try it:** Type slowly and observe how the paragraph updates without needing a button.

---

## 7. Bulb ON/OFF: One Button, Two States

This example teaches **state**, a value that remembers the current condition.

```html
<h2 id="status">Bulb is OFF</h2>
<button id="toggleBtn">Turn ON</button>

<script>
  const status = document.getElementById("status");
  const button = document.getElementById("toggleBtn");

  let isOn = false;

  button.addEventListener("click", function () {
    isOn = !isOn;

    if (isOn) {
      status.textContent = "Bulb is ON";
      button.textContent = "Turn OFF";
    } else {
      status.textContent = "Bulb is OFF";
      button.textContent = "Turn ON";
    }
  });
</script>
```

### Understand the logic

1. `let isOn = false` means the initial state is OFF.
2. `isOn = !isOn` reverses the Boolean value.
3. `if (isOn)` checks whether the new state is ON.
4. The `if/else` updates the status and button label.

| Before click | After click |
|---|---|
| `false` | `true` |
| `true` | `false` |

This same pattern is useful for dark mode, password visibility, menus, accordions, and play/pause buttons.

---

## 8. Selecting Multiple Elements

Use `querySelectorAll()` when you need to work with several elements at once.

```html
<p class="message">First paragraph</p>
<p class="message">Second paragraph</p>
<p class="message">Third paragraph</p>
<button id="changeBtn">Change All</button>

<script>
  const messages = document.querySelectorAll(".message");
  const button = document.getElementById("changeBtn");

  button.addEventListener("click", function () {
    messages.forEach(function (item) {
      item.style.color = "blue";
    });
  });
</script>
```

### Understand `forEach()`

```js
messages.forEach(function (item) {
  item.style.color = "blue";
});
```

Read it as: **For each item in `messages`, change its text color to blue.**

- `messages` — the collection of selected paragraphs.
- `item` — the current paragraph during one iteration.
- `forEach()` — calls the function for each item.

### Important detail

`querySelectorAll()` returns a **static `NodeList`**. If new matching elements are created later, the original collection does not automatically include them.

---

## 9. `setTimeout()`

`setTimeout()` schedules a function to run once after a delay.

### Example: show a welcome message after three seconds

```html
<h2 id="message">Please wait...</h2>

<script>
  const message = document.getElementById("message");

  setTimeout(function () {
    message.textContent = "Welcome to JavaScript!";
  }, 3000);
</script>
```

### How it works

- `setTimeout()` schedules the callback function.
- `3000` means 3,000 milliseconds, or 3 seconds.
- The message changes after the delay, once the callback runs.

### Cancel a timeout

```js
const timer = setTimeout(function () {
  console.log("Task executed");
}, 5000);

// Cancel before it executes:
clearTimeout(timer);
```

`clearTimeout(timer)` cancels the scheduled callback if it has not already run.

**Common uses:** delayed notifications, temporary messages, popups, and delaying a search action until typing pauses.

---

## 10. `setInterval()`

`setInterval()` schedules a function to run repeatedly at an interval until it is cancelled.

### Example: digital clock

```html
<h2 id="clock"></h2>

<script>
  const clock = document.getElementById("clock");

  function updateClock() {
    clock.textContent = new Date().toLocaleTimeString();
  }

  updateClock();

  setInterval(updateClock, 1000);
</script>
```

### How it works

- `new Date()` gets the current date and time.
- `toLocaleTimeString()` formats the time for display.
- `updateClock()` updates the heading.
- `setInterval(updateClock, 1000)` schedules updates approximately every second.

### Stop an interval

```js
let count = 0;

const timer = setInterval(function () {
  count++;
  console.log(count);

  if (count === 5) {
    clearInterval(timer);
    console.log("Timer stopped!");
  }
}, 1000);
```

The callback increments `count` until it reaches 5, then clears the interval.

### `setTimeout()` vs `setInterval()`

| Feature | `setTimeout()` | `setInterval()` |
|---|---|---|
| Behavior | Runs once after a delay | Repeats at intervals |
| Cancel with | `clearTimeout(id)` | `clearInterval(id)` |
| Example | Show a message later | Update a clock |

**Important:** Timers are not exact clocks. Browser scheduling can delay callbacks, so an interval of 1,000 ms does not guarantee execution at precisely each second.

---

## 11. Creating and Removing Elements

### A. Create and append an element

```html
<ul id="taskList"></ul>

<script>
  const list = document.getElementById("taskList");

  const item = document.createElement("li");
  item.textContent = "Learn JavaScript DOM";

  list.appendChild(item);
</script>
```

- `createElement("li")` creates a new list item.
- `textContent` sets its text.
- `appendChild(item)` adds it to the list.

### B. Remove an element

```js
const item = document.querySelector("li");

if (item) {
  item.remove();
}
```

This removes the first matching list item, if one exists.

### C. Add an item when a button is clicked

```html
<input id="taskInput" placeholder="Enter a task">
<button id="addBtn">Add Task</button>
<ul id="taskList"></ul>

<script>
  const input = document.getElementById("taskInput");
  const addBtn = document.getElementById("addBtn");
  const list = document.getElementById("taskList");

  addBtn.addEventListener("click", function () {
    const task = input.value.trim();

    if (task === "") {
      return;
    }

    const item = document.createElement("li");
    item.textContent = task;
    list.appendChild(item);

    input.value = "";
  });
</script>
```

**Logic:**

1. Read the input value.
2. Use `trim()` to remove whitespace at the beginning and end.
3. If the input is empty, stop.
4. Create a list item and set its text.
5. Append the item to the list.
6. Clear the input field.

This is the foundation of a to-do list project.

---

## 12. CSS Classes with `classList`

`classList` lets JavaScript add, remove, toggle, and check CSS classes.

```html
<style>
  .active {
    color: white;
    background-color: darkblue;
    padding: 10px;
  }
</style>

<p id="text">Hello!</p>
<button id="toggleBtn">Toggle Style</button>

<script>
  const text = document.getElementById("text");
  const button = document.getElementById("toggleBtn");

  button.addEventListener("click", function () {
    text.classList.toggle("active");
  });
</script>
```

### Useful methods

```js
element.classList.add("active");       // Add a class
element.classList.remove("active");    // Remove a class
element.classList.toggle("active");    // Add if absent; remove if present
element.classList.contains("active");  // Check whether class exists
```

Prefer classes for reusable styling rather than repeatedly assigning many inline CSS properties.

---

## 13. DOM Quick Revision Sheet

| Requirement | JavaScript |
|---|---|
| Select by ID | `document.getElementById("id")` |
| Select first matching element | `document.querySelector(".class")` |
| Select all matching elements | `document.querySelectorAll(".class")` |
| Read or change text | `element.textContent` |
| Read an input | `input.value` |
| Change inline style | `element.style.color = "blue"` |
| Add an event listener | `element.addEventListener("click", fn)` |
| Create an element | `document.createElement("p")` |
| Add a child | `parent.appendChild(child)` |
| Remove an element | `element.remove()` |
| Toggle a class | `element.classList.toggle("active")` |
| Run once after a delay | `setTimeout(fn, 1000)` |
| Cancel a timeout | `clearTimeout(id)` |
| Repeat at intervals | `setInterval(fn, 1000)` |
| Cancel an interval | `clearInterval(id)` |

---

## 14. Practice Questions

Try to solve each question yourself before looking up a solution.

### Beginner

- [ ] Select a heading by ID and print it to the console.
- [ ] Change a paragraph's text when a button is clicked.
- [ ] Change a heading's color when the mouse enters it.
- [ ] Display input text live inside a paragraph.
- [ ] Select all elements with a class and change their color.

### Intermediate

- [ ] Build a bulb ON/OFF toggle using a Boolean variable.
- [ ] Add a new list item when a user clicks a button.
- [ ] Remove a list item when another button is clicked.
- [ ] Display a message after three seconds with `setTimeout()`.
- [ ] Stop an interval after a counter reaches five.
- [ ] Toggle a CSS class when a button is clicked.

### Challenge yourself

For every problem, explain these four steps in your own words:

1. **Select:** Which HTML elements do I need?
2. **State/data:** What value do I need to read or remember?
3. **Event:** What action starts the code?
4. **Update:** What should change on the page?

This process helps you build problem-solving skills rather than memorizing programs.

---

## 15. Mini-Projects

### Project 1 — Bulb controller

**Concepts:** Boolean state, `if/else`, click event, text updates.

- [ ] Create an ON/OFF button.
- [ ] Track the bulb's state with a Boolean variable.
- [ ] Update the button text and bulb appearance.

### Project 2 — To-do list

**Concepts:** Input values, `createElement()`, `appendChild()`, `remove()`.

- [ ] Add a task.
- [ ] Reject empty tasks.
- [ ] Add a delete button to each task.
- [ ] Clear the input after adding a task.

### Project 3 — Countdown timer

**Concepts:** `setInterval()`, `clearInterval()`, click events.

- [ ] Add Start, Pause, and Reset buttons.
- [ ] Display the remaining time.
- [ ] Stop the timer when it reaches zero.
- [ ] Prevent multiple intervals from running simultaneously.

### Project 4 — Live character counter

**Concepts:** `input` event, `.value`, `textContent`.

- [ ] Create a text area.
- [ ] Display the current character count.
- [ ] Display the remaining characters for a chosen limit.
- [ ] Show a warning when the limit is reached.

---

## 16. Recommended Learning Order

Follow this order for the best results:

1. Understand what the DOM is and how the browser represents HTML.
2. Practise selecting elements.
3. Change text, styles, classes, and attributes.
4. Learn click, input, mouse, and keyboard events.
5. Practise `querySelectorAll()` with `forEach()`.
6. Learn to create, append, and remove elements.
7. Understand `setTimeout()` and `setInterval()`.
8. Build the four mini-projects without copying the solutions.
9. Explain your code aloud as interview practice.

### Final reminder

**Do not just read the code—type it, run it, modify it, and explain it.**

When you can solve a problem using the four questions—select, state/data, event, and update—you are developing the logic needed to build interactive websites.

---

**Suggested repository structure**

```text
JavaScript-DOM/
├── README.md
├── 01-dom-introduction/
│   └── index.html
├── 02-selecting-elements/
│   └── index.html
├── 03-dom-events/
│   └── index.html
├── 04-bulb-toggle/
│   └── index.html
├── 05-multiple-elements/
│   └── index.html
├── 06-set-timeout/
│   └── index.html
├── 07-set-interval/
│   └── index.html
└── projects/
    ├── todo-list/
    ├── countdown-timer/
    └── character-counter/
```

Keep each topic in its own file as you practise. This makes it easier to revise one concept at a time and track your progress on GitHub.
'''
path = Path("/mnt/data/README.md")
path.write_text(content, encoding="utf-8")
print(f"Created: {path}")
