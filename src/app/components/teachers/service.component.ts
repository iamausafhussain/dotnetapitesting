import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const uri = 'https://localhost:7018';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private getUrl = '/getTeachers';

  private getByIdUrl = '/getTeacher';

  private postUrl = '/createTeacher';

  private putUrl = '/updateTeacher';

  private deleteUrl = '/deleteTeacher';

  private messageByTeacherId = new BehaviorSubject({});
  currentMessageByTeacherId = this.messageByTeacherId.asObservable();

  constructor(private http: HttpClient) {}

  GetTeachers() {
    return this.http.get(uri + this.getUrl);
  }

  GetTeacherById(id: number) {
    return this.http.get(uri + this.getByIdUrl + '/' + id).subscribe((req) => {
      this.messageByTeacherId.next(req);
    });
  }

  SetTeacher(name: string, age: number, subject: string) {
    let reqbody = {
      teacherName: name,
      teacherAge: age,
      teacherSubject: subject,
    };
    this.http.post(uri + this.postUrl, reqbody).subscribe((req) => {
      console.log(req);
    });
  }

  UpdateTeacher(id: number, name: string, age: number, subject: string) {
    let currentUri = uri + this.putUrl + '/' + id;
    let reqbody = {
      teacherId: id,
      teacherName: name,
      teacherAge: age,
      teacherSubject: subject,
    };
    this.http.put(uri + this.putUrl + '/' + id, reqbody).subscribe((req) => {
      console.log(req);
    });
    console.log('currentUri: ', currentUri);
  }

  DeleteTeacher(id: number) {
    this.http.delete(uri + this.deleteUrl + '/' + id).subscribe((req) => {
      console.log(req);
    });
    console.log('currentUrl', uri + this.deleteUrl + '/' + id);
  }
}
