import { Component, OnInit } from '@angular/core';
import { HttpService } from './service.component';

@Component({
  selector: 'teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
})
export class TeacherComponent implements OnInit {
  teachers: any;
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
}
