let Todo = [
    ".. Join Scrum",
    ".. Coding Assignment",
    ".. CSBT Assignment",
    ".. DSA Assignment",
    ".. IA StandUp Session"
    ];
Todo.shift();
Todo.unshift("** High Priority - Get Ready for the day");
Todo.unshift("** High Priority - Wake up");
Todo.pop();
Todo.push(".. Revision of the Day");
console.log(Todo);