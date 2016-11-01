import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Note } from '../../models/note';
import { NoteType } from '../../models/note-type';
import { NoteService } from '../../services/note.service';
import { NoteTypeService } from '../../services/note-type.service';

@Component({
    selector: 'note-list',
    templateUrl: 'app/components/note/note-add.component.html'
})
export class NoteAddComponent implements OnInit {
    constructor(
        private router: Router,
        private location: Location,
        private route: ActivatedRoute,
        private noteService: NoteService,
        private noteTypeService: NoteTypeService) {
    }

    item = new Note();
    id: string;
    operation: string = 'Add';
    noteTypes: NoteType[];

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => this.id = params['id']);
        if (this.id) {
            this.operation = 'Edit';
            this.noteService.getItem(this.id).then(item => this.item = item);
        }
        this.noteTypeService.getItems().then(items => {
            this.noteTypes = items;
            this.item.noteType = items[0];
        });
    }

    onSubmit(): void {
        let operation: Promise<Note>;
        if (this.id) {
            operation = this.noteService.update(this.item);
        } else {
            operation = this.noteService.create(this.item);
        }
        operation.then(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }
}