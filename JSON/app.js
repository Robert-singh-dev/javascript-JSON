console.log("JSON");

const myObj = {
  name: "Robert",
  content: ["Development", "Fitness", "Gromming"],
};

console.log(myObj);

// creating a varible and store a json value of myobj
const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);

// receive json using parse
const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
