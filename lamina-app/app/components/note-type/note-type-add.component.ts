import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { NoteType } from '../../models/note-type'
import { NoteTypeService } from '../../services/note-type.service';

@Component({
  selector: 'note-list',
  templateUrl: 'app/components/note-type/note-type-add.component.html',
  styleUrls: ['app/components/note-type/note-type.css']
})
export class NoteTypeAddComponent implements OnInit {
  constructor(
    private router: Router,
    private location: Location,
    private route: ActivatedRoute,
    private noteTypeService: NoteTypeService) {
  }

  item = new NoteType();
  id: string;

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
      console.log(this.id);
    });
    if (this.id) {
      this.noteTypeService.getItem(this.id).then(item =>  this.item = item);
    }
  }

  onSubmit(): void {
    let operation: Promise<NoteType>;
    if (this.id) {
        operation = this.noteTypeService.update(this.item);
    } else {
      operation = this.noteTypeService.create(this.item);
    }
    operation.then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}