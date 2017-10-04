import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class EmailService {

  constructor(private http: Http) {
  }

  sendEmail(emailInfo) {
    console.log(emailInfo);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:8080/email/', emailInfo, {headers: headers});

  }

}
