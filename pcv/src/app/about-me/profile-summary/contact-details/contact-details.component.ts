import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'profile-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css', '../../profile/profile.component.css']
})
export class ContactDetailsComponent { 
  faEnvelope = faEnvelope;
  faLinkedinIn = faLinkedinIn;
  faGithub = faGithub;
}
