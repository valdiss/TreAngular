import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Tasks = [];
  JSONTasks;
  formerTasks;
  constructor() {
    console.log(JSON.parse(localStorage.getItem('Tasks')));
    if ((localStorage.getItem('Tasks')) !== null){
      this.Tasks = JSON.parse(localStorage.getItem('Tasks'));
    }
  }

  onNewTask (newTaskData: {description:string, state:string}) {
    // this.formerTasks = this.Tasks;
    this.Tasks.push(newTaskData);
    this.JSONTasks = JSON.stringify(this.Tasks);
    localStorage.setItem("Tasks", this.JSONTasks);
  }

  onStateUpdate (taskClicked: {description:string, state:string}) {
    if(taskClicked.state === 'todo'){
      let newTasks = [];
      // this.formerTasks = this.Tasks;

      for(let i=0;i<this.Tasks.length;i++){
        if(this.Tasks[i].description !== taskClicked.description){
          newTasks.push(this.Tasks[i]);
        }
      }

      taskClicked.state = 'current';
      newTasks.push(taskClicked);
      this.Tasks = newTasks;
      this.JSONTasks = JSON.stringify(this.Tasks);
      localStorage.setItem("Tasks", this.JSONTasks);
    }
    else if (taskClicked.state === 'current'){
      let newTasks = [];
      // this.formerTasks = this.Tasks;

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
      // this.formerTasks = this.Tasks;

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

  // returnFormerTasks(){
  //   this.Tasks = this.formerTasks;
  //   this.JSONTasks = JSON.stringify(this.Tasks);
  //   localStorage.setItem("Tasks", this.JSONTasks);
  // }
}
