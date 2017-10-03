import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ValidateService} from '../../services/validate.service';
import {ToastrService} from '../../services/toastr.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  phoneNumber: number;
  website: string;
  projectInfo: string;

  constructor(private validateService: ValidateService, private toastr: ToastrService) {
  }

  ngOnInit() {
  }

  sendEmail() {
    const contactInfo = {
      name: this.name,
      email: this.email,
      phoneNumber: this.phoneNumber,
      website: this.website,
      projectInfo: this.projectInfo
    };

    if (!this.validateService.validateSendEmail(contactInfo)) {
      this.toastr.warning('Please fill in all fields');
      return false;
    }

    if (!this.validateService.validateEmail(contactInfo.email)) {
      this.toastr.warning('Please use a valide email');
      return false;
    }


  }

}
