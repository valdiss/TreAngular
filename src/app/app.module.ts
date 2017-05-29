import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { ListCurrentComponent } from './list-current/list-current.component';
import { ListDoneComponent } from './list-done/list-done.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { ProjectsComponent } from './projects/projects.component';
import { EmptylocalstorageComponent } from './emptylocalstorage/emptylocalstorage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListTodoComponent,
    ListCurrentComponent,
    ListDoneComponent,
    NewTaskComponent,
    ProjectsComponent,
    EmptylocalstorageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
