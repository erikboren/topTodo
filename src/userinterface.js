/*jshint esversion: 6 */
import './style.css';
import { format, compareAsc } from 'date-fns';
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
            projectSideBarElementText.textContent = project.name;
            projectSideBarElement.classList.add("sideBarListElement");
            
            projectSideBarElementText.onclick = function(){
                mainWindow.showProjectTodos(project);
            };
            
            projectSideBarElement.appendChild(projectSideBarElementText);

            function projectSideBarElementButton(){
                const button = document.createElement("span");
        
                button.classList.add("fas", "fa-ellipsis-h");

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
            function projectTable(){
                const table = document.createElement("table");
                const tableHeaderRow = document.createElement("tr");
                const tableHeadings = ["Project", "Completion status", "Planned completion","" ];

                tableHeadings.forEach(tableHeading =>{
                    const thElement = document.createElement("th");
                    thElement.textContent = tableHeading;
                    tableHeaderRow.appendChild(thElement);            
                });

                table.appendChild(tableHeaderRow);

                function tableRow(project){
                    const tableRow = document.createElement("tr");

                    const projectNameTD = document.createElement("td");
                    projectNameTD.textContent = project.name;

                    projectNameTD.onclick = function(){
                        showProjectTodos(project);
                    };

                    tableRow.appendChild(projectNameTD);

                    const projectCompletionStatusTD = document.createElement("td");

                    if(project.completionStatus()){
                        projectCompletionStatusTD.textContent = "Completed";
                    }else{
                        projectCompletionStatusTD.textContent = "Not completed";
                    }
                    

                    tableRow.appendChild(projectCompletionStatusTD);

                    const estProjectCompletionTD = document.createElement("td");

                    estProjectCompletionTD.textContent = project.estProjectCompletion() != null ? format(project.estProjectCompletion(),"dd/MM/yyyy") : "N/A";

                    tableRow.appendChild(estProjectCompletionTD);

                    const editProjectTD = document.createElement("td");

                    const editProjectIcon = document.createElement("span");

                    editProjectIcon.classList.add("material-icons-outlined");

                    editProjectIcon.textContent = "edit";

                    editProjectTD.appendChild(editProjectIcon);

                    tableRow.appendChild(editProjectTD);


                    return tableRow;
                }
                
                projectDataBase.projectArray.forEach(project =>{
                    table.appendChild(tableRow(project));
                });




                return table;
            }
            
            clearMainWindow();
            titleBox("Projects");
            mainWindowBox(projectTable());
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

                        const priorityCell = document.createElement("td");
                        priorityCell.textContent = todo.priority;
                        tableRow.appendChild(priorityCell);

                        const dateCell = document.createElement("td");
                        dateCell.textContent = format(todo.date,"dd/MM/yyyy");
                        tableRow.appendChild(dateCell);

                        const completedCell = document.createElement("td");
                        if(todo.completed == true){
                            completedCell.textContent = 'Completed';
                        } else{
                            completedCell.textContent = 'Not completed';
                        }
                        
                        tableRow.appendChild(completedCell);

                        completedCell.onclick = function(){
                            todoDataBase.toggleTodoCompletion(todo.todoID);
                            showProjectTodos(project);

                        };

                        const editButtonCell = document.createElement("td");
                        editButtonCell.appendChild(editTodoButton(todo));
                        tableRow.appendChild(editButtonCell);
                        
                        return tableRow;
                }

                function todoTableAddRow(){ //Adds a "blank" row at the bottom with an "add task button"
                    const tableRow = document.createElement("tr");

                    for(var i = 0; i <4;i++){
                        const tableCell = document.createElement("td");
                        tableCell.classList.add("noBorder");
                        tableCell.textContent = " ";
                        tableRow.appendChild(tableCell);
                    }
            
                    const addTodoButton = document.createElement("button");
                    addTodoButton.classList.add("addTodoButton");
                    addTodoButton.textContent = "Add task";

                    const addTodoButtonTD = document.createElement("td");
                    addTodoButtonTD.appendChild(addTodoButton);
                    addTodoButtonTD.classList.add("noBorder");
                    tableRow.appendChild(addTodoButtonTD);

                    return tableRow;
                    
                }
                
                const todoTable = document.createElement("table");

                const tableHeaderRow = document.createElement("tr");

                const tableHeaderTodoName = document.createElement("th");
                tableHeaderTodoName.textContent = "Todo Name";

                const tableHeaderTodoPriority = document.createElement("th");
                tableHeaderTodoPriority.textContent = "Priority";

                const tableHeaderTodoDate = document.createElement("th");
                tableHeaderTodoDate.textContent = "Due Date";

                const tableHeaderTodoCompleted = document.createElement("th");
                tableHeaderTodoCompleted.textContent = "Completed";

                tableHeaderRow.appendChild(tableHeaderTodoName);
                tableHeaderRow.appendChild(tableHeaderTodoPriority);
                tableHeaderRow.appendChild(tableHeaderTodoDate);
                tableHeaderRow.appendChild(tableHeaderTodoCompleted);
                tableHeaderRow.appendChild(document.createElement("th"));
                todoTable.appendChild(tableHeaderRow);

                const projectTodos = project.projectTodos();

                projectTodos.forEach(todo =>{
                    todoTable.appendChild(todoTableRow(todo));
                });
                    
                    todoTable.appendChild(todoTableAddRow());


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


       function closeModalButton(element){
           const closeButton = document.createElement("i");
           closeButton.classList.add("fas","fa-times","modalCloseButton");
           closeButton.onclick = function(){
               hideModal();
           };
           element.appendChild(closeButton);
       }

        const modalContent = document.createElement("div");
        modalContent.classList.add("modalContent");

        modal.appendChild(modalContent);


        function modalBox(element){
            const box = document.createElement("div");
            box.appendChild(element);
            modalContent.appendChild(box);
        }

        function modalTitle(text){
            const title = document.createElement("h2");
            title.textContent = text;

            const div = document.createElement("div");
            div.classList.add("modalTitleBox");

            div.appendChild(title);

            closeModalButton(div);
            
            modalBox(div);
        }

        function inputBox(name,value,type,id,textarea){
            var input = "";
            if(textarea){
                input = document.createElement("textarea");
                input.setAttribute("rows","4");
                input.setAttribute("cols","50");
            }else{
                input = document.createElement("input");
            }
            
            input.setAttribute("name",name);
            input.setAttribute("type",type);
            input.setAttribute("value", value);
            input.setAttribute("id",id);


            input.onclick = function(){
                if(input.value == value){
                    input.setAttribute("value","");
                }
            };

            return input;

        }

        function inputLabel(name,labelText){
            const label = document.createElement("label");
            label.setAttribute("for",name);
            label.textContent = labelText;

            return label;
        }

        function showProjectModal(edit,project){
            function projectModalForm(){
                const formDiv = document.createElement("div");
                
                const form = document.createElement("form");

                form.appendChild(inputLabel("projectName", "Project Name"));
                form.appendChild(document.createElement("br"));
                form.appendChild(inputBox("projectName","Project Name", "text","projectNameInput",false));
                form.appendChild(document.createElement("br"));
                form.appendChild(inputLabel("projectDesc", "Description"));
                form.appendChild(document.createElement("br"));
                form.appendChild(inputBox("projectdesc","Description", "text","projectDescInput",true));

                formDiv.appendChild(form);

                const submitButton = document.createElement("button");

                submitButton.textContent = "Create Project";

                submitButton.classList.add("submitButton");

                submitButton.onclick = function(){
                    const newProjectName = document.getElementById("projectNameInput").value;
                    const newProjectDesc = document.getElementById("projectDescInput").value;
                    console.log(newProjectName);
                    projectDataBase.addProject(newProjectName,newProjectDesc);
                    hideModal();
                    mainWindow.projectList();
                    sideBar.refresh(projectDataBase);
                };

                formDiv.appendChild(submitButton);

                modalBox(formDiv);

            }
            
            clearModal();

            let text;
            if(edit){
                 text = "Edit " + project.name;
            } else{
                text = "Create a new project";
            }

            modalTitle(text);

            projectModalForm();
            showModal();
        }

        function showTodoModal(edit,todo){
            
            clearModal();

            let text;
            if(edit){
                text = "Edit todo " + todo.name;
            }else{
                text = "Create a new todo";
            }

            modalTitle(text);
            showModal();
        }

        return{
            modal : modal,
            showProjectModal : showProjectModal,
            showTodoModal : showTodoModal
        };
    })();
    contentDiv.appendChild(sideBar.sideBarElement);
    contentDiv.appendChild(mainWindow.mainWindowElement);
    contentDiv.appendChild(modal.modal);
}

