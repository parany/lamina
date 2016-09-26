import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Contact } from '../../models/contact'
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/components/contact/contact-add.component.html',
  styleUrls: ['app/components/contact/contact.css']
})
export class ContactAddComponent implements OnInit {
  contact = new Contact();

  constructor(
    private router: Router,
    private contactService: ContactService) {

     }

  ngOnInit(): void {
  }
}