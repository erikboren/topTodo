/*jshint esversion: 6 */
import './style.css';
import { sideBarComponentConstructor } from './components.js';
import { mainWindowConstructor } from './components.js';
import { projectSideBarElementConstructor } from './components.js';

const todoDatabase = (function(){
    let todoIDCounter = 0;
    
    const todoFactory = function(todoName,todoDate,todoDesc){
        let name = todoName;
        let date = todoDate;
        
        let desc = todoDesc;
        let completed = false;
        let todoID = todoIDCounter;
        let projectID = [99];
        
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
        filteredTodoArray = todoArray.filter(todo => todo.projectID.some(projectIDarrayElement => projectIDarrayElement == projectID));
        return filteredTodoArray;
    };

    const assignProjectID = function(projectIDToAssign,todoID){
    
        if(projectDatabase.projectArray.some(project => project.projectID == projectIDToAssign)){
            const todoToEdit = todoArray.filter(todo => todo.todoID == todoID)[0];
           if(todoToEdit.projectID == [99]){
                
                todoToEdit.projectID = [projectIDToAssign];

           }
           else{
                todoToEdit.projectID.push(projectIDToAssign);
               
           }
           
        }
        else{
            console.log("ProjectID not found");
        }
    };

    return{
        addTodo: addTodo,
        todoArray:todoArray,
        projectIDFilter: projectIDFilter,
        assignProjectID: assignProjectID        
    };

})();

const projectDatabase = (function(){
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
        return todoDatabase.projectIDFilter(projectID);
        };

        return{
            name: name,
            projectID: projectID,
            projectTodos: projectTodos
        };
    };
    
    let projectArray = [];

    const addProject = function(projectName){
        const project = projectFactory(projectName);
        projectArray.push(project);
        sortProjectArray();
    };

    addProject("Tasks not in a project");
    projectArray[0].projectID = 99;
    projectIDcounter = 0;


   return{
       addProject: addProject,
       projectArray: projectArray
   } ;
})();

const screenController = (function(){
    const contentDiv = document.getElementById("content");
    
    

    const buildPage = function(){
        function sideBar(){
            const sideBar = sideBarComponentConstructor();
            projectDatabase.projectArray.forEach(project =>{
                sideBar.appendChild(projectSideBarElementConstructor(project));
            });
            return sideBar;
        }
        contentDiv.appendChild(sideBar());
        contentDiv.appendChild(mainWindowConstructor());
    };

    return {
        buildPage: buildPage
    };

})();

projectDatabase.addProject("Projekt1");
projectDatabase.addProject("Projekt2");

screenController.buildPage();




// todoDatabase.addTodo("namn0","datum0","beskrivning0");
// todoDatabase.addTodo("namn1","datum1","beskrivning1");
// todoDatabase.addTodo("namn2","datum2","beskrivning2");
// todoDatabase.addTodo("namn3","datum3","beskrivning3");
// todoDatabase.addTodo("namn4","datum4","beskrivning4");
// todoDatabase.addTodo("namn5","datum5","beskrivning5");
// todoDatabase.addTodo("namn6","datum6","beskrivning6");
// todoDatabase.addTodo("namn7","datum8","beskrivning9");


// todoDatabase.assignProjectID(0,5);
// todoDatabase.assignProjectID(0,2);
// todoDatabase.assignProjectID(0,4);
// todoDatabase.assignProjectID(1,4);



// console.table(todoDatabase.todoArray);

// console.log(projectDatabase.projectArray[0].projectTodos());