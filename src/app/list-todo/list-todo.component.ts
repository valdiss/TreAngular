import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {


  @Output() taskClicked= new EventEmitter<{description:string, state:string, project:string}>();
  @Input() task;
  @Input() currentProject;

  constructor() { }

  ngOnInit() {
  }
  onTaskClicked(description, state, project){
    this.taskClicked.emit({description: description, state: state, project: project});
  }

}
