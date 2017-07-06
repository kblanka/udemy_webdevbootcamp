var question = "What would you like to do?";
var answer = prompt(question);
var todos = [];

while(answer !== "quit"){
    if(answer === "new"){
        addTodo();
    }
    else if(answer === "list"){
        listTodos();
    }
    else if(answer === "delete"){
        deleteTodos();
    }
    else{
        alert("Invalid command! Please try again.");
    }
    answer = prompt(question);
}
console.log("Todo App closed");
alert("Goodbye!");

function listTodos(){
    console.log("***********");
    todos.forEach(function(todo, index){
        console.log(index + ": " + todo);
    });
    console.log("***********");
}

function deleteTodos(){
    var deleteIndex = prompt("Enter index of todo to delete:");
    todos.splice(deleteIndex, 1);
    console.log("Todo Removed");
}

function addTodo(){
    todos.push(prompt("Enter your new task:")); 
    console.log("Todo Added");
}