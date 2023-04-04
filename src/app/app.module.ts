import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentComponent } from './components/students/student.component';
import { TeacherComponent } from './components/teachers/teacher.component';

//angular imports
import { MatTableModule } from '@angular/material/table';

const routes: Routes = [
  { path: '', component: StudentComponent },
  { path: 'teacher', component: TeacherComponent },
];

@NgModule({
  declarations: [AppComponent, StudentComponent, TeacherComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
