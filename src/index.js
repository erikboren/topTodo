/*jshint esversion: 6 */
import './style.css';
import { userInterface } from './userinterface.js';
import { format, compareAsc } from 'date-fns';

const todoDataBase = (function(){
    let todoIDCounter = 0;
    
    const todoFactory = function(todoName,todoDate,todoDesc){
        let name = todoName;
        let date = todoDate;
        
        let desc = todoDesc;
        let completed = false;
        let todoID = todoIDCounter;
        let projectID = 0;
        
        todoIDCounter ++;
       
        return{
            name: name,
            date: date,
            desc: desc,
            completed: completed,
            todoID: todoID,
            projectID: projectID,
            
        };
       };
       
    
    
    const todoArray = [];

    const addTodo = function(todoName,todoDate,todoDesc){
        const todo = todoFactory(todoName,todoDate,todoDesc);
        todoArray.push(todo);
    };

    const projectIDFilter = function(projectID){
        const filteredTodoArray = todoArray.filter(todo => todo.projectID == projectID);
        return filteredTodoArray;
    };

    const todoIDFilter = function(todoID){
        const filteredTodo = todoArray.filter(todo => todo.todoID == todoID)[0];
        return filteredTodo;
    };

    const assignProjectID = function(projectIDToAssign,todoID){
    
        if(projectDataBase.projectArray.some(project => project.projectID == projectIDToAssign)){
            const todoToEdit = todoIDFilter(todoID);
            todoToEdit.projectID = projectIDToAssign;
        }
        else{
            console.log("ProjectID not found");
        }
    };

    const editTodo = function(todoID,newTodoName,newTodoDate,newTodoDesc,newTodoProjectID){
        const todoToEdit = todoIDFilter(todoID);

        todoToEdit.name = newTodoName;
        todoToEdit.date = newTodoDate;
        todoToEdit.desc = newTodoDesc;
        assignProjectID(newTodoProjectID,todoID);
    };

    return{
        addTodo: addTodo,
        todoArray:todoArray,
        projectIDFilter: projectIDFilter,
        assignProjectID: assignProjectID,
        editTodo : editTodo        
    };

})();

const projectDataBase = (function(){
    let projectIDcounter = 0;
    
    function sortProjectArray(){
        projectArray = projectArray.sort((a,b) =>{
            return a.projectID - b.projectID;
        });
    }

    const projectFactory = function(projectName){
        
        let name = projectName;
        let projectID = projectIDcounter;

        projectIDcounter ++;


        const projectTodos = function(){
        return todoDataBase.projectIDFilter(projectID);
        };

        function completionStatus(){
            if(projectTodos().length==0){
                return false;
            }else{
                return !projectTodos().some(todo  => todo.completed == false);}

            
        }

        function estProjectCompletion(){
            const dates = [];
            projectTodos().forEach(todo =>{
                dates.push(todo.date);
            });
            const maxDate = new Date(Math.max.apply(null,dates));
        
            return maxDate;
        }

        return{
            name: name,
            projectID: projectID,
            projectTodos: projectTodos,
            completionStatus : completionStatus,
            estProjectCompletion: estProjectCompletion
        };
    };
    
    let projectArray = [];

    const addProject = function(projectName){
        const project = projectFactory(projectName);
        projectArray.push(project);
        sortProjectArray();
    };

    

    addProject("Tasks not in a project");
  

   return{
       addProject: addProject,
       projectArray: projectArray,
   } ;
})();



projectDataBase.addProject("Projekt1");
projectDataBase.addProject("Projekt2");


todoDataBase.addTodo("namn0",new Date("2002","02","15"),"beskrivning0");
todoDataBase.addTodo("namn1",new Date("2002","03","15"),"beskrivning1");
todoDataBase.addTodo("namn2",new Date("2002","04","15"),"beskrivning2");
todoDataBase.addTodo("namn3",new Date("2002","05","15"),"beskrivning3");
todoDataBase.addTodo("namn4",new Date("2002","08","15"),"beskrivning4");
todoDataBase.addTodo("namn5",new Date("2002","09","15"),"beskrivning5");
todoDataBase.addTodo("namn6",new Date("2022","02","15"),"beskrivning6");
todoDataBase.addTodo("namn7",new Date("2002","02","18"),"beskrivning9");

todoDataBase.assignProjectID(1,5);
todoDataBase.assignProjectID(1,2);
todoDataBase.assignProjectID(2,4);
todoDataBase.assignProjectID(2,4);

// console.table(todoDataBase.todoArray);

// console.table(projectDataBase.projectArray);

userInterface(todoDataBase,projectDataBase);