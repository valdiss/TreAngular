import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-done',
  templateUrl: './list-done.component.html',
  styleUrls: ['./list-done.component.css']
})
export class ListDoneComponent implements OnInit {
  @Output() taskClicked= new EventEmitter<{description:string, state:string}>();
  @Input() task;
  constructor() { }

  ngOnInit() {
  }

  onTaskClicked(description, state){
    this.taskClicked.emit({description: description, state: state});
  }
}
