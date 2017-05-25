import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  description = '';
  @Output() taskCreated= new EventEmitter<{description:string, state:string, project:string}>();
  @Input() currentProject;
  constructor() { }

  ngOnInit() {
  }
  onNewTaskCreated (description, selectedValue, project){
    this.taskCreated.emit({description: description.value, state: 'todo', project: this.currentProject});
    description.value = '';
  }
}
