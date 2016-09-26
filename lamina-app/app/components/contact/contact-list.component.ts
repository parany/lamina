import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Contact } from '../../models/contact'
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/components/contact/contact-list.component.html',
  styleUrls: ['app/components/contact/contact.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

  private allContacts: Contact[];

  constructor(
    private router: Router,
    private contactService: ContactService) { }

  onSearch(filter: string): void {
    var regex = new RegExp(filter, 'i');
    this.contacts = this.allContacts.filter(c => regex.test(`${c.firstName} ${c.lastName}`));
  }

  ngOnInit(): void {
    this.contactService.getContacts()
      .then(contacts => {
        this.allContacts = contacts;
        this.contacts = this.allContacts;
      });
  }

  gotoDetail(contact: Contact): void {
    let link = ['/contact', contact.id];
    this.router.navigate(link);
  }
}