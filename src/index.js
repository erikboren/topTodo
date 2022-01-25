/*jshint esversion: 6 */

const todoDatabase = (function(){
    let todoIDCounter = 0;
    
    const todoFactory = function(todoName,todoDate,todoDesc){
        let name = todoName;
        let date = todoDate;
        
        let desc = todoDesc;
        let completed = false;
        let project = "No Project";
        let todoID = todoIDCounter;
        let projectID = 0;
        
        todoIDCounter ++;
       
        return{
            name: name,
            date: date,
            project: project,
            desc: desc,
            completed: completed,
            todoID: todoID,
            projectID: projectID
        };
       };
       
    
    
    const todoArray = [];

    const addTodo = function(todoName,todoDate,todoDesc){
        const todo = todoFactory(todoName,todoDate,todoDesc);
        todoArray.push(todo);
    };

    return{
        addTodo: addTodo,
        todoArray:todoArray        
    };

})();

const projectDatabase = (function(){
    const projectFactory = function(projectName){
        


        const projectTodos = function(){

        }

        return{
            name: projectName,
        };
    };
    
    const projectArray = [];

    const addProject = function(projectName){
        const project = projectFactory(projectName);
        projectArray.push(project);
    };

   return{
       addProject: addProject,
       projectArray: projectArray
   } ;
})();



projectDatabase.addProject("Projektet");

todoDatabase.addTodo("namn","datum","beskrivning");

console.log(todoDatabase.todoArray[0]);