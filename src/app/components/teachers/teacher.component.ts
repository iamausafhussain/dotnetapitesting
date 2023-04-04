import { Component, OnInit } from '@angular/core';
import { HttpService } from './service.component';

@Component({
  selector: 'teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
})
export class TeacherComponent implements OnInit {
  teachers: any;
  teacherId: number = 0;
  teacherName: string = '';
  teacherAge: number = 0;
  teacherSubject: string = '';

  displayedColumns: string[] = ['Id', 'Name', 'Age', 'Subject'];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getPosts().subscribe(
      (res) => {
        this.teachers = res;
        console.log(this.teachers);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  CreateTeacher() {
    this.httpService.setPosts(
      this.teacherName,
      this.teacherAge,
      this.teacherSubject
    );
    this.teacherName = '';
    this.teacherAge = 0;
    this.teacherSubject = '';
    window.location.reload();
  }
}
