import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


import { NoteType } from '../../models/note-type'
import { NoteTypeService } from '../../services/note-type.service';

@Component({
  selector: 'note-list',
  templateUrl: 'app/components/note-type/note-type-add.component.html',
  styleUrls: ['app/components/note-type/note-type.css']
})
export class NoteTypeAddComponent {
  constructor(
    private router: Router,
    private location: Location,
    private noteTypeService: NoteTypeService) { }

  item = new NoteType('', '');

  onSubmit(): void {
    this.noteTypeService
      .create(this.item)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}