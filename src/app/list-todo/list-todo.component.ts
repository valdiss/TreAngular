import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {


  @Output() taskClicked= new EventEmitter<{description:string, state:string}>();
  @Input() task;

  constructor() { }

  ngOnInit() {
  }
  onTaskClicked(description, state){
    this.taskClicked.emit({description: description, state: state});
  }

}
