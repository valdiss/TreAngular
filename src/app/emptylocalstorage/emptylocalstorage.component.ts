import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emptylocalstorage',
  templateUrl: './emptylocalstorage.component.html',
  styleUrls: ['./emptylocalstorage.component.css']
})
export class EmptylocalstorageComponent implements OnInit {

  constructor() { }

  onEmpty(){
    localStorage.clear();
    document.location.reload();
  }

  ngOnInit() {
  }

}
