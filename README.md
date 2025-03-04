# 📦 JSON Handling in JavaScript

This section demonstrates how to:

- Create a JavaScript object.
- Convert the object into a JSON string.
- Parse the JSON string back into a JavaScript object.

---

## 🔗 What is JSON?

**JSON (JavaScript Object Notation)** is a lightweight data format often used for exchanging data between a server and a client, or for saving data in files.

---

## 📄 Example Code

```javascript
console.log("JSON");

// Create an object
const myObj = {
    name: "Robert",
    content: ["Development", "Fitness", "Grooming"],
};

// Log the original object
console.log(myObj);

// Convert object to JSON string
const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);

// Parse JSON string back into object
const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
