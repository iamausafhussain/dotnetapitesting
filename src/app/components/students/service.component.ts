import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const uri = 'https://localhost:7018';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private getUrl = '/getStudent';

  private postUrl = '/createStudent';

  private putUrl = '/updateStudent';

  private deleteUrl = '/deleteStudent';

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(uri + this.getUrl);
  }
}
