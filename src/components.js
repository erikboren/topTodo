/*jshint esversion: 6 */
import './style.css';
export function sideBarComponentConstructor(){
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
    
    const sideBarElement = document.createElement("div");
    sideBarElement.classList.add("sideBar");
    sideBarElement.appendChild(sideBarLogo());
    sideBarElement.appendChild(sideBarTopLevelHeader("PROJECTS",true));
    
    return sideBarElement;
}


export function projectSideBarElementConstructor(project){
    const projectSideBarElement = document.createElement("p");
    projectSideBarElement.textContent = project.name;
    projectSideBarElement.classList.add("sideBarListElement");
    
    return projectSideBarElement;
    
}

export function mainWindowConstructor(){
    const mainWindow = document.createElement('div');
    mainWindow.classList.add("mainWindow");
    return mainWindow;
}

export function todoListConstructor(){

}

