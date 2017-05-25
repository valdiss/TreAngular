import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-current',
  templateUrl: './list-current.component.html',
  styleUrls: ['./list-current.component.css']
})
export class ListCurrentComponent implements OnInit {
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
