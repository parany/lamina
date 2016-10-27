import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { NoteType } from '../../models/note-type'
import { NoteTypeService } from '../../services/note-type.service';
import { NoteService } from '../../services/note.service';

@Component({
    selector: 'note-list',
    templateUrl: 'app/components/note-type/note-type-detail.component.html',
    styleUrls: ['app/components/note-type/note-type.css']
})
export class NoteTypeDetailComponent implements OnInit {
    constructor(
        private router: Router,
        private location: Location,
        private route: ActivatedRoute,
        private noteTypeService: NoteTypeService,
        private noteService: NoteService) {
    }

    item = new NoteType();
    id: string;

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => this.id = params['id']);
        this.noteTypeService.getItem(this.id).then(item => {
            this.item = item;
            return this.noteService.getItems();
        }).then(allNotes => {
            let notes = allNotes.filter(n => n.noteType.id == this.id);
            this.item.nbOfNotes = notes.length;
        });
    }

    goBack(): void {
        this.location.back();
    }
}