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
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("todoEditButton");
    editButton.onclick = function(){
        showTodoFormEdit(todo);
    };

    return editButton;

}

function showTodoFormEdit(todo){
    const modalContentDiv = document.querySelector(".modalContent");
    modalContentDiv.innerHTML = "";

    const modalBackground = document.getElementById("modalBackground");
    modalBackground.style.display = "block";

    const title = document.createElement("h3");
    title.textContent = "Edit Todo";
    modalContentDiv.appendChild(title);

    const form = todoForm(true,todo);

    modalContentDiv.appendChild(form);
}

function todoForm(edit,todo){
    const form = document.createElement("form");

    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for","todoName");
    nameLabel.textContent = "Todo name";
    
    const nameInput = document.createElement("input");
    nameInput.setAttribute("type","text");
    nameInput.setAttribute("id","todoName");
    nameInput.setAttribute("name","todoName");

    const dateLabel = document.createElement("label");
    dateLabel.setAttribute("for","todoDate");
    dateLabel.textContent = "Date";
    
    const dateInput = document.createElement("input");
    dateInput.setAttribute("type","text");
    dateInput.setAttribute("id","todoDate");
    dateInput.setAttribute("name","todoDate");
    
    

   

    if(edit){
        nameInput.setAttribute("value",todo.name);
        dateInput.setAttribute("value",todo.date);
    }
    

    form.appendChild(nameLabel);
    form.appendChild(document.createElement("br"));
    form.appendChild(nameInput);
    form.appendChild(document.createElement("br"));
    form.appendChild(dateLabel);
    form.appendChild(document.createElement("br"));
    form.appendChild(dateInput);

    return form;
}

export function modalComponentConstructor(){
    const modalBackground = document.createElement("div");
    const modal = document.createElement("div");
    const modalContent = document.createElement("div");
    modalContent.classList.add("modalContent");

    modal.classList.add("modal");
    modalBackground.classList.add("modalBackground");
    modalBackground.setAttribute("id","modalBackground");

    modal.appendChild(modalContent);

    modalBackground.appendChild(modal);

    return modalBackground;
}


