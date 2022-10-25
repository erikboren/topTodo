/*jshint esversion: 6 */
import './style.css';
import { userInterface } from './userinterface.js';
import { format, compareAsc } from 'date-fns';

const todoDataBase = (function(){
    let todoIDCounter = 0;
    
    const todoFactory = function(todoName,todoDate,todoDesc,todoPriority,projectID=false){
        let name = todoName;
        let date = todoDate;
        
        let desc = todoDesc;
        let completed = false;
        let todoID = todoIDCounter;
        if(!projectID){
            projectID=0;
        }
        let priority = todoPriority;
        
        todoIDCounter ++;
       
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

    const addTodo = function(todoName,todoDate,todoDesc,todoPriority,projectID = false){
        const todo = todoFactory(todoName,todoDate,todoDesc,todoPriority, projectID);
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

    const editTodo = function(todoID,newTodoName,newTodoDate,newTodoDesc,newTodoProjectID,newTodoPriority){
        const todoToEdit = todoIDFilter(todoID);

        todoToEdit.name = newTodoName;
        todoToEdit.date = newTodoDate;
        todoToEdit.desc = newTodoDesc;
        assignProjectID(newTodoProjectID,todoID);
        todo.ToEdit.priority = newTodoPriority;
    };

    const toggleTodoCompletion = function(todoID){
        const todoToEdit = todoIDFilter(todoID);
        if (todoToEdit.completed){
            todoToEdit.completed = false;
        } else {
            todoToEdit.completed = true;
        }
    };

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
    let projectIDcounter = 0;
    
    function sortProjectArray(){
        projectArray = projectArray.sort((a,b) =>{
            return a.projectID - b.projectID;
        });
    }

    const projectFactory = function(projectName,projectDescription,projectID = false){
        
        let name = projectName;
        let description = projectDescription;
        
        if(!projectID){
            projectID = projectIDcounter;
            projectIDcounter ++;
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

    const addProject = function(projectName, projectDesc, projectID = false){
        const project = projectFactory(projectName,projectDesc,projectID);
        projectArray.push(project);
        sortProjectArray();
        
        if(project.projectID != 0){
            exportArray();
        }
        
    };

    function importArray(){
        if(storageAvailable('localStorage') && window.localStorage.getItem('projectArray') != null ){
            const projectImportString = window.localStorage.getItem('projectArray');
            const projectImport = JSON.parse(projectImportString);
            projectImport.forEach(project => addProject(project.name,project.description,project.projectID));
        }
        

    }

    function exportArray(){
        if(true){
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



// projectDataBase.addProject("Projekt1","Detta är projekt 1");
// projectDataBase.addProject("Projekt2","Detta är projekt 2");


// todoDataBase.addTodo("namn0",new Date("2002","02","15"),"beskrivning0",1);
// todoDataBase.addTodo("namn1",new Date("2002","03","15"),"beskrivning1",2);
// todoDataBase.addTodo("namn2",new Date("2002","04","15"),"beskrivning2",4);
// todoDataBase.addTodo("namn3",new Date("2002","05","15"),"beskrivning3",3);
// todoDataBase.addTodo("namn4",new Date("2002","08","15"),"beskrivning4",2);
// todoDataBase.addTodo("namn5",new Date("2002","09","15"),"beskrivning5",3);
// todoDataBase.addTodo("namn6",new Date("2022","02","15"),"beskrivning6",5);
// todoDataBase.addTodo("namn7",new Date("2002","02","18"),"beskrivning9",6);

// todoDataBase.assignProjectID(1,5);
// todoDataBase.assignProjectID(1,2);
// todoDataBase.assignProjectID(2,4);
// todoDataBase.assignProjectID(2,4);

// console.table(todoDataBase.todoArray);

// console.table(projectDataBase.projectArray);

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

