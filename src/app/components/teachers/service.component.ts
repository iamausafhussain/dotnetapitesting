import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const uri = 'https://localhost:7018';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private getUrl = '/getTeachers';

  private postUrl = '/createTeacher';

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(uri + this.getUrl);
  }

  setPosts(name: string, age: number, subject: string) {
    let reqbody = {
      teacherName: name,
      teacherAge: age,
      teacherSubject: subject,
    };
    this.http.post(uri + this.postUrl, reqbody).subscribe((req) => {
      console.log(req);
    });
  }
}
