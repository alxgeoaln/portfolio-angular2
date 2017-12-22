import { Injectable, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class EmailService {

  constructor(private http: Http, @Inject(DOCUMENT) private document) {
  }
  url = this.document.location.protocol + '//' + this.document.location.hostname
  sendEmail(emailInfo) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.url + '/email/', emailInfo, { headers: headers });

  }

}
