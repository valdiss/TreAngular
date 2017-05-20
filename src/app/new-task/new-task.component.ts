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
  onNewTaskCreated (description){
    this.taskCreated.emit({description: description.value, state: 'todo'});
    this.description = '';
  }

}
