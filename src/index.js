/*jshint esversion: 6 */
import './style.css';
import { userInterface } from './userinterface.js';
import { format, compareAsc } from 'date-fns';

const todoDataBase = (function(){
    let todoIDCounter = 0;
    
    const todoFactory = function(todoName,todoDate,todoDesc,todoPriority,projectID,todoID){
        let name = todoName;
        let date = todoDate;
        
        let desc = todoDesc;
        let completed = false;
        if(!projectID){
            projectID=0;
        }
        
        let priority = todoPriority;
        
        if(!todoID){
            todoID = todoIDCounter; 
        }
        return{
            name: name,
            date: date,
            desc: desc,
            completed: completed,
            todoID: todoID,
            projectID: projectID,
            priority: priority
            
        };
       };
       
    
    
    const todoArray = [];

    const addTodo = function(todoName,todoDate,todoDesc,todoPriority,projectID,todoID = false){
        const todo = todoFactory(todoName,todoDate,todoDesc,todoPriority, projectID, todoID);
        todoArray.push(todo);
        updateTodoIDCounter();
        exportArray();
    };

    const updateTodoIDCounter = function(){
        if(todoArray.length>0){
            todoIDCounter = todoArray.reduce(function(a,b){
                return (a.todoID > b.todoID) ? a : b;
            }).todoID +1;
        }
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
            exportArray();
        }
        else{
            console.log("ProjectID not found");
        }
        
    };

    const editTodo = function(todoID,newTodoName,newTodoDate,newTodoDesc,newTodoProjectID,newTodoPriority){
        const todoToEdit = todoIDFilter(todoID);

        todoToEdit.name = newTodoName;
        todoToEdit.date = newTodoDate;
        todoToEdit.desc = newTodoDesc;
        assignProjectID(newTodoProjectID,todoID);
        todo.ToEdit.priority = newTodoPriority;
        exportArray();
    };

    const toggleTodoCompletion = function(todoID){
        const todoToEdit = todoIDFilter(todoID);
        if (todoToEdit.completed){
            todoToEdit.completed = false;
        } else {
            todoToEdit.completed = true;
        }
        exportArray();
    };

    const importArray = function(){
        if(storageAvailable('localStorage') && window.localStorage.getItem('todoArray') != null ){
            const todoImportString = window.localStorage.getItem('todoArray');
            const todoImportArray = JSON.parse(todoImportString);

            todoImportArray.forEach(todoImport =>{
                addTodo(todoImport.name, todoImport.date, todoImport.desc, todoImport.priority, todoImport.projectID, todoImport.todoID);
            });

        }
    };

    const exportArray = function(){
        if(storageAvailable('localStorage')){
            const todoExportArray = [];
            todoArray.forEach(todo =>{
               const todoExportItem = {
                    "todoID" : todo.todoID,
                    'name' : todo.name,
                    'date' : todo.date,
                    'desc' : todo.desc,
                    'completed' : todo.completed,
                    'priority' : todo.priority,
                    'projectID' : todo.projectID
            };
            todoExportArray.push(todoExportItem);
            });
            window.localStorage.setItem('todoArray',JSON.stringify(todoExportArray));
        }
    };

    importArray();


    return{
        addTodo: addTodo,
        todoArray:todoArray,
        projectIDFilter: projectIDFilter,
        assignProjectID: assignProjectID,
        editTodo : editTodo,
        toggleTodoCompletion : toggleTodoCompletion        
    };

})();

const projectDataBase = (function(){
    let projectIDCounter = 0;
    
    function sortProjectArray(){
        projectArray = projectArray.sort((a,b) =>{
            return a.projectID - b.projectID;
        });
    }

    const projectFactory = function(projectName,projectDescription,projectID = false){
        
        let name = projectName;
        let description = projectDescription;
        
        if(!projectID){
            projectID = projectIDCounter;
        }
        

        
      

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
            if(projectTodos().length >0){
                projectTodos().forEach(todo =>{
                    dates.push(todo.date);
                });
                const maxDate = new Date(Math.max.apply(null,dates));
                return maxDate;
            }else{
                return null;
            }
            
        }

        return{
            name: name,
            projectID: projectID,
            description : description,
            projectTodos: projectTodos,
            completionStatus : completionStatus,
            estProjectCompletion: estProjectCompletion
        };
    };
    
    let projectArray = [];

    const updateProjectIDCounter = function(){
        projectIDCounter = projectArray.reduce(function(a,b){
            return (a.projectID > b.projectID) ? a : b;
        }).projectID + 1;
    };


    const addProject = function(projectName, projectDesc, projectID = false){
        const project = projectFactory(projectName,projectDesc,projectID);
        projectArray.push(project);
        sortProjectArray();
        
        if(project.projectID != 0){
            exportArray();
        }
        updateProjectIDCounter();
    };

    function importArray(){
        if(storageAvailable('localStorage') && window.localStorage.getItem('projectArray') != null ){
            const projectImportString = window.localStorage.getItem('projectArray');
            const projectImport = JSON.parse(projectImportString);
            projectImport.forEach(project => addProject(project.name,project.description,project.projectID));
        }
        

    }

    function exportArray(){
        if(storageAvailable('localStorage')){
            const projectExportArray = [];
        projectArray.forEach(project =>{
           const projectExportObject = {
                "name" : project.name,
                "description" : project.description,
                "projectID" : project.projectID
            };
            if(project.projectID == 0){

            } else {
                projectExportArray.push(projectExportObject);
            }
            
        });
        window.localStorage.setItem('projectArray',JSON.stringify(projectExportArray));
        }
        
    }

    addProject("Inbox","Inbox",0);

    importArray();

   return{
       addProject: addProject,
       projectArray: projectArray,
       importArray: importArray,
       exportArray: exportArray
   } ;
})();

userInterface(todoDataBase,projectDataBase);




function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

