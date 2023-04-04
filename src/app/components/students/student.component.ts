import { Component, OnInit } from '@angular/core';
import { HttpService } from './service.component';

@Component({
  selector: 'student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  students: any;

  displayedColumns: string[] = [
    'Id',
    'Name',
    'Stream',
    'Address',
    'PhoneNumber',
  ];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getPosts().subscribe(
      (res) => {
        this.students = res;
        console.log(this.students);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
