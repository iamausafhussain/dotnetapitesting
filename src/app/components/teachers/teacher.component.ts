import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { HttpService } from './service.component';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
})
export class TeacherComponent implements OnInit, OnChanges {
  teachers: any;
  getTeacherById: Array<any> = [];

  teacherId: number = 0;
  teacherName: string = '';
  teacherAge: number = 0;
  teacherSubject: string = '';

  displayedColumns: string[] = ['Id', 'Name', 'Age', 'Subject'];

  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.httpService.GetTeachers().subscribe(
      (res) => {
        this.teachers = res;
        console.log(this.teachers);
      },
      (err) => {
        console.log(err);
      }
    );

    // this.httpService.currentMessageByTeacherId.subscribe((message) => {
    //   this.getTeacherById = message;
    //   console.log(this.getTeacherById);
    // });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(typeof changes);
  }

  GetTeacherById() {
    this.httpService.GetTeacherById(this.teacherId);
    this.teacherId = 0;
    this.httpService.currentMessageByTeacherId.subscribe((message) => {
      this.getTeacherById.splice(0, 1);
      this.getTeacherById.push(message);
      // this.teachers = this.getTeacherById;
    });
  }

  CreateTeacher() {
    this.httpService.SetTeacher(
      this.teacherName,
      this.teacherAge,
      this.teacherSubject
    );
    this.teacherName = '';
    this.teacherAge = 0;
    this.teacherSubject = '';
    // this.router.navigateByUrl('/teacher');
  }

  UpdateTeacher() {
    this.httpService.UpdateTeacher(
      this.teacherId,
      this.teacherName,
      this.teacherAge,
      this.teacherSubject
    );
    this.teacherId = 0;
    this.teacherName = '';
    this.teacherAge = 0;
    this.teacherSubject = '';
    // window.location.reload();
  }

  DeleteTeacher() {
    this.httpService.DeleteTeacher(this.teacherId);
    this.teacherId = 0;
  }
}
