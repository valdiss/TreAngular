import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @Input() projects;
  @Output() projectCreated= new EventEmitter<{projectName:string}>();
  @Output() projectDeleted= new EventEmitter<{projectName:string}>();
  @Output() projectSelected= new EventEmitter<{projectName:string}>();
  @Input() selectedProject;

  constructor() {
  }

  onNewProjectCreated (newprojectName){
    this.projectCreated.emit({projectName: newprojectName.value});
    newprojectName.value = '';
  }

  onDeleteProject (selectedProject){
    this.projectDeleted.emit({projectName: selectedProject});
  }

  onSelectedProject (selectedProject){
    this.projectSelected.emit({projectName: selectedProject});
  }

  ngOnInit() {
  }

}
