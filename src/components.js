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

    const title = document.createElement("h2");

    title.textContent=project.name;

    mainWindow.appendChild(title);

    const todoTable = document.createElement("table");

    const tableHeaderRow = document.createElement("tr");

    const tableHeaderTodoName = document.createElement("th");
    tableHeaderTodoName.textContent = "Todo Name";

    const tableHeaderTodoDate = document.createElement("th");
    tableHeaderTodoDate.textContent = "Due Date";

    const tableHeaderTodoCompleted = document.createElement("th");
    tableHeaderTodoCompleted.textContent = "Completed";



    tableHeaderRow.appendChild(tableHeaderTodoName);
    tableHeaderRow.appendChild(tableHeaderTodoDate);
    tableHeaderRow.appendChild(tableHeaderTodoCompleted);
    tableHeaderRow.appendChild(document.createElement("th"));
    todoTable.appendChild(tableHeaderRow);

    const projectTodos = project.projectTodos();

    projectTodos.forEach(todo =>{
        todoTable.appendChild(todoTableRow(todo));
    });

    mainWindow.appendChild(todoTable);
}

function todoTableRow(todo){
    const tableRow = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = todo.name;
    tableRow.appendChild(nameCell);

    const dateCell = document.createElement("td");
    dateCell.textContent = todo.date;
    tableRow.appendChild(dateCell);

    const completedCell = document.createElement("td");
    completedCell.textContent = todo.completed;
    tableRow.appendChild(completedCell);

    const editButtonCell = document.createElement("td");
    editButtonCell.appendChild(editTodoButton(todo));
    tableRow.appendChild(editButtonCell);
    
    return tableRow;
}

function editTodoButton(todo){
    function showEditTodoButtonModal(todo){
        const modalBackground = document.getElementById("todoModalBackground");
        modalBackground.style.display = "block";
    }

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("todoEditButton");
    editButton.onclick = function(todo){
        showEditTodoButtonModal(todo);
    };

    return editButton;

}

export function editTodoModal(){
    const modalBackground = document.createElement("div");
    const modal = document.createElement("div");


    modal.classList.add("modal");
    modalBackground.classList.add("modalBackground");
    modalBackground.setAttribute("id","todoModalBackground");





    modalBackground.appendChild(modal);

    return modalBackground;
}
