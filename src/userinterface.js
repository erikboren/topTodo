/*jshint esversion: 6 */
import './style.css';

export function userInterface(todoDataBase,projectDataBase){
    const contentDiv = document.getElementById("content");
    
    const sideBar =(function(){
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
            
            headerText.onclick = function(){
                mainWindow.projectList();
            };

            header.appendChild(headerText);
    
            headerPlusButton.classList.add("sideBarPlusButton");
            headerPlusButton.textContent = "+";
    
            headerPlusButton.onclick = function(){
                modal.showProjectModal(false,false);
            };
    
            if(plusButton){
                header.appendChild(headerPlusButton);
            }
    
            return header;
        }
        
        function projectSideBarElementConstructor(project){
            const projectSideBarElement = document.createElement("div");
            const projectSideBarElementText = document.createElement("p");
            projectSideBarElementText.textContent = project.name + " " + project.projectID;
            projectSideBarElement.classList.add("sideBarListElement");
            
            projectSideBarElementText.onclick = function(){
                mainWindow.showProjectTodos(project);
            };
            
            projectSideBarElement.appendChild(projectSideBarElementText);

            function projectSideBarElementButton(){
                const button = document.createElement("i");
                button.classList.add("fas");
                button.classList.add("fa-ellipsis-h");

                projectSideBarElement.appendChild(button);
            }

            projectSideBarElementButton();

            return projectSideBarElement;
            
        }
    
        function refreshSideBarProjectList(projectDataBase){
            sideBarProjectList.innerHTML="";
            
            projectDataBase.projectArray.forEach(project =>{
                sideBarProjectList.appendChild(projectSideBarElementConstructor(project));
            });
        }
    
        const sideBarElement = document.createElement("div");
        sideBarElement.classList.add("sideBar");
        sideBarElement.appendChild(sideBarLogo());
        sideBarElement.appendChild(sideBarTopLevelHeader("PROJECTS",true));
        
        const sideBarProjectList = document.createElement("div");

        refreshSideBarProjectList(projectDataBase);
    
        sideBarElement.appendChild(sideBarProjectList);

        return {sideBarElement : sideBarElement,
                refresh: refreshSideBarProjectList
        };
    })();

    const mainWindow =(function(){
        const mainWindow = document.createElement("div");
        mainWindow.classList.add("mainWindow");        
        
        function clearMainWindow(){
            mainWindow.innerHTML = "";
        }

        function titleBox(title){
            const pageTitle = document.createElement("h1");
            pageTitle.textContent = title;

            mainWindowBox(pageTitle);
        }
        
        function mainWindowBox(element){
            const mainWindowBox = document.createElement("div");
            mainWindowBox.classList.add("mainWindowBox");
            mainWindowBox.appendChild(element);
            mainWindow.appendChild(mainWindowBox);
        }

        function projectList(){
            clearMainWindow();
            const projectList = document.createElement("ul");
            titleBox("Projects");

            projectDataBase.projectArray.forEach(project =>{
                const projectListElement = document.createElement("li");
                projectListElement.textContent = project.name;
                projectListElement.onclick= function(){
                    showProjectTodos(project);
                };
                projectList.appendChild(projectListElement);
            });

            mainWindowBox(projectList);
        }
        
        function showProjectTodos(project){
            function todoTable(project){
                    function todoTableRow(todo){
                        function editTodoButton(todo){
                            const editButton = document.createElement("button");
                            editButton.textContent = "Edit";
                            editButton.classList.add("todoEditButton");
                            editButton.onclick = function(){
                                showTodoFormEdit(todo);
                            };
        
                            return editButton;
        
                        }

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

                mainWindowBox(todoTable);
            }
            
            
            clearMainWindow();

            titleBox(project.name);
            todoTable(project);
        }


        projectList();
        
        return {
            mainWindowElement : mainWindow,
            projectList : projectList,
            showProjectTodos : showProjectTodos
        };
    })();

    const modal = (function(){
        function hideModal(){
            modal.style.display = "none";
        }

        function showModal(){
            modal.style.display = "block";
        }
        
        function clearModal(){
            modalContent.innerHTML = "";
        }

        const modal = document.createElement("div");
        modal.classList.add("modal");

        modal.onclick= function(){
            hideModal();
        };

       
        const modalContent = document.createElement("div");
        modalContent.classList.add("modalContent");

        modal.appendChild(modalContent);

        modalContent.onclick = function(){
            showModal();
        };

        function modalBox(element){
            const box = document.createElement("div");
            box.appendChild(element);
            modalContent.appendChild(box);
        }

        function modalTitle(text){
            const title = document.createElement("h2");
            title.textContent = text;

            modalBox(title);
        }

        function showProjectModal(edit,project){
            clearModal();
            
            let text;
            if(edit){
                 text = "Edit " + project.name;
            } else{
                text = "Create new project";
            }

            modalTitle(text);

            showModal();
        }

        return{
            modal : modal,
            showProjectModal : showProjectModal
        };
    })();
    contentDiv.appendChild(sideBar.sideBarElement);
    contentDiv.appendChild(mainWindow.mainWindowElement);
    contentDiv.appendChild(modal.modal);
}

// function sideBar(projectDataBase){
//     function sideBarLogo(){
//         const logo = document.createElement("div");
//         logo.textContent = "topToDo";
//         logo.classList.add("sideBarLogo");
//         return logo;
//     }

//     function sideBarTopLevelHeader(text,plusButton){
//         const header = document.createElement("div");
//         const headerText = document.createElement("p");
//         const headerPlusButton = document.createElement("button");
        
//         headerText.textContent = text;
//         header.classList.add("sideBarTopLevelHeader");

//         header.appendChild(headerText);

        

//         headerPlusButton.classList.add("sideBarPlusButton");
//         headerPlusButton.textContent = "+";

//         headerText.onclick = function(){
            
//         };

//         if(plusButton){
//             header.appendChild(headerPlusButton);
//         }

//         return header;
//     }
    
//     function projectSideBarElementConstructor(project){
//         const projectSideBarElement = document.createElement("p");
//         projectSideBarElement.textContent = project.name + " " + project.projectID;
//         projectSideBarElement.classList.add("sideBarListElement");
        
//         projectSideBarElement.onclick = function(){
//             mainWindowProjectTodoList(project);
//         };

//         return projectSideBarElement;
        
//     }


//     const sideBarElement = document.createElement("div");
//     sideBarElement.classList.add("sideBar");
//     sideBarElement.appendChild(sideBarLogo());
//     sideBarElement.appendChild(sideBarTopLevelHeader("PROJECTS",true));
    
//     projectDataBase.projectArray.forEach(project =>{
//         sideBarElement.appendChild(projectSideBarElementConstructor(project));
//     });


//     return sideBarElement;
// }


// export function mainWindowConstructor(){
//     const mainWindow = document.createElement('div');
//     mainWindow.classList.add("mainWindow");
//     return mainWindow;
// }

// export function todoListConstructor(){

// }

// function mainWindowProjectTodoList(project){
//     const mainWindow = document.querySelector(".mainWindow");
//     mainWindow.innerHTML = "";

    
//     mainWindow.appendChild(mainWindowTitleBox(project.name));

    

//     mainWindow.appendChild(mainWindowContentBox(todoTable(project)));
// }

// function todoTable(project){
//     const todoTable = document.createElement("table");

//     const tableHeaderRow = document.createElement("tr");

//     const tableHeaderTodoName = document.createElement("th");
//     tableHeaderTodoName.textContent = "Todo Name";

//     const tableHeaderTodoDate = document.createElement("th");
//     tableHeaderTodoDate.textContent = "Due Date";

//     const tableHeaderTodoCompleted = document.createElement("th");
//     tableHeaderTodoCompleted.textContent = "Completed";



//     tableHeaderRow.appendChild(tableHeaderTodoName);
//     tableHeaderRow.appendChild(tableHeaderTodoDate);
//     tableHeaderRow.appendChild(tableHeaderTodoCompleted);
//     tableHeaderRow.appendChild(document.createElement("th"));
//     todoTable.appendChild(tableHeaderRow);

//     const projectTodos = project.projectTodos();

//     projectTodos.forEach(todo =>{
//         todoTable.appendChild(todoTableRow(todo));
//     });

//     return todoTable;
// }

// function todoTableRow(todo){
//     const tableRow = document.createElement("tr");

//     const nameCell = document.createElement("td");
//     nameCell.textContent = todo.name;
//     tableRow.appendChild(nameCell);

//     const dateCell = document.createElement("td");
//     dateCell.textContent = todo.date;
//     tableRow.appendChild(dateCell);

//     const completedCell = document.createElement("td");
//     completedCell.textContent = todo.completed;
//     tableRow.appendChild(completedCell);

//     const editButtonCell = document.createElement("td");
//     editButtonCell.appendChild(editTodoButton(todo));
//     tableRow.appendChild(editButtonCell);
    
//     return tableRow;
// }

// function editTodoButton(todo){
//     const editButton = document.createElement("button");
//     editButton.textContent = "Edit";
//     editButton.classList.add("todoEditButton");
//     editButton.onclick = function(){
//         showTodoFormEdit(todo);
//     };

//     return editButton;

// }

// function showTodoFormEdit(todo){
//     const modalContentDiv = document.querySelector(".modalContent");
//     modalContentDiv.innerHTML = "";

//     toggleModal("s");

//     const title = document.createElement("h3");
//     title.textContent = "Edit Todo";
//     modalContentDiv.appendChild(title);

//     const form = todoForm(true,todo);

//     modalContentDiv.appendChild(form);
//     modalContentDiv.appendChild(submitButton(todo));
// }

// function todoForm(edit,todo){

//     const form = document.createElement("form");

//     const nameLabel = document.createElement("label");
//     nameLabel.setAttribute("for","todoName");
//     nameLabel.textContent = "Todo name";
    
//     const nameInput = document.createElement("input");
//     nameInput.setAttribute("type","text");
//     nameInput.setAttribute("id","todoNameInput");
//     nameInput.setAttribute("name","todoName");

//     const dateLabel = document.createElement("label");
//     dateLabel.setAttribute("for","todoDate");
//     dateLabel.textContent = "Date";
    
//     const dateInput = document.createElement("input");
//     dateInput.setAttribute("type","text");
//     dateInput.setAttribute("id","todoDateInput");
//     dateInput.setAttribute("name","todoDate");
    
    

   

//     if(edit){
//         nameInput.setAttribute("value",todo.name);
//         dateInput.setAttribute("value",todo.date);
//     }
    

//     form.appendChild(nameLabel);
//     form.appendChild(document.createElement("br"));
//     form.appendChild(nameInput);
//     form.appendChild(document.createElement("br"));
//     form.appendChild(dateLabel);
//     form.appendChild(document.createElement("br"));
//     form.appendChild(dateInput);


//     return form;
// }

// function submitButton(todo){
//     const submitButton = document.createElement("button");
//     submitButton.classList.add("submitButton");
//     submitButton.textContent = "Submit";

//     submitButton.onclick = function(edit){
//         const todoNameInput = document.getElementById("todoNameInput").value;
//         const todoDateInput = document.getElementById("todoDateInput").value;


//         console.log("Tjena!");
//         if(edit){
//             todo.name = todoNameInput;
//             todo.date = todoDateInput;
//             toggleModal("h");
//         }
//     };


//     return submitButton;
// }

// export function modalComponentConstructor(){
//     const modalBackground = document.createElement("div");
//     const modal = document.createElement("div");
//     const modalContent = document.createElement("div");
//     modalContent.classList.add("modalContent");

//     modal.classList.add("modal");
//     modalBackground.classList.add("modalBackground");
//     modalBackground.setAttribute("id","modalBackground");

//     modal.appendChild(modalContent);

//     modalBackground.appendChild(modal);

//     return modalBackground;
// }

// function toggleModal(mode){
//     const modalBackground = document.getElementById("modalBackground");
//     if(mode == "h"){
//         modalBackground.style.display = "none";
    
//     }else if(mode== "s"){
//         modalBackground.style.display = "block";
//     }
// }

// function mainWindowTitleBox(title){
//     const titleBox = document.createElement("div");
//     const pageTitle = document.createElement("h1");
//     pageTitle.textContent = title;

//     titleBox.appendChild(pageTitle);
//     titleBox.classList.add("mainWindowBox");
//     return titleBox;
// }

// function mainWindowContentBox(element){
//     const contentBox = document.createElement("div");
//     contentBox.classList.add("mainWindowBox");
    
//     contentBox.appendChild(element);

//     return contentBox;
// }
