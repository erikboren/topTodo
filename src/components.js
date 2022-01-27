/*jshint esversion: 6 */
import './style.css';
export function sideBarComponentConstructor(projectDataBase){
    function sideBarLogo(){
        const logo = document.createElement("div");
        logo.textContent = "topToDo";
        logo.classList.add("sideBarLogo");
        return logo;
    }

    function sideBarTopLevelHeader(text,plusButton){
        const header = document.createElement("div");
        const headerText = document.createElement("p");
        const headerPlusButton = document.createElement("button");
        
        headerText.textContent = text;
        header.classList.add("sideBarTopLevelHeader");

        header.appendChild(headerText);

        headerPlusButton.classList.add("sideBarPlusButton");
        headerPlusButton.textContent = "+";

        if(plusButton){
            header.appendChild(headerPlusButton);
        }

        return header;
    }
    
    function projectSideBarElementConstructor(project){
        const projectSideBarElement = document.createElement("p");
        projectSideBarElement.textContent = project.name + " " + project.projectID;
        projectSideBarElement.classList.add("sideBarListElement");
        
        projectSideBarElement.onclick = function(){
            mainWindowProjectTodoList(project);
        };

        return projectSideBarElement;
        
    }


    const sideBarElement = document.createElement("div");
    sideBarElement.classList.add("sideBar");
    sideBarElement.appendChild(sideBarLogo());
    sideBarElement.appendChild(sideBarTopLevelHeader("PROJECTS",true));
    
    projectDataBase.projectArray.forEach(project =>{
        sideBarElement.appendChild(projectSideBarElementConstructor(project));
    });


    return sideBarElement;
}




export function mainWindowConstructor(){
    const mainWindow = document.createElement('div');
    mainWindow.classList.add("mainWindow");
    return mainWindow;
}

export function todoListConstructor(){

}

function mainWindowProjectTodoList(project){
    const mainWindow = document.querySelector(".mainWindow");
    mainWindow.innerHTML = "";
    const list = document.createElement("ul");

    const projectTodos = project.projectTodos();

    projectTodos.forEach(todo =>{
        const todoListItem = document.createElement("li");
        todoListItem.textContent = todo.name;
        list.appendChild(todoListItem);
    });

    mainWindow.appendChild(list);
}