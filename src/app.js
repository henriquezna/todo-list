const projectContainer = document.getElementById("project-container");
const todoContainer = document.getElementById("todo-container");

let projects = [];

class toDo{
    constructor(title, dueDate, description, priority){
        this.title = title;
        this.dueDate = dueDate;
        this.description = description;
        this.priority = priority;
    }

    get getTitle(){
        return this.title;
    }

    get getDueDate(){
        return this.dueDate;
    }

    get getDescription(){
        return this.description;
    }
    
    get getPriority(){
        return this.priority;
    }
}

class project{
    projectToDos = [];
    constructor(name){
        this.name = name;
    }

    get getToDos(){
        return this.projectToDos;
    }

    get getName(){
        return this.name;
    }

    addTodo(currentTodo){
        this.projectToDos.push(currentTodo);
    }

    removeTodo(index) {
        console.log("Remove");
        this.projectToDos.splice(this.id, 1);
    }
}

function newProject(){
    console.log("newProject");

    const na = window.prompt("Project Name");

    const proj2 = new project(na);

    projects.push(proj2);
    
    generateContainer();
}

function createNewToDo(){
    const ti = window.prompt("Title");
    const dat = window.prompt("Due Date");
    const de = window.prompt("Description");
    const pri = window.prompt("Priority");

    const td = new toDo(ti, dat, de, pri);

    projects[this.id].addTodo(td);
    generateContainer();
}  

function complete(){
    console.log("complete", this.id);
    this.innerText = "Done";
}

function deleteToDo(){
    //remove from array
    projects[this.parentNode.parentNode.id].removeTodo(this.id);
    //call display w same proj
    displayToDos(this.parentNode.parentNode.id);
}

function displayToDos(index){
    console.log("DISPLAY", typeof index);
    
    while (todoContainer.firstChild) {
        todoContainer.removeChild(todoContainer.firstChild);
    }

    let currentProject = [];
    let current = "";
    if(typeof index === "string"){
        console.log("asdf", index);
        currentProject = projects[index].getToDos;
        current = index;
    }else{
        console.log("qwer", index);
        currentProject = projects[this.parentNode.parentNode.id].getToDos;
        current = this.parentNode.parentNode.id;
    }

    console.log("PROJTODO", currentProject);
    const newDiv = document.createElement("div");
    

    for(let j=0; j<currentProject.length;j++){
        const todoDiv = document.createElement("div");

        const todoTitle = document.createElement("h3");
        const todoDate = document.createElement("h4");
        const todoDe = document.createElement("p");
        const todoPrio = document.createElement("p");

        todoTitle.innerText = currentProject[j].getTitle;
        todoDate.innerText = currentProject[j].getDueDate;
        todoDe.innerText = currentProject[j].getDescription;
        todoPrio.innerText = currentProject[j].getPriority;

        todoDiv.appendChild(todoTitle);
        todoDiv.appendChild(todoDate);
        todoDiv.appendChild(todoDe);
        todoDiv.appendChild(todoPrio);

        const completedButton = document.createElement("button");
        completedButton.addEventListener("click", complete);
        completedButton.innerText = "Completed";
        completedButton.id = j;

        const deleteButton = document.createElement("button");
        deleteButton.addEventListener("click", deleteToDo);
        deleteButton.innerText = "Delete";
        deleteButton.id = j;

        newDiv.appendChild(todoDiv);
        newDiv.appendChild(completedButton);
        newDiv.appendChild(deleteButton);
    }
    todoContainer.appendChild(newDiv);
    todoContainer.id = current;
}

function generateContainer(){
    //resets projectContainer div
    while (projectContainer.firstChild) {
        projectContainer.removeChild(projectContainer.firstChild);
    }

    for(i=0; i < projects.length; i++){
        const card = document.createElement("div");
        card.classList.add("card");
        card.id = i;
        
        let currentProject = projects[i].getToDos;
        console.log("PROJTODO", currentProject);
        const newDiv = document.createElement("div");

        //project title
        const newH1 = document.createElement("h1");
        newH1.innerText = projects[i].getName;
        newH1.addEventListener("click", displayToDos);
        newDiv.appendChild(newH1);

        card.appendChild(newDiv);

        const newCreateButton = document.createElement("button");
        newCreateButton.addEventListener("click", createNewToDo);
        newCreateButton.innerText = "New To Do";
        newCreateButton.id = i;
        card.appendChild(newCreateButton);

        projectContainer.appendChild(card);
    }
}


//Test
const td = new toDo("Bench", "May", "140lbs 1x5", "low");
const td2 = new toDo("Lift", "june", "205lbs 3x5", "low");
const proj = new project("Workout");
proj.addTodo(td);
proj.addTodo(td2);

projects.push(proj);

const td3 = new toDo("Paint", "May", "canvas", "high");
const td4 = new toDo("Draw", "june", "house", "low");
const proj2 = new project("Art");
proj2.addTodo(td3);
proj2.addTodo(td4);

projects.push(proj2);

generateContainer();