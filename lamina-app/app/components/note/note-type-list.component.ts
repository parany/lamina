import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NoteType } from '../../models/note-type'
import { NoteTypeService } from '../../services/note-type.service';

@Component({
  selector: 'note-list',
  templateUrl: 'app/components/note/note-type-list.component.html',
  styleUrls: ['app/components/note/note.css']
})
export class NoteTypeListComponent implements OnInit {
  items: NoteType[] = [];

  private allContacts: NoteType[];

  constructor(
    private router: Router,
    private noteTypeService: NoteTypeService) { }

  onSearch(filter: string): void {
    var regex = new RegExp(filter, 'i');
    this.items = this.allContacts.filter(c => regex.test(`${c.label} ${c.description}`));
  }

  ngOnInit(): void {
    this.noteTypeService.getItems()
      .then(contacts => {
        this.allContacts = contacts;
        this.items = this.allContacts;
      });
  }

  gotoDetail(contact: NoteType): void {
    let link = ['/note', contact.id];
    this.router.navigate(link);
  }
}