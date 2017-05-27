import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Tasks = [];
  JSONTasks;

  projects = [];
  JSONprojects;

  currentProject;
  JSONcurrentProject;

  timesVisited = 0;

  constructor() {
    console.log(JSON.parse(localStorage.getItem('Tasks')));
    if ((localStorage.getItem('Tasks')) !== null){
      this.Tasks = JSON.parse(localStorage.getItem('Tasks'));
    }
    if ((localStorage.getItem('projects')) !== null){
      this.projects = JSON.parse(localStorage.getItem('projects'));
    }
    if ((localStorage.getItem('currentProject')) !== null){
      this.currentProject = JSON.parse(localStorage.getItem('currentProject'));
    }
    if ((localStorage.getItem('timesVisited')) !== null){
      this.timesVisited = JSON.parse(localStorage.getItem('timesVisited'));
    }
    this.timesVisited ++;
    console.log(this.timesVisited);
    localStorage.setItem("timesVisited", JSON.stringify(this.timesVisited));
  }

  onNewTask (newTaskData: {description:string, state:string}) {
    this.Tasks.push(newTaskData);
    this.JSONTasks = JSON.stringify(this.Tasks);
    localStorage.setItem("Tasks", this.JSONTasks);
  }

  onNewProject (newProjectData: {projectName : string}) {
    this.projects.push(newProjectData.projectName);
    this.JSONprojects = JSON.stringify(this.projects);
    localStorage.setItem("projects", this.JSONprojects);
    this.currentProject = newProjectData.projectName;
    this.JSONcurrentProject = JSON.stringify(this.currentProject);
    localStorage.setItem("currentProject", this.JSONcurrentProject);
  }

  onDeleteProject (deleteProjectData: {projectName : string}) {
    let newProjects = [];
    //search through the projects array and delete it
    for(let i=0;i<this.projects.length;i++){
      if(this.projects[i] !== deleteProjectData.projectName){
        newProjects.push(this.projects[i]);
      }
    }
    this.projects = newProjects;
    this.JSONprojects = JSON.stringify(this.projects);
    localStorage.setItem("projects", this.JSONprojects);
    this.currentProject = this.projects[0];
    this.JSONcurrentProject = JSON.stringify(this.currentProject);
    localStorage.setItem("currentProject", this.JSONcurrentProject);

    //search through Tasks array and suppress every Task within the project to delete
    let newTasks = [];

    for(let i=0;i<this.Tasks.length;i++){
      if(this.Tasks[i].project !== deleteProjectData.projectName){
        newTasks.push(this.Tasks[i]);
      }
    }
    this.Tasks = newTasks;
    this.JSONTasks = JSON.stringify(this.Tasks);
    localStorage.setItem("Tasks", this.JSONTasks);
  }

  onStateUpdate (taskClicked: {description:string, state:string, start:any}) {
    if(taskClicked.state === 'todo'){
      let newTasks = [];

      for(let i=0;i<this.Tasks.length;i++){
        if(this.Tasks[i].description !== taskClicked.description){
          newTasks.push(this.Tasks[i]);
        }
      }

      taskClicked.state = 'current';
      taskClicked.start = new Date();
      newTasks.push(taskClicked);
      this.Tasks = newTasks;
      this.JSONTasks = JSON.stringify(this.Tasks);
      localStorage.setItem("Tasks", this.JSONTasks);
    }
    else if (taskClicked.state === 'current'){
      let newTasks = [];

      for(let i=0;i<this.Tasks.length;i++){
        if(this.Tasks[i].description !== taskClicked.description){
          newTasks.push(this.Tasks[i]);
        }
      }

      taskClicked.state = 'done';
      newTasks.push(taskClicked);
      this.Tasks = newTasks;
      this.JSONTasks = JSON.stringify(this.Tasks);
      localStorage.setItem("Tasks", this.JSONTasks);
    }
    else if (taskClicked.state === 'done'){
      let newTasks = [];

      for(let i=0;i<this.Tasks.length;i++){
        if(this.Tasks[i].description !== taskClicked.description){
          newTasks.push(this.Tasks[i]);
        }
      }

      this.Tasks = newTasks;
      this.JSONTasks = JSON.stringify(this.Tasks);
      localStorage.setItem("Tasks", this.JSONTasks);
    }
  }


    onSelectedProject (selectedProjectData: {projectName : string}) {
      this.currentProject = selectedProjectData.projectName;
      this.JSONcurrentProject = JSON.stringify(this.currentProject);
      localStorage.setItem("currentProject", this.JSONcurrentProject);
    }
}
