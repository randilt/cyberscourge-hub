+++
title = 'Building a Simple To-Do List Web App with HTML, CSS, and JavaScript'
date = 2023-11-24T19:32:31+05:30
draft = false
description = "Follow this step-by-step tutorial to build a basic to-do list web app using HTML, CSS, and JavaScript. Perfect for beginners in web development."
image = "/images/todo.webp"
imageBig = "/images/todo.webp"
categories = ["Web Development", "HTML", "CSS", "JavaScript"]
authors = ["RandilT"]
avatar = "/images/todo.webp"
featured = false
+++

# Building a Simple To-Do List Web App with HTML, CSS, and JavaScript

Are you a beginner in web development and want to create a practical project to enhance your skills? In this step-by-step tutorial, we'll guide you through building a simple to-do list web app using the fundamental trio: HTML, CSS, and JavaScript.

## Step 1: Set Up Your Project

Create a new project folder and set up the basic structure:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <title>Simple To-Do List</title>
  </head>
  <body>
    <div class="container">
      <h1>My To-Do List</h1>
      <ul id="taskList"></ul>
      <input type="text" id="newTask" placeholder="New task..." />
      <button onclick="addTask()">Add Task</button>
    </div>
    <script src="app.js"></script>
  </body>
</html>
```

## Step 2: Style Your To-Do List

Create a simple stylesheet (styles.css) to make your to-do list visually appealing:

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.container {
  text-align: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
  padding: 10px;
  background-color: #e6e6e6;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
}

input {
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
```

## Step 3: Implement JavaScript Functionality

Add functionality to your to-do list using JavaScript (app.js):

```js
function addTask() {
  const newTaskInput = document.getElementById("newTask");
  const taskList = document.getElementById("taskList");

  if (newTaskInput.value !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
            ${newTaskInput.value}
            <button onclick="removeTask(this)">Remove</button>
        `;
    taskList.appendChild(li);
    newTaskInput.value = "";
  }
}

function removeTask(button) {
  const li = button.parentElement;
  li.remove();
}
```

## Conclusion

Congratulations! You've successfully built a simple to-do list web app using HTML, CSS, and JavaScript. This beginner-friendly project is an excellent starting point for understanding the basics of web development.

Feel free to enhance and customize your to-do list app further. Add features like marking tasks as completed or saving tasks locally using browser storage.

Stay tuned for more web development tutorials, and happy coding!

---

_About the Author: RandilT is an aspiring Fullstack developer, Undergraduate Student, and advocate for accessible coding education. Follow him for more web development tips and tutorials._
