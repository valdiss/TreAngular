import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  description = '';
  @Output() taskCreated= new EventEmitter<{description:string, state:string}>();
  constructor() { }

  ngOnInit() {
  }
  onNewTaskCreated (){
    this.taskCreated.emit({description: this.description, state: 'todo'});
    this.description = '';
  }

}
